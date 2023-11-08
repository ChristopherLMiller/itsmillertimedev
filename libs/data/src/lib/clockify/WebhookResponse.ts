import { Project } from './Project';
import { TimeInterval } from './TimeInterval';
import { User } from './User';

export interface WebhookResponse {
  id: string;
  description: string;
  userId: string;
  billable: boolean;
  projectId: string;
  timeInterval: TimeInterval;
  workspaceId: string;
  isLocked: boolean;
  hourlyRate: null;
  costRate: null;
  customFieldValues: unknown[];
  type: string;
  kioskId: null;
  currentlyRunning: boolean;
  project: Project;
  task: null;
  user: User;
  tags: unknown[];
}
