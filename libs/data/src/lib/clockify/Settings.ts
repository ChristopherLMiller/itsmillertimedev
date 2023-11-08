import { SummaryReportSettings } from './SummaryReportSetting';

export interface Settings {
  weekStart: string;
  timeZone: string;
  timeFormat: string;
  dateFormat: string;
  sendNewsletter: boolean;
  weeklyUpdates: boolean;
  longRunning: boolean;
  scheduledReports: boolean;
  approval: boolean;
  pto: boolean;
  alerts: boolean;
  reminders: boolean;
  timeTrackingManual: boolean;
  summaryReportSettings: SummaryReportSettings;
  isCompactViewOn: boolean;
  dashboardSelection: string;
  dashboardViewType: string;
  dashboardPinToTop: boolean;
  projectListCollapse: null;
  collapseAllProjectLists: boolean;
  groupSimilarEntriesDisabled: boolean;
  myStartOfDay: string;
  projectPickerTaskFilter: boolean;
  lang: null;
  multiFactorEnabled: boolean;
  theme: string;
  scheduling: boolean;
  onboarding: boolean;
  showOnlyWorkingDays: boolean;
}
