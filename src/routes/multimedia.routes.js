import { Router } from "express";
import multer from "multer";
const router = Router();
const uploads = multer({ dest: "./tempFiles/" });
import { postUploadFiles } from "../controllers/multimedia.controller.js";

router.post("/", uploads.array("imgs"), postUploadFiles);

export default router;
