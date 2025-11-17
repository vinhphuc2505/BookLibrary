class ApiResponse {
    /**
     * Gửi phản hồi thành công (Success Response).
     * @param {object} res - Đối tượng response của Express.
     * @param {number} statusCode - Mã trạng thái HTTP (ví dụ: 200, 201).
     * @param {string} message - Thông báo mô tả kết quả.
     * @param {any} data - Dữ liệu được trả về.
     */

    static success(res, statusCode, message, data) {
        res.status(statusCode).json({
            success: true,
            message: message,
            data: data
        });
    }

    /**
     * Gửi phản hồi lỗi (Error Response).
     * @param {object} res - Đối tượng response của Express.
     * @param {number} statusCode - Mã trạng thái HTTP (ví dụ: 400, 404, 500).
     * @param {string} errorMessage - Thông báo lỗi.
     */
    static error(res, statusCode, errorMessage) {
        res.status(statusCode).json({
            success: false,
            message: errorMessage
        });
    }

}

export default ApiResponse;