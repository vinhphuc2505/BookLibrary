import express from "express";
import UserController from "../../controller/UserController.js";

const router = express.Router();

router.post('/register', UserController.createUser);
router.get('/find-all', UserController.getAllUSers);
router.get('/find/:id', UserController.findUser);
router.put('/update/:id', UserController.updateUser);
router.delete('/delete/:id', UserController.deleteUser);

export default router;
