import { Router } from "express";
import CategoriasController from "../controllers/categorias.controller.js";
const router = Router();
const instance = new CategoriasController();

export default router;
