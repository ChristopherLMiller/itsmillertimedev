import { ApiProperty } from "@nestjs/swagger";

export class FilterDTO {
  @ApiProperty({
    example: 10,
    //default: 10,
    description: "How many records to return",
    required: false,
    type: Number,
    minimum: 0,
  })
  public readonly limit?: number;

  @ApiProperty({
    //default: 10,
    minimum: 0,
    type: Number,
    description: "How many records to offset from 0 index",
    example: 10,
    required: false,
  })
  public readonly skip?: number;

  @ApiProperty({
    description: "Field to order selection by",
    //default: "publishedAt",
    enum: ["publishedAt", "updatedAt", "createdAt"],
    required: false,
  })
  public readonly orderBy?: "publishedAt" | "updatedAt" | "createdAt";

  @ApiProperty({
    description: "Sort order, ascending or descending",
    //default: "asc",
    enum: ["asc", "desc"],
    required: false,
  })
  public readonly orderDirection?: "asc" | "desc";

  @ApiProperty({ required: false })
  public readonly where?: any;
}
