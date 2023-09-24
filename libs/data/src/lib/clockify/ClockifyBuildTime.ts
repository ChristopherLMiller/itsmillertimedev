import { Data } from './Data';
import { Meta } from './Meta';

export interface ClockifyBuildTime {
  statusCode: number;
  data: Data;
  meta: Meta;
}
