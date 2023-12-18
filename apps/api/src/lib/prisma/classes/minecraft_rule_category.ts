import { MinecraftRule } from "./minecraft_rule";
import { ApiProperty } from "@nestjs/swagger";

export class MinecraftRuleCategory {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  icon: string;

  @ApiProperty({ isArray: true, type: () => MinecraftRule })
  MinecraftRules: MinecraftRule[];
}
