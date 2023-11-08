import { Estimate } from './Estimate';
import { TimeEstimate } from './TimeEstimate';

export interface Project {
  name: string;
  clientId: string;
  workspaceId: string;
  billable?: boolean;
  estimate?: Estimate;
  color?: string;
  archived?: boolean;
  clientName?: string;
  duration?: string;
  note?: string;
  activeEstimate?: string;
  timeEstimate?: TimeEstimate;
  budgetEstimate?: null;
  id: string;
  public?: boolean;
  template?: boolean;
}
