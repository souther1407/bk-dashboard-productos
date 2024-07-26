import ProductosRouter from "./productos.routes.js";
import MultimediaRouter from "./multimedia.routes.js";
export default function loadRoutes(api) {
  api.use("/productos/", ProductosRouter);
  api.use("/uploads/", MultimediaRouter);
}
