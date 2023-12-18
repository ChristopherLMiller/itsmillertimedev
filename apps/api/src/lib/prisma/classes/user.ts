import { Role } from "./role";
import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";

export class User {
  @ApiProperty({ type: Number })
  id: number;

  @ApiProperty({ type: String })
  supabaseId: string;

  @ApiProperty({ type: String })
  email: string;

  @ApiProperty({ type: () => Role })
  role: Role;

  @ApiProperty({ type: Number })
  roleId: number;

  @ApiPropertyOptional({ type: Object })
  meta?: object;
}
