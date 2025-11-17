import AuthorService from "../service/AuthorService.js";
import ApiResponse from "../util/ApiResponse.js";

class AuthorController {
    async create(req, res) {
        try {
            const author = await AuthorService.createAuthor(req.body);

            return ApiResponse.success(
                res,
                201,
                "Author created successfully",
                author
            );

        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async getAllAuthors(req, res) {
        try {
            const authors = await AuthorService.getAllAuthors({});

            return ApiResponse.success(
                res,
                200,
                "Author list loaded successfully",
                authors
            );

        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async findAuthorById(req, res) {
        try {
            const id = req.params.id;

            const author = await AuthorService.getAuthorById(id);

            return ApiResponse.success(
                res,
                200,
                "Find author successfully",
                author
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async updateAuthor(req, res) {
        try {
            const id = req.params.id;

            const author = await AuthorService.updateAuthor(id, req.body);

            return ApiResponse.success(
                res,
                200,
                "Author has been updated",
                author
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async deleteAuthor(req, res) {
        try {
            const id = req.params.id;

            await AuthorService.deleteAuthor(id);

            return ApiResponse.success(
                res,
                204,
                "Author has been deleted"
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }
}

export default new AuthorController();