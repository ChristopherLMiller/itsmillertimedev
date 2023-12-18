import { MinecraftRuleCategory } from "./minecraft_rule_category";
import { ApiProperty } from "@nestjs/swagger";

export class MinecraftRule {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  name: string;

  @ApiProperty({ type: String })
  description: string;

  @ApiProperty({ type: Date })
  createdAt: Date;

  @ApiProperty({ type: Date })
  updatedAt: Date;

  @ApiProperty({ type: Number })
  categoryId: number;

  @ApiProperty({ type: () => MinecraftRuleCategory })
  category: MinecraftRuleCategory;
}
