import express from "express";
const app = express();
import userRoute from "./routes/user.js";
import { dbConnect } from "./utils/features.js";
import { errorMiddleware } from "./middlewares/error.js";
//database connected
dbConnect();
//built-in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//user routes
app.use("/api/v1/users", userRoute);
//global level middleware
app.use(errorMiddleware);
const port = process.env.PORT || 4000;
app.listen(port, () => {
    console.log(`Server is listing on http://localhost : ${port}`);
});
