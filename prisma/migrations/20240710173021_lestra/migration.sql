/*
  Warnings:

  - You are about to drop the column `imagenPrincipal` on the `Productos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Multimedia" ADD COLUMN     "esPrincipal" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "Productos" DROP COLUMN "imagenPrincipal";
