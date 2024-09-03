import mongoose from "mongoose";
import validator from "validator";

interface IUser extends Document { 
    _id : string;
    name : string;
    email : string;
    photo : string;
    role : "admin" | "user";
    gender : "male" | "female";
    dob : Date,
    createdAt : Date;
    updatedAt : Date;

    //Virtual attribute
    age : number;
}

const userSchema = new mongoose.Schema({
    _id : {
        type : String,
        required : [true , "Please enter Id"]
    },
    name : {
        type : String,
        required : [true , "Please enter Name"]
    },
    email : {
        type : String,
        unique : [true , "Email already exist"],
        required : [true , "Please enter Name"],
        validate : validator.default.isEmail
    },
    photo : {
        type : String,
        required : [true , "Please enter Photo"]
    },
    role : {
        type : String,
        enum : ["admin","user"],
        required : [true , "Please enter Role"]
    },
    gender : {
        type : String,
        enum : ["male" , "female"],
        required : [true , "Please enter Gender"]
    },
    dob : {
        type : Date,
        required : [true , "Please enter Date of birth"]
    }
} , { timestamps : true});

userSchema.virtual("age").get(function () {
    const today = new Date();
    const dob = this.dob;

    let age = today.getFullYear() - dob.getFullYear();

    if(today.getMonth() < dob.getMonth() || today.getMonth() === dob.getMonth() && today.getDate() < dob.getDate()) return age--;

    return age;
});

export const User = mongoose.model<IUser>("User" , userSchema);