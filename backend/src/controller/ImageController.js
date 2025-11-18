import ApiResponse from "../util/ApiResponse.js";
import ImageService from "../service/ImageService.js";


class ImageController {

    async uploadImageUrl(req, res) {
        try {
            const image = await ImageService.uploadImage(req.body);

            return ApiResponse.success(
                res,
                201,
                "Success",
                image
            );

        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

    async uploadImageFile(req, res) {
        try {
            if (!req.file) {
                return ApiResponse.error(res, 400, "File is required");
            }

            const { altText, bookId, isPrimary } = req.body;

            const data = {
                url: `/uploads/${req.file.filename}`,
                altText,
                bookId,
                isPrimary
            };

            const image = await ImageService.uploadImage(data);

            return ApiResponse.success(res, 201, "Success", image);

        } catch (error) {
            return ApiResponse.error(res, 400, error.message);
        }
    }

}

export default new ImageController();

