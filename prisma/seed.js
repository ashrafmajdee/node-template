const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const admin = await prisma.user.upsert({
    where: { email: "user@mail.com" },
    update: {},
    create: {
      email: "user@mail.com",
      name: "User",
      password: "$2b$10$zctxUVDyy3jzvSp68oKpMOnkyra4R.NzOFVh9aii3Y43X7XtetoyK",
      posts: {
        create: {
          content: "hello world",
        },
      },
    },
  });
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
