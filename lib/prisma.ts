// import { PrismaClient } from "@prisma/client";
//
// const client = globalThis.prisma || new PrismaClient();
// if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
//
// export default prisma;
// import { PrismaClient } from "@prisma/client";
//
// const prisma = new PrismaClient();
//
// export default prisma;

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const prisma = global.prisma || new PrismaClient({ log: ["info"] });
if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;
