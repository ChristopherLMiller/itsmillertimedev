import { Injectable } from "@nestjs/common";
import { Permission } from "@prisma/client";
import { glob } from "glob";
import { readFileSync } from "node:fs";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async updatePermissionNodes(): Promise<any> {
    const files = await glob("**/*.permissions.{ts,js}");
    const regex = /(?<=")(.*?)(?=")/g;

    // Variable to hold all the permission Nodes
    const nodes = [];

    // Iterate through the files
    files.forEach(async (file) => {
      const fileContents = readFileSync(file).toString();
      const matches = fileContents.match(regex);

      // Iterate through the nodes we retrieved and append to the nodes array
      matches.forEach((match) => {
        nodes.push(match);
      });
    });

    // lets map that now, to feed it into the createMany for prisma
    const mapped = nodes.map((node) => ({
      node,
    }));

    const newItems = await this.prisma.permission.createMany({
      data: mapped,
      skipDuplicates: true,
    });

    return { nodes, meta: { total: nodes.length, new: newItems.count } };
  }

  async getPermissionsNodes(): Promise<Permission[]> {
    return this.prisma.permission.findMany();
  }
}
