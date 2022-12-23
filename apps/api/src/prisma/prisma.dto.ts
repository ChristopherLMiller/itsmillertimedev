import { Transform } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';

export class PrismaDTO {
  sort: string;

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  skip: number;

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  take: number;

  where: string;
}
