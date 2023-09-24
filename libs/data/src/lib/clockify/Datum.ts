import { HourlyRate } from './HourlyRate';
import { Membership } from './Membership';
import { WorkspaceSettings } from './WorkspaceSettings';

export interface Datum {
  id: string;
  name: string;
  hourlyRate: HourlyRate;
  costRate: null;
  memberships: Membership[];
  workspaceSettings: WorkspaceSettings;
  imageURL: string;
  featureSubscriptionType: string;
}
