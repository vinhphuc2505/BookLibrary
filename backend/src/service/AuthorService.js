import Author from "../models/author.js";
import Book from "../models/book.js";

class AuthorService {
    async createAuthor(data) {
        const { authorName, dob } = data;

        if (!authorName) {
            throw new Error("AuthorName is required");
        }

        const author = await Author.create({
            authorName,
            dob
        });

        return author;
    }

    /**
     * Lấy danh sách tất cả tác giả
     * @returns {Promise<Array<Object>>} Danh sách các đối tượng tác giả
     */
    async getAllAuthors() {
        const authors = await Author.find({});
        return authors;
    }

    /**
     * Tìm tác giả theo ID
     * @param {string} id - ID của tác giả
     * @returns {Promise<Object>} Đối tượng tác giả hoặc null nếu không tìm thấy
     */
    async getAuthorById(id) {
        const author = await Author.findById(id);
        if (!author) {
            throw new Error("Author not existed");
        }
        return author;
    }

    /* Tìm kiếm tác giả theo tên (hỗ trợ tìm kiếm theo chuỗi con)
     * @param {string} name - Tên tác giả cần tìm
     * @returns {Promise<Array<Object>>} Danh sách các tác giả trùng tên hoặc chứa tên
     */
    async findAuthorsByName(name) {
        // Sử dụng $regex và 'i' (case-insensitive) để tìm kiếm linh hoạt, không phân biệt hoa thường
        // và lấy tất cả các tác giả trùng hoặc chứa chuỗi tên.
        const authors = await Author.find({
            authorName: { $regex: name, $options: 'i' }
        });

        if (authors.length === 0) {
            throw new Error(`Không tìm thấy tác giả nào có tên chứa: "${name}"`);
        }

        return authors;

    }

    /**
     * Cập nhật thông tin tác giả theo ID
     * @param {string} id - ID của tác giả cần cập nhật
     * @param {Object} data - Dữ liệu cần cập nhật (authorName, dob,...)
     * @returns {Promise<Object>} Đối tượng tác giả sau khi cập nhật
     */
    async updateAuthor(id, data) {
        // new: true trả dữ liệu mới được update về cho người dùng, runValidators: true kiểm tra ràng buộc schema
        const author = await Author.findByIdAndUpdate(id, data, { new: true, runValidators: true });
        if (!author) {
            throw new Error("Author not found for update");
        }
        return author;
    }

    /**
     * Xóa tác giả theo ID
     * @param {string} id - ID của tác giả cần xóa
     * @returns {Promise<Object>} Đối tượng tác giả đã bị xóa
     */

    async deleteAuthor(id) {
        const booksCount = await Book.countDocuments({ authorId: id });

        if(booksCount > 0){
            throw new Error(`Cannot delete Author. ${booksCount} book(s) are still linked to this author.`);
        }

        const author = await Author.findByIdAndDelete(id);
        if (!author) {
            throw new Error("Author not found for delete");
        }

        return author;
    }
}

export default new AuthorService();