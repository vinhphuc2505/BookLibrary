import express from "express";
import ImageController from "../../controller/ImageController.js";
import upload from "../../config/multer.js";

const router = express.Router();

router.post('/upload-url', ImageController.uploadImageUrl);
router.post('/upload-file', upload.single("image"), ImageController.uploadImageFile);

export default router;