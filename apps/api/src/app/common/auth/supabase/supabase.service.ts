import { Injectable, Logger, UnauthorizedException } from "@nestjs/common";
import {
  AuthChangeEvent,
  AuthError,
  Session,
  UserResponse,
  createClient,
} from "@supabase/supabase-js";
import { ClsService } from "nestjs-cls";
import { UserProfilesService } from "../userProfiles/userProfiles.service";

@Injectable()
export class SupabaseService {
  constructor(
    private readonly asyncLocalStorage: ClsService,
    private readonly userProfile: UserProfilesService,
  ) {
    // Listen for auth state changes to happen
    this._supabase.auth.onAuthStateChange((event, session) =>
      this.onAuthEvent(event, session),
    );
  }

  private readonly _logger = new Logger(SupabaseService.name);

  private _supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_KEY,
  );

  // Function to handle authentication events with supabase
  async onAuthEvent(event: AuthChangeEvent, session: Session): Promise<void> {
    switch (event) {
      case "SIGNED_IN": {
        // We need to see if the user's profile exists, if not create it
        const userProfile = await this.userProfile.getUser(session.user.id);
        if (userProfile === undefined || userProfile === null) {
          const result = await this.userProfile.createUser(session.user);
          if (result !== null) {
            this._logger.log(
              `Successfully created userProfile for ${result.email}`,
            );
          }
        }
        break;
      }
      case "SIGNED_OUT": {
        this._logger.log(`${session.user.email} has logged out`);
        break;
      }
    }
  }

  async getUser(token: string): Promise<UserResponse> {
    return this._supabase.auth.getUser(token);
  }

  // Function to extract the users JWT bearer token from the request
  getJWT(): string | null {
    const authHeader = this.asyncLocalStorage.get("bearer_token");
    if (authHeader) {
      return authHeader.split(" ")[1];
    }

    return null;
  }

  // Function to get the supabse user from the request object
  async getUserFromRequest(): Promise<UserResponse["data"]["user"]> {
    const supabaseUser = await this.getUser(this.getJWT());

    if (supabaseUser.error) {
      if (supabaseUser.error instanceof AuthError) {
        if (supabaseUser.error.status === 401) {
          if (
            supabaseUser.error.message === "invalid claim: missing sub claim"
          ) {
            throw new UnauthorizedException(
              "Bearer token not provided with the request",
            );
          } else {
            throw new UnauthorizedException(supabaseUser.error.message);
          }
        } else {
          throw new UnauthorizedException(
            `${supabaseUser.error.name}: ${supabaseUser.error.message}`,
          );
        }
      }
    } else {
      return supabaseUser.data.user;
    }
  }

  async login(identifier: string, password: string): Promise<UserResponse> {
    return this._supabase.auth.signInWithPassword({
      email: identifier,
      password: password,
    });
  }

  // Determine if the user is logged in
  async isLoggedIn(): Promise<boolean> {
    try {
      const user = await this.getUserFromRequest();
      if (user) return true;
    } catch (error) {
      return false;
    }
  }
}
