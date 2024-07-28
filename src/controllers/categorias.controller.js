import CategoriasManager from "../managers/categorias.manager";

export default class CategoriasController {
  static instance = null;

  static getInstance() {
    if (!CategoriasController.instance) {
      CategoriasController.instance = new CategoriasController();
    }
    return CategoriasController.instance;
  }

  async getCategorias(req, res) {
    try {
      const categorias = await CategoriasManager.getInstance().getCategorias();
      res.status(200).json(categorias);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async postCategorias(req, res) {
    try {
      const body = req.body;
      const nuevaCategoria =
        await CategoriasManager.getInstance().createCategorias(body);
      res.status(200).json(nuevaCategoria);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async putCategorias(req, res) {
    try {
      const body = req.body;
      const { id } = req.params;
      const actualizado =
        await CategoriasController.getInstance().updateCategorias(id, body);
      res.status(200).json(actualizado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async deleteCategorias(req, res) {
    try {
      const { id } = req.params;
      const borrado = await CategoriasController.getInstance().deletCategorias(
        id
      );
      res.status(200).json(borrado);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
