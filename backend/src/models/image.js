import mongoose from "mongoose";

const imageSchema = new mongoose.Schema(
    {
        // Đường dẫn hoặc URL đến hình ảnh
        url: {
            type: String,
            required: true
        },
        // Mô tả ngắn về hình ảnh (tùy chọn)
        altText: {
            type: String
        },
        // Trường tham chiếu đến model Book
        bookId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book", // Tên của model Book
            required: true
        },
        // Đánh dấu xem đây có phải là hình ảnh chính/thumbnail không (tùy chọn)
        isPrimary: {
            type: Boolean,
            default: false
        }
    },
    {
        timestamps: true // Thêm createdAt và updatedAt
    }
);

// Tạo model từ schema
const Image = mongoose.model("Image", imageSchema);

export default Image;