import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            require: true
        },
        quantity: {
            type: Number,
            default: 0
        },
        publishedDate: {
            type: Date
        },
        isAvailable: {
            type: Boolean,
            default: true
        },
        authorId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Author",
            required: true
        },
        categoryIds: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Category"
            }
        ]
    },
    {
        timestamps: true
    }
)


const Book = mongoose.model("Book", bookSchema);
export default Book;


