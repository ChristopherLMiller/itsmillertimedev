import { registerEnumType } from '@nestjs/graphql';

export enum SettingsScalarFieldEnum {
    id = "id",
    key = "key",
    value = "value"
}


registerEnumType(SettingsScalarFieldEnum, { name: 'SettingsScalarFieldEnum', description: undefined })
