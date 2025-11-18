import User from "../models/user.js";
import bcrypt from "bcryptjs";

class UserService {


    /**
     * @desc Đăng ký người dùng mới
     * @route POST /api/auth/register
     * @access Public
     */
    async createUser(data) {
        const { username, email, password, passwordAgain, firstname, lastname, dob } = data;

        if (!username || !email || !password || !passwordAgain || !firstname || !lastname || !dob) {
            throw new Error("Please fill all the field");
        }

        const userExists = await User.findOne({ username });
        if (userExists) {
            throw new Error("Username existed");
        }

        const emailExists = await User.findOne({ email })
        if (emailExists) {
            throw new Error("Email existed");
        }


        if (password !== passwordAgain) {
            throw new Error("Password do not match");
        }

        // Tạo salt (chuỗi ngẫu nhiên)
        const salt = await bcrypt.genSalt(10);
        // Hash mật khẩu với salt vừa tạo
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await User.create({
            username,
            email,
            password: hashedPassword,
            firstname,
            lastname,
            dob
        })

        return user;

    }

    async getAllUser() {
        const users = await User.find({});

        return users;
    }

    async findUserById(id) {
        const user = await User.findById(id);

        if (!user) {
            throw new Error("User not found");
        }

        return user;
    }

    
    async updateUser(id, data) {
        const { password, passwordAgain, firstname, lastname, dob } = data;

        if (!password || !passwordAgain || !firstname || !lastname || !dob) {
            throw new Error("Please fill all the field");
        }

        if (password !== passwordAgain) {
            throw new Error("Password do not match");
        }

        const user = await User.findByIdAndUpdate(id, data);

        if (!user) {
            throw new Error("User not found for update");
        }

        return user;
    }

    async deleteUser(id) {
        const user = await User.findByIdAndDelete(id);

        if (!user) {
            throw new Error("User not found for delete");
        }

        return user;
    }

}

export default new UserService();