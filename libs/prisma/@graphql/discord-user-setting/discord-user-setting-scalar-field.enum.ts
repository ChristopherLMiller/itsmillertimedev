import { registerEnumType } from '@nestjs/graphql';

export enum DiscordUserSettingScalarFieldEnum {
    userId = "userId",
    meta = "meta"
}


registerEnumType(DiscordUserSettingScalarFieldEnum, { name: 'DiscordUserSettingScalarFieldEnum', description: undefined })
