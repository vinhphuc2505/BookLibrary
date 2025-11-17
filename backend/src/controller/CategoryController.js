import ApiResponse from "../util/ApiResponse.js";
import CategoryService from "../service/CategoryService.js";

class CategoryController {

    async createCategory(req, res) {
        try {
            const category = await CategoryService.createCategory(req.body);

            return ApiResponse.success(
                res,
                201,
                'Category has been created',
                category
            );
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async getAllCategory(req, res) {
        try {
            const categories = await CategoryService.getAllCategory({});

            return ApiResponse.success(
                res,
                200,
                'List of categories has been loaded',
                categories
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async findCategoryById(req, res) {
        try {
            const id = req.params.id;
            const category = await CategoryService.findCategoryById(id);

            return ApiResponse.success(
                res,
                200,
                "Successfully, Category has been found",
                category
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async updateCategory(req, res) {
        try {
            const id = req.params.id;
            const category = await CategoryService.updateCategory(id, req.body);

            return ApiResponse.success(
                res,
                200,
                "Successfully, Category has been updated",
                category
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async deleteCategory(req, res) {
        try {
            const id = req.params.id;

            await CategoryService.deleteCategory(id);

            return ApiResponse.success(
                res,
                204,
                "Successfully, Category has been deleted"
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

}

export default new CategoryController();