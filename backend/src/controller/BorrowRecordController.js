import BorrowRecordService from "../service/BorrowRecordService.js";
import ApiResponse from "../util/ApiResponse.js";


class BorrowRecordController {

    async createBorrowRecord(req, res) {
        try {
            const borrowRecord = await BorrowRecordService.createBorrowRecord(req.body);

            return ApiResponse.success(
                res,
                201,
                "Success",
                borrowRecord
            );
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

}

export default new BorrowRecordController();

