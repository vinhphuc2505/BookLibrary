import Image from "../models/image.js";


class ImageService {

    async uploadImage(data) {
        const { url, altText, bookId } = data;

        if (!altText) {
            throw new Error("Please fill the altText");
        }

        if (!bookId) {
            throw new Error("Please fill the bookId");
        }

        const image = await Image.create({
            url, altText, bookId
        });

        return image;
    }


}

export default new ImageService();