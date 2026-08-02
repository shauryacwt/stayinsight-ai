const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  await prisma.review.createMany({
    data: [
      {
        guestName: "John Smith",
        rating: 5,
        sentiment: "Positive",
        review: "Amazing stay! The rooms were clean and the staff was very friendly."
      },
      {
        guestName: "Emily Johnson",
        rating: 4,
        sentiment: "Positive",
        review: "Beautiful location with excellent service."
      },
      {
        guestName: "Michael Brown",
        rating: 2,
        sentiment: "Negative",
        review: "Room was not clean and check-in took too long."
      },
      {
        guestName: "Sophia Davis",
        rating: 3,
        sentiment: "Neutral",
        review: "Average experience. Food was good but Wi-Fi was slow."
      }
    ]
  });

  console.log("Database Seeded Successfully!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });