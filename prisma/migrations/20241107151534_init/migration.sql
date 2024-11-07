-- CreateTable
CREATE TABLE "Coffee" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "purchasePrice" DOUBLE PRECISION NOT NULL,
    "salePrice" DOUBLE PRECISION NOT NULL,
    "quantity" INTEGER NOT NULL,
    "netWeight" DOUBLE PRECISION NOT NULL,
    "imageUrl" TEXT NOT NULL,
    "typeId" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    "compositionId" TEXT NOT NULL,

    CONSTRAINT "Coffee_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "CoffeeType" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CoffeeType_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "CoffeeComposition" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "CoffeeComposition_pkey" PRIMARY KEY ("_id")
);

-- CreateTable
CREATE TABLE "Country" (
    "_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeType_name_key" ON "CoffeeType"("name");

-- CreateIndex
CREATE UNIQUE INDEX "CoffeeComposition_name_key" ON "CoffeeComposition"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Country_name_key" ON "Country"("name");

-- AddForeignKey
ALTER TABLE "Coffee" ADD CONSTRAINT "Coffee_typeId_fkey" FOREIGN KEY ("typeId") REFERENCES "CoffeeType"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coffee" ADD CONSTRAINT "Coffee_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Coffee" ADD CONSTRAINT "Coffee_compositionId_fkey" FOREIGN KEY ("compositionId") REFERENCES "CoffeeComposition"("_id") ON DELETE RESTRICT ON UPDATE CASCADE;
