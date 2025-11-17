import Category from '../models/category.js'
import Book from '../models/book.js';

class CategoryService {

    async createCategory(data) {
        const { name, description } = data;

        if (!name) {
            throw new Error("Type is require");
        }

        const category = await Category.create({
            name,
            description
        });

        return category;

    }

    async getAllCategory() {
        const categories = await Category.find({});

        return categories;
    }

    async findCategoryById(id) {
        const category = await Category.findById(id);

        if (!category) {
            throw new Error('Category not found');
        }

        return category;
    }

    async updateCategory(id, data) {
        const category = await Category.findByIdAndUpdate(id, data, { new: true, runValidators: true });

        if (!category) {
            throw new Error('Category not found for update');
        }

        return category;
    }

    async deleteCategory(id) {
        const booksCount = await Book.countDocuments({ categoryIds: id });

        if (booksCount > 0) {
            throw new Error(`Cannot delete Category. ${booksCount} book(s) are still linked to this category.`);
        }

        const category = await Category.findByIdAndDelete(id);

        if (!category) {
            throw new Error('Category not found for delete');
        }

        return category;
    }
}

export default new CategoryService();

