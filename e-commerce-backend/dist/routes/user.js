import express from "express";
import { deleteUser, getAllUser, getUser, newUser, } from "../controllers/user.js";
const router = express.Router();
// api/v1/users/new <-- Create new user
router.post("/new", newUser);
// api/v1/users/all <-- Get all users
router.get("/all", getAllUser);
// api/v1/users/Id <-- Get single user and delete user
router.get("/:id", getUser).delete("/:id", deleteUser);
export default router;
