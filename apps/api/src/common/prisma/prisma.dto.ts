import { Transform } from 'class-transformer';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class PrismaDTO {
  sort: string;

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  skip: number;

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  start: number;

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  take: number;

  @IsInt()
  @IsOptional()
  @Transform(({ value }) => Number.parseInt(value))
  limit: number;

  @IsString()
  @IsOptional()
  published: string;

  @IsOptional()
  where: string;

  @IsOptional()
  select: any;
}
