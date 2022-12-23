import { registerEnumType } from '@nestjs/graphql';

export enum ClockifyTimerScalarFieldEnum {
    projectId = "projectId",
    startTime = "startTime",
    id = "id"
}


registerEnumType(ClockifyTimerScalarFieldEnum, { name: 'ClockifyTimerScalarFieldEnum', description: undefined })
