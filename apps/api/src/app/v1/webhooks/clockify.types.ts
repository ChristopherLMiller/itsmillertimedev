export interface ClockifyProject {
  id: string;
  name: string;
}

export interface ClockifyTimeInterval {
  start: 'string';
  end: 'string';
  duration: 'string;';
}

export interface ClockifyWebhookResponse {
  project: ClockifyProject;
  timeInterval: ClockifyTimeInterval;
}
