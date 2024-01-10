import {
  BadRequestException,
  Injectable,
  Logger,
  OnModuleInit,
} from "@nestjs/common";
import { Prisma, PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient<Prisma.PrismaClientOptions, "query" | "error">
  implements OnModuleInit
{
  private readonly _logger = new Logger(PrismaService.name);

  constructor() {
    super({ log: [{ emit: "event", level: "query" }] });

    this._logger.log(`Prisma v${Prisma.prismaVersion.client}`);
  }

  async onModuleInit(): Promise<void> {
    this.$on("error", (event) => {
      this._logger.log(event);
    });

    // lets log when in dev mode
    if (process.env.NODE_ENV === "development") {
      this.$on("query", (e) => this._logger.debug(`${e.query} ${e.params}`));
    }

    try {
      await this.$connect();
    } catch (error) {
      if (error.errorCode === "P10001") {
        this._logger.log(error);
        process.exit(1);
      } else {
        this._logger.log(error);
      }
    }
  }

  async create<T>(model: string, data: any): Promise<T> {
    try {
      const result = await this[model].create({
        data,
      });
      return result;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          // Error code is from prisma docs https://www.prisma.io/docs/reference/api-reference/error-reference
          // Unique constraint fail, increment the counter
          throw new BadRequestException(`Slug already exists`);
        } else {
          throw new Error(error.message);
        }
      } else {
        throw new Error(error);
      }
    }
  }

  async createMany<T>(model: string, data: any): Promise<T> {
    const result = await this[model].createMany({ data });
    console.log(result);

    return result;
  }
}
