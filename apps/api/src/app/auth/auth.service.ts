import { Injectable, Logger } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { CurrentAdmin } from 'adminjs';
import { config } from '../../../config';

@Injectable()
export class AuthService {
  logger = new Logger(AuthService.name);
  supabase = createClient(config.supabase.url, config.supabase.key);

  signInEmail = async (
    email: string,
    password: string
  ): Promise<CurrentAdmin | null> => {
    const { error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      return Promise.resolve({ email, password });
    } else {
      this.logger.error(error.message);
      throw new Error(error.message);
    }
  };
}
