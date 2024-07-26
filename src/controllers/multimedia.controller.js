import { uploadFiles } from "../services/fileStorage.js";
export const postUploadFiles = async (req, res) => {
  try {
    const links = await uploadFiles(req.files);
    res.status(200).json({ urls: links });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
