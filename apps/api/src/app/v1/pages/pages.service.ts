import { DB, Page } from "@itsmillertimedev/data";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Kysely, Selectable } from "kysely";
import { ClsService } from "nestjs-cls";
import { InjectKysely } from "nestjs-kysely";
import { SupabaseService } from "../../common/auth/supabase/supabase.service";
import { UserProfilesService } from "../../common/auth/userProfiles/userProfiles.service";

@Injectable()
export class PagesService {
  constructor(
    @InjectKysely() private readonly db: Kysely<DB>,
    private readonly asyncLocalStorage: ClsService,
    private readonly supabaseService: SupabaseService,
    private readonly userProfiles: UserProfilesService,
  ) {}

  async findAll() {
    const data = await this.db.selectFrom("Page").selectAll().execute();

    return {
      data,
      meta: {
        count: data.length,
      },
    };
  }
  async findOne(slug: string): Promise<Selectable<Page>> {
    const bearerToken = this.asyncLocalStorage.get("BEARER_TOKEN");

    // Grab the entry from the DB
    const page = await this.db
      .selectFrom("Page")
      .selectAll()
      .where("Page.slug", "=", slug)
      .executeTakeFirst();

    if (bearerToken !== undefined && !page.isPublic) {
      throw new UnauthorizedException("Page is not public");
    } else {
      return page;
    }
  }
}
