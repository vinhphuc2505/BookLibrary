import express from "express";
import BorrowRecordController from "../../controller/BorrowRecordController.js";

const router = express.Router();

router.post('/create', BorrowRecordController.createBorrowRecord);


export default router;

