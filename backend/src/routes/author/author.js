import express from "express"
import AuthorController from "../../controller/AuthorController.js";

const router = express.Router();

router.post('/create', AuthorController.create);
router.get('/find-all', AuthorController.getAllAuthors);
router.get('/:id', AuthorController.findAuthorById);
router.put('/:id', AuthorController.updateAuthor);
router.delete('/:id', AuthorController.deleteAuthor);

export default router;
