/*
  Warnings:

  - The `imagenPrincipal` column on the `Productos` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "imagenPrincipal",
ADD COLUMN     "imagenPrincipal" INTEGER;

-- CreateTable
CREATE TABLE "Multimedia" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" VARCHAR(50) NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "productoId" INTEGER NOT NULL,

    CONSTRAINT "Multimedia_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Multimedia" ADD CONSTRAINT "Multimedia_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Productos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
