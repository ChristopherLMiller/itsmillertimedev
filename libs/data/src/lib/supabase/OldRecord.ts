import { RawAppMetaData } from './RawAppMetaData';
import { RawUserMetaData } from './RawUserMetaData';

export interface OldRecord {
  id: string;
  aud: string;
  role: string;
  email: string;
  phone: null;
  created_at: string;
  deleted_at: null;
  invited_at: null;
  updated_at: string;
  instance_id: string;
  is_sso_user: boolean;
  banned_until: null;
  confirmed_at: string;
  email_change: string;
  phone_change: string;
  is_super_admin: null;
  recovery_token: string;
  last_sign_in_at: null;
  recovery_sent_at: null;
  raw_app_meta_data: RawAppMetaData;
  confirmation_token: string;
  email_confirmed_at: string;
  encrypted_password: string;
  phone_change_token: string;
  phone_confirmed_at: null;
  raw_user_meta_data: RawUserMetaData;
  confirmation_sent_at: null;
  email_change_sent_at: null;
  phone_change_sent_at: null;
  email_change_token_new: string;
  reauthentication_token: string;
  reauthentication_sent_at: null;
  email_change_token_current: string;
  email_change_confirm_status: number;
}
