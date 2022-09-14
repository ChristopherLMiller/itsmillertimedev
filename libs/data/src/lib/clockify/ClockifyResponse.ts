import { ClockifyProject } from './ClockifyProject';
import { ClockifyTimeInterval } from './ClockifyTimeInterval';
import { ClockifyUser } from './ClockifyUser';

export interface ClockifyResponse {
  id: string;
  description: string;
  userId: string;
  billable: boolean;
  projectId: string;
  timeInterval: ClockifyTimeInterval;
  workspaceId: string;
  isLocked: boolean;
  hourlyRate: null;
  costRate: null;
  customFieldValues: any[];
  type: string;
  kioskId: null;
  currentlyRunning: boolean;
  project: ClockifyProject;
  task: null;
  user: ClockifyUser;
  tags: any[];
}
