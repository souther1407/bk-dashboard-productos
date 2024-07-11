-- DropForeignKey
ALTER TABLE "Multimedia" DROP CONSTRAINT "Multimedia_productoId_fkey";

-- AddForeignKey
ALTER TABLE "Multimedia" ADD CONSTRAINT "Multimedia_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
