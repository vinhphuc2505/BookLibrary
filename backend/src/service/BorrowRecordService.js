import BorrowRecord from "../models/borrowRecord.js";
import Book from "../models/book.js";
import mongoose from "mongoose";

class BorrowRecordService {

    // async createBorrowRecord(data) {
    //     const session = await mongoose.startSession();
    //     session.startTransaction();
    //     try {
    //         const { userId, bookId, dueDate } = data;

    //         const book = await Book.findById(bookId).session(session);

    //         if (!book) {
    //             throw new Error("Book not exsited");
    //         }

    //         if (book.isAvailable === false) {
    //             throw new Error("Book out of stock")
    //         }

    //         book.quantity -= 1;

    //         if (book.quantity === 0) {
    //             book.isAvailable = false;
    //         }

    //         await book.save({ session });

    //         const borrowRecord = await BorrowRecord.create([{
    //             userId,
    //             bookId,
    //             dueDate
    //         }], { session });

    //         await session.commitTransaction();
    //         session.endSession();

    //         return borrowRecord[0];

    //     } catch (error) {
    //         // Nếu có lỗi, hủy bỏ tất cả thay đổi trong transaction
    //         await session.abortTransaction();
    //         session.endSession();
    //         // Ném lỗi để xử lý ở tầng trên (ví dụ: controller)
    //         throw error;
    //     }

    // }

    async createBorrowRecord(data) {
        // LOẠI BỎ session và transaction

        try {
            const { userId, bookId, dueDate } = data;

            const book = await Book.findById(bookId); // Bỏ .session(session)

            if (!book) {
                throw new Error("Book not exsited");
            }

            if (book.isAvailable === false || book.quantity <= 0) { // Thêm kiểm tra quantity
                throw new Error("Book out of stock");
            }

            book.quantity -= 1;

            if (book.quantity === 0) {
                book.isAvailable = false;
            }

            await book.save(); // Bỏ { session }

            const borrowRecord = await BorrowRecord.create({
                userId,
                bookId,
                dueDate
            });

            // Bỏ commit và endSession

            return borrowRecord;

        } catch (error) {
            // Không cần abort transaction nữa
            throw error;
        }
    }

    

}


export default new BorrowRecordService();
