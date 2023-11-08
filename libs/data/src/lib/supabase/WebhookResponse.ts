import { OldRecord } from './OldRecord';
import { Record } from './Record';

export interface SupabaseWebhookResponse {
  type: string;
  table: string;
  record?: Record;
  schema: string;
  old_record?: OldRecord;
}
