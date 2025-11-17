import express from "express"
import authorRouter from './author.js' // Import router đã định nghĩa

const router = express.Router();

// Gắn router con vào router hiện tại (không cần tiền tố)
router.use('/author', authorRouter); 

export default router;