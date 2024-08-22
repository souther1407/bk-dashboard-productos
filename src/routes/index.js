import ProductosRouter from "./productos.routes.js";
import MultimediaRouter from "./multimedia.routes.js";
import CategoriasRouter from "./categorias.routes.js";

export default function loadRoutes(api) {
  api.use("/productos/", ProductosRouter);
  api.use("/uploads/", MultimediaRouter);
  api.use("/categorias/", CategoriasRouter);
}
