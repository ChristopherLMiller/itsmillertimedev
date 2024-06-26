import { Post } from "@itsmillertimedev/data";
import { ApiProperty } from "@nestjs/swagger";
import { FilterDTO } from "../common/filter.dto";

export class FindPostsDTO extends FilterDTO {
  @ApiProperty({
    required: false,
    description: "What fields to return from the data type",
  })
  public readonly fields?: keyof Post;

  @ApiProperty({
    required: false,
    description: "What related fields to include",
  })
  public readonly include?: string;
}
