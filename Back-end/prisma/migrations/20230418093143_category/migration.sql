/*
  Warnings:

  - You are about to drop the column `name` on the `DewKitchenCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[category]` on the table `DewKitchenCategory` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `category` to the `DewKitchenCategory` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DewKitchenMenu" DROP CONSTRAINT "DewKitchenMenu_categoryName_fkey";

-- DropIndex
DROP INDEX "DewKitchenCategory_name_key";

-- AlterTable
ALTER TABLE "DewKitchenCategory" DROP COLUMN "name",
ADD COLUMN     "category" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "DewKitchenCategory_category_key" ON "DewKitchenCategory"("category");

-- AddForeignKey
ALTER TABLE "DewKitchenMenu" ADD CONSTRAINT "DewKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "DewKitchenCategory"("category") ON DELETE SET NULL ON UPDATE CASCADE;
