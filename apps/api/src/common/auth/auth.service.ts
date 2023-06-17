import { Injectable } from '@nestjs/common';
import { createClient } from '@supabase/supabase-js';
import { CurrentAdmin } from 'adminjs';
import { config } from '../../../config';

@Injectable()
export class AuthService {
  supabase = createClient(config.supabase.url, config.supabase.key);

  signInEmail = async (
    email: string,
    password: string
  ): Promise<CurrentAdmin | null> => {
    const { data, error } = await this.supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (!error) {
      return Promise.resolve({ email, password });
    } else {
      console.log(error.stack);
      throw new Error(error.message);
    }
  };
}
