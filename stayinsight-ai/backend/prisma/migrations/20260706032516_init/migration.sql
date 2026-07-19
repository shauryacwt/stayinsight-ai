-- CreateTable
CREATE TABLE "Review" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "guestName" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "sentiment" TEXT NOT NULL,
    "review" TEXT NOT NULL
);
