import { prisma } from "../dependencies/prismaClient.js";
let contador = 1;
const productos = [
  {
    id: contador++,
    nombre: "Bicicleta de montaña",
    cant: 10,
    precioUnitario: 50000,
    imgPrincipal: "https://imagenes.com/bicicleta",
    imgs: ["https://imagenes.com/bicicleta"],
  },
  {
    id: contador++,
    nombre: "Play Station 5",
    cant: 10,
    precioUnitario: 500000,
    imgPrincipal: "https://imagenes.com/ps5",
    imgs: ["https://imagenes.com/ps5", "https://imagenes.com/ps5"],
  },
  {
    id: contador++,
    nombre: "Perfume mágico",
    cant: 10,
    precioUnitario: 2500,
    imgPrincipal: "https://imagenes.com/perfume",
    imgs: ["https://imagenes.com/perfume"],
  },
];

export default class ManagerProductos {
  static instance = null;

  static getInstance() {
    if (!ManagerProductos.instance) {
      ManagerProductos.instance = new ManagerProductos();
    }
    return ManagerProductos.instance;
  }

  async getProductos(num = 5, page = 1) {
    const count = await prisma.productos.count();
    const elements = await prisma.productos.findMany({
      include: {
        imgs: true,
        categorias: {
          select: { id: true, nombre: true },
        },
      },
      skip: (page - 1) * num,
      take: num,
    });
    return {
      total: count,
      totalPages: Math.ceil(count / num),
      elements,
    };
  }
  async createProducto(newProducto) {
    const categoriasExistentes = await prisma.categorias.findMany({
      where: {
        nombre: { in: newProducto.categorias },
      },
    });
    const producto = await prisma.productos.create({
      data: {
        ...newProducto,
        imgs: { create: [...newProducto.imgs] },
        categorias: {
          connect: categoriasExistentes.map((categoria) => ({
            id: categoria.id,
          })),
        },
      },
      include: {
        imgs: true,
      },
    });
    return producto;
  }

  async updateProducto(id, valores) {
    const actualizado = await prisma.productos.update({
      where: { id },
      data: { ...valores },
    });
    return actualizado;
  }
  async deleteProducto(id) {
    const borrado = await prisma.productos.delete({
      where: { id },
    });
    return borrado;
  }
}
