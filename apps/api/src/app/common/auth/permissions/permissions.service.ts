import { Injectable } from "@nestjs/common";
import { Permission } from "@prisma/client";
import { glob } from "glob";
import { readFileSync } from "node:fs";
import { PrismaService } from "../../prisma/prisma.service";

@Injectable()
export class PermissionsService {
  constructor(private prisma: PrismaService) {}

  async updatePermissionNodes(): Promise<{
    nodes: string[];
    meta: {
      total: number;
      new: number;
    };
  }> {
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

  //  Compare the users permission nodes to those of an acceptable permission node array
  hasPermission(
    userPermissionNodes: string[],
    nodesToCheck: string[],
  ): boolean {
    if (userPermissionNodes.some((node) => nodesToCheck.includes(node))) {
      return true;
    }
    return false;
  }
}
