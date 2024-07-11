import express from "express";
import morgan from "morgan";
import cors from "cors";

import loadRoutes from "../routes/index.js";
const api = express();
api.use(express.json());
api.use(cors());
api.use(morgan("dev"));
loadRoutes(api);

export default api;
