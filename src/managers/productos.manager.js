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

  async getProductos() {
    return await prisma.productos.findMany();
  }
  async createProducto(newProducto) {
    const producto = await prisma.productos.create({
      data: { ...newProducto, imgs: { create: [...newProducto.imgs] } },
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
