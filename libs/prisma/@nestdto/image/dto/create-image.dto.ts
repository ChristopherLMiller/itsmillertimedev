
import {Prisma} from '@prisma/client'




export class CreateImageDto {
  public_id: string;
version?: number;
format?: string;
url?: string;
secureUrl?: string;
base64?: string;
alt?: string;
caption?: string;
width?: number;
height?: number;
bytes?: number;
thumbnail?: string;
exif?: Prisma.InputJsonValue;
}
