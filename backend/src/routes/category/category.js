import express from "express"
import CategoryController from "../../controller/CategoryController.js"

const router = express.Router();

router.post('/create', CategoryController.createCategory);
router.get('/find-all', CategoryController.getAllCategory);
router.get('/find/:id', CategoryController.findCategoryById);
router.put('/update/:id', CategoryController.updateCategory);
router.delete('/delete/:id', CategoryController.deleteCategory);

export default router;

