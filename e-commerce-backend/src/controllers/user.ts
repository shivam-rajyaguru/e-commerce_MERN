import { Request , Response , NextFunction } from "express";
import { User } from "../models/user.js";
import  {NewUSerRequestBody}  from "../types/types.js";

export const newUser =  async (req : Request<{},{},NewUSerRequestBody>, res : Response, next : NextFunction) => {
    try {
        const { _id , name , email , photo , gender , dob } =  req.body;
        const user = await User.create({
            _id,
            name,
            email,
            photo,
            gender,
            dob
        });

        return res.status(201).json({
            success : true,
            message : `Welcome, ${user.name}`
        })
    } catch (error) {
        return res.status(400).json({
            success : false,
            message : error
    })
}
}