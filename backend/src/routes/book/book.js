import express from "express";
import BookController from "../../controller/BookController.js";

const router = express.Router();

router.post('/create', BookController.createBook);
router.get('/find-all', BookController.getAllBook);
router.get('/find/:id', BookController.findBookById);
router.put('/update/:id', BookController.updateBook);
router.delete('/delete/:id', BookController.deleteBook);


export default router;