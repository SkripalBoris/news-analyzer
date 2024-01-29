-- CreateTable
CREATE TABLE "Subscription" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Subscription_title_key" ON "Subscription"("title");
