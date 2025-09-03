import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //   await prisma.todo.createMany({
  //     data: Array.from({ length: 100 }).map((_, i) => ({})),
  //   });
};

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    console.log("error.");
    process.exit(1);
  })
  .finally(async () => {
    console.log("finish.");
    await prisma.$disconnect();
  });
