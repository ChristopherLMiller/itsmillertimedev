import { Estimate } from './Estimate';
import { HourlyRate } from './HourlyRate';
import { Membership } from './Membership';
import { TimeEstimate } from './TimeEstimate';

export interface Data {
  id: string;
  name: string;
  hourlyRate: HourlyRate;
  clientID: string;
  workspaceID: string;
  billable: boolean;
  memberships: Membership[];
  color: string;
  estimate: Estimate;
  archived: boolean;
  duration: string;
  clientName: string;
  note: string;
  costRate: null;
  timeEstimate: TimeEstimate;
  budgetEstimate: null;
  template: boolean;
  public: boolean;
}
