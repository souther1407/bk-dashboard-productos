import { Router } from "express";
import CategoriasController from "../controllers/categorias.controller.js";
const router = Router();
const instance = new CategoriasController();

router.get("/", instance.getCategorias);
router.post("/", instance.postCategorias);
router.put("/", instance.putCategorias);
router.delete("/", instance.deleteCategorias);

export default router;
