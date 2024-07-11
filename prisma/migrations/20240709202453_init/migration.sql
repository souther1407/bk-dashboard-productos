-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "descripcion" TEXT,
    "cantidad" INTEGER NOT NULL DEFAULT 0,
    "precioUnitario" DOUBLE PRECISION NOT NULL,
    "imagenPrincipal" TEXT,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);
