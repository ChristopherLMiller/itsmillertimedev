import { Record } from "@itsmillertimedev/data";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class SupabaseService {
  constructor(private prisma: PrismaService) {}

  async createUser(record: Record): Promise<User> {
    const { id, email } = record;
    const meta = record.email;

    const result = await this.prisma.user.create({
      data: {
        supabaseId: id,
        email,
        roleId: 2,
        meta,
      },
    });
    return result;
  }

  async deleteUser(id: string): Promise<User> {
    return await this.prisma.user.delete({ where: { supabaseId: id } });
  }
}
