import { Round } from './Round';

export interface WorkspaceSettings {
  timeRoundingInReports: boolean;
  onlyAdminsSeeBillableRates: boolean;
  onlyAdminsCreateProject: boolean;
  onlyAdminsSeeDashboard: boolean;
  defaultBillableProjects: boolean;
  lockTimeEntries: null;
  lockTimeZone: null;
  round: Round;
  projectFavorites: boolean;
  canSeeTimeSheet: boolean;
  canSeeTracker: boolean;
  projectPickerSpecialFilter: boolean;
  forceProjects: boolean;
  forceTasks: boolean;
  forceTags: boolean;
  forceDescription: boolean;
  onlyAdminsSeeAllTimeEntries: boolean;
  onlyAdminsSeePublicProjectsEntries: boolean;
  trackTimeDownToSecond: boolean;
  projectGroupingLabel: string;
  adminOnlyPages: any[];
  automaticLock: null;
  onlyAdminsCreateTag: boolean;
  onlyAdminsCreateTask: boolean;
  timeTrackingMode: string;
  isProjectPublicByDefault: boolean;
}
