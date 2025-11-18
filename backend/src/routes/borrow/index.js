import express from "express";
import borrowRecordRouter from "./borrowRecord.js";

const router = express.Router();

router.use('/borrow', borrowRecordRouter);

export default router;
