import { User } from "../models/user.js";
import { TryCatch } from "../middlewares/error.js";
import ErrorHandler from "../utils/utility-class.js";
export const newUser = TryCatch(async (req, res, next) => {
    const { _id, name, email, photo, gender, dob } = req.body;
    if (!_id || !name || !email || !photo || !gender || !dob) {
        return next(new ErrorHandler("All fields are required!", 404));
    }
    let user = await User.findById(_id);
    if (user) {
        return res.status(200).json({
            success: true,
            message: `welcome ${user.name}`,
        });
    }
    user = await User.create({
        _id,
        name,
        email,
        photo,
        gender,
        dob: new Date(dob),
    });
    return res.status(201).json({
        success: true,
        message: `Welcome, ${user.name}`,
    });
});
export const getAllUser = TryCatch(async (req, res, next) => {
    let users = await User.find();
    return res.status(200).json({
        success: true,
        users,
    });
});
export const getUser = TryCatch(async (req, res, next) => {
    let id = req.params.id;
    let user = await User.findById(id);
    if (!user) {
        return next(new ErrorHandler("User not found with that Id", 404));
    }
    return res.status(200).json({
        success: true,
        user,
    });
});
export const deleteUser = TryCatch(async (req, res, next) => {
    let id = req.params.id;
    let user = await User.findById(id);
    if (!user) {
        return next(new ErrorHandler("User not found with that Id", 404));
    }
    await User.findByIdAndDelete(id);
    return res.status(200).json({
        success: true,
        message: "User deleted successfully",
    });
});
