import ProductManager from "../managers/productos.manager.js";

export default class ProductosController {
  static instance = null;

  static getInstance() {
    if (!ProductosController.instance) {
      ProductosController.instance = new ProductosController();
    }
    return ProductosController.instance;
  }

  async getProductos(req, res) {
    try {
      const products = await ProductManager.getInstance().getProductos();
      res.status(200).json(products);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async postProducto(req, res) {
    try {
      const body = req.body;
      const nuevoProducto = await ProductManager.getInstance().createProducto(
        body
      );
      res.status(200).json(nuevoProducto);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async putProducto(req, res) {
    try {
      const body = req.body;
      const { id } = req.params;
      const actualizado = await ProductManager.getInstance().updateProducto(
        id,
        body
      );
      res.status(200).json({});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async deleteProducto(req, res) {
    try {
      const { id } = req.params;

      const borrado = await ProductManager.getInstance().deleteProducto(id);
      res.status(200).json(borrado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
