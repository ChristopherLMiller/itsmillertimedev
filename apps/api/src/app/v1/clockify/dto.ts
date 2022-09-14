import { ApiProperty } from '@nestjs/swagger';

export class StartTimerDto {
  @ApiProperty({ name: 'projectID', type: 'string', required: true })
  projectID: string;
}

export class ClockifyWorkspaceDto {}

export class getProjectsDto {
  @ApiProperty({ name: 'archived', type: 'boolean', required: false })
  archived?: boolean;
  @ApiProperty({ name: 'page-size', type: 'number', required: false })
  pageSize?: number;
  @ApiProperty({ name: 'name', type: 'string', required: false })
  name?: string;
  @ApiProperty({ name: 'page', type: 'number', required: false })
  page?: number;
}
