import BookService from "../service/BookService.js"
import ApiResponse from "../util/ApiResponse.js"

class BookController {

    async createBook(req, res) {
        try {
            const book = await BookService.createBook(req.body);

            return ApiResponse.success(
                res,
                201,
                "Book has been created",
                book
            );
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async getAllBook(req, res) {
        try {
            const books = await BookService.getAllBook({});

            return ApiResponse.success(
                res,
                200,
                "Book of list loaded successfully",
                books
            )
        } catch {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async findBookById(req, res) {
        try {
            const id = req.params.id;

            const book = await BookService.findBookById(id);

            return ApiResponse.success(
                res,
                200,
                "Successfully, Book has been found",
                book
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async updateBook(req, res) {
        try {
            const id = req.params.id;

            const book = await BookService.updateBook(id, req.body);

            return ApiResponse.success(
                res,
                200,
                "Successfully, Book has been updated",
                book
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async deleteBook(req, res) {
        try {
            const id = req.params.id;

            await BookService.deleteBook(id);

            return ApiResponse.success(
                res,
                204,
                "Successfully, Book has been deleted",
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }


}

export default new BookController();

