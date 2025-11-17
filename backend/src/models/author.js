import mongoose from "mongoose";

const authorSchema = new mongoose.Schema(
    {
        authorName:{
            type: String,
            require: true
        },
        dob: {
            type: Date
        },
    },
    {
        timestamps: true
    }
)

const Author = mongoose.model("Author", authorSchema);
export default Author;