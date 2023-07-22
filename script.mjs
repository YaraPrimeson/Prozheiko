import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  try {
    // const tag = await prisma.tag.create({
    //   data: {
    //     tag: "Diagnostic",
    //   },
    // });
const tags = await prisma.tag.findMany();
    console.log(tags);
  } catch (e) {
    console.log(e);
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
