import { prisma } from "../dependencies/prismaClient.js";

export default class ManagerCategorias {
  static instance = null;

  static getInstance() {
    if (!ManagerCategorias.instance) {
      ManagerCategorias.instance = new ManagerCategorias();
    }
    return ManagerCategorias.instance;
  }

  async getCategorias() {
    return await prisma.categorias.findMany();
  }
  async createCategorias(newProducto) {
    const producto = await prisma.categorias.create({
      data: { ...newProducto },
    });
    return producto;
  }

  async updateCategorias(id, valores) {
    const actualizado = await prisma.categorias.update({
      where: { id },
      data: { ...valores },
    });
    return actualizado;
  }
  async deletCategorias(id) {
    const borrado = await prisma.categorias.delete({
      where: { id },
    });
    return borrado;
  }
}
