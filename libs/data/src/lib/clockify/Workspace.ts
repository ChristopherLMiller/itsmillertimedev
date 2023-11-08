import { HourlyRate } from './HourlyRate';
import { Membership } from './Membership';
import { WorkspaceSettings } from './WorkspaceSettings';

export interface Workspace {
  id: string;
  name: string;
  hourlyRate: HourlyRate;
  costRate: null;
  memberships: Membership[];
  workspaceSettings: WorkspaceSettings;
  imageUrl: string;
  featureSubscriptionType: string;
}
