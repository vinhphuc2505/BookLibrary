import User from "../models/user.js";
import UserService from "../service/UserService.js";
import ApiResponse from "../util/ApiResponse.js"

class UserController {

    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body);

            return ApiResponse.success(
                res,
                200,
                "User has been created",
                user
            );

        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async getAllUSers(req, res) {
        try {
            const users = await UserService.getAllUser({});

            return ApiResponse.success(
                res,
                200,
                "User of list load successfully",
                users
            );
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async findUser(req, res) {
        try {
            const id = req.params.id;

            const user = await UserService.findUserById(id);

            return ApiResponse.success(
                res,
                200,
                "Successfully, User has been found",
                user
            );
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async updateUser(req, res) {
        try {
            const id = req.params.id;

            const user = await UserService.updateUser(id, req.body);

            return ApiResponse.success(
                res,
                200,
                "Successfully, User has been updated",
                user
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async deleteUser(req, res) {
        try {
            const id = req.params.id;

            await UserService.deleteUser(id);

            return ApiResponse.success(
                res,
                204,
            )
        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

}

export default new UserController();
