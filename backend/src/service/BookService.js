import Book from "../models/book.js";
import mongoose from "mongoose";

class BookService {
    async createBook(data) {
        const { title, quantity, publishedDate, isAvailable, authorId, categoryIds } = data;

        if (!title) {
            throw new Error("Title is required");
        }

        if (!authorId) {
            throw new Error("Author ID is required");
        }

        if (!mongoose.Types.ObjectId.isValid(authorId)) {
            throw new Error("Invalid Author ID format");
        }

        if (categoryIds && categoryIds.length > 0) {
            const allCategoriesValid = categoryIds.every(id =>
                mongoose.Types.ObjectId.isValid(id)
            );

            if (!allCategoriesValid) {
                throw new Error("One or more Category IDs are in an invalid format.");
            }
        }

        const book = await Book.create({
            title, quantity, publishedDate, isAvailable, authorId, categoryIds
        })

        return book;
    }

    async getAllBook() {
        const books = await Book.find({});

        return books;
    }

    async findBookById(id) {
        const book = await Book.findById(id);

        if (!book) {
            throw new Error("Book not found");
        }

        return book;
    }

    async updateBook(id, data) {

        const { authorId, categoryIds } = data;

        if (!authorId) {
            throw new Error("Author ID is required");
        }

        if (!mongoose.Types.ObjectId.isValid(authorId)) {
            throw new Error("Invalid Author ID format");
        }

        if (categoryIds && categoryIds.length > 0) {
            const allCategoriesValid = categoryIds.every(id =>
                mongoose.Types.ObjectId.isValid(id)
            );

            if (!allCategoriesValid) {
                throw new Error("One or more Category IDs are in an invalid format.");
            }
        }

        const book = await Book.findByIdAndUpdate(id, data, { new: true, runValidators: true });

        if (!book) {
            throw new Error("Book not found");
        }

        return book;

    }

    async deleteBook(id) {
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            throw new Error("Book not found");
        }

        return book;
    }
}


export default new BookService();
