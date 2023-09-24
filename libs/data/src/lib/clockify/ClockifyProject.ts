import { Data } from './Data';
import { Meta } from './Meta';

export interface ClockifyProject {
  statusCode: number;
  data: Data;
  meta: Meta;
}
