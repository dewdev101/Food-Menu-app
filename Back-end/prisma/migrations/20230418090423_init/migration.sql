-- CreateTable
CREATE TABLE "DewKitchenCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DewKitchenCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DewKitchenMenu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryName" TEXT,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DewKitchenMenu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DewKitchenOrder" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "tableId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DewKitchenOrder_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DewOrderItem" (
    "id" SERIAL NOT NULL,
    "menuId" INTEGER NOT NULL,
    "orderId" INTEGER,
    "quantity" INTEGER NOT NULL,
    "totalPrice" DOUBLE PRECISION NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updateAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DewOrderItem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DewKitchenCategory_name_key" ON "DewKitchenCategory"("name");

-- AddForeignKey
ALTER TABLE "DewKitchenMenu" ADD CONSTRAINT "DewKitchenMenu_categoryName_fkey" FOREIGN KEY ("categoryName") REFERENCES "DewKitchenCategory"("name") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "DewKitchenMenu"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DewOrderItem" ADD CONSTRAINT "DewOrderItem_orderId_fkey" FOREIGN KEY ("orderId") REFERENCES "DewKitchenOrder"("id") ON DELETE SET NULL ON UPDATE CASCADE;
