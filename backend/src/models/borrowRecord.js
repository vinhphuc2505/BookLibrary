import mongoose from "mongoose";


const borrowRecordSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book",
            required: true
        },
        borrowDate: {
            type: Date,
            required: true,
            default: Date.now // Mặc định là ngày tạo record
        },
        dueDate: {
            type: Date, // Ngày dự kiến trả, có thể tính toán khi record được tạo (ví dụ: borrowDate + 7 ngày)
        },
        returnDate: {
            type: Date,
            default: null // Ban đầu là null, sẽ được cập nhật khi sách được trả
        },
        status: {
            type: String,
            enum: ['borrowed', 'returned', 'overdue'], // Trạng thái của lần mượn
            default: 'borrowed'
        },
        fine: {
            type: Number,
            default: 0 // Tiền phạt nếu có (ví dụ: trả trễ)
        }
    },
    {
        timestamps: true
    }
)

const BorrowRecord = mongoose.model("BorrowRecord", borrowRecordSchema);
export default BorrowRecord;