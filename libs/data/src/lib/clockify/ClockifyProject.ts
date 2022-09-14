import { ClockifyEstimate } from './ClockifyEstimate';
import { ClockifyTimeEstimate } from './ClockifyTimeEstimate';

export interface ClockifyProject {
  name: string;
  clientId: string;
  workspaceId: string;
  billable: boolean;
  estimate: ClockifyEstimate;
  color: string;
  archived: boolean;
  clientName: string;
  duration: string;
  note: string;
  budgetEstimate: null;
  timeEstimate: ClockifyTimeEstimate;
  activeEstimate: string;
  id: string;
  public: boolean;
  template: boolean;
}
