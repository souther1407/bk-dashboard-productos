-- CreateTable
CREATE TABLE "Productos" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "titulo" VARCHAR(50) NOT NULL,
    "descripcion" TEXT,
    "cantidad" INTEGER NOT NULL DEFAULT 0,
    "precioUnitario" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Productos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categorias" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "nombre" VARCHAR(50) NOT NULL,

    CONSTRAINT "Categorias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Multimedia" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "url" VARCHAR(250) NOT NULL,
    "tipo" VARCHAR(50) NOT NULL,
    "esPrincipal" BOOLEAN NOT NULL DEFAULT false,
    "productoId" INTEGER NOT NULL,

    CONSTRAINT "Multimedia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CategoriasToProductos" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CategoriasToProductos_AB_unique" ON "_CategoriasToProductos"("A", "B");

-- CreateIndex
CREATE INDEX "_CategoriasToProductos_B_index" ON "_CategoriasToProductos"("B");

-- AddForeignKey
ALTER TABLE "Multimedia" ADD CONSTRAINT "Multimedia_productoId_fkey" FOREIGN KEY ("productoId") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriasToProductos" ADD CONSTRAINT "_CategoriasToProductos_A_fkey" FOREIGN KEY ("A") REFERENCES "Categorias"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CategoriasToProductos" ADD CONSTRAINT "_CategoriasToProductos_B_fkey" FOREIGN KEY ("B") REFERENCES "Productos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
