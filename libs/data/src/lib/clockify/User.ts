import { Settings } from './Settings';

export interface User {
  id: string;
  email: string;
  name: string;
  memberships?: [];
  profilePicture?: string;
  activeWorkspace: string;
  defaultWorkspace: string;
  settings?: Settings;
  status?: string;
  customFields?: [];
}
