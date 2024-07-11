import ProductosRouter from "./productos.routes.js";

export default function loadRoutes(api) {
  api.use("/productos/", ProductosRouter);
}
