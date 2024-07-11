import { Router } from "express";
import ProductosController from "../controllers/productos.controller.js";
import {
  validateCreateProductos,
  validateUpdateProductos,
  validateDeleteProductos,
} from "../middlewares/validators/productos.validator.js";
const router = Router();
const instance = ProductosController.getInstance();

router.get("/", instance.getProductos);
router.post("/", validateCreateProductos, instance.postProducto);
router.put("/:id", validateUpdateProductos, instance.putProducto);
router.delete("/:id", validateDeleteProductos, instance.deleteProducto);

export default router;
