import express from 'express'
const app = express();
import userRoute from './routes/user.js';
import { dbConnect } from './utils/features.js';

//database connected
dbConnect();

//user routes
app.use("api/v1/users" , userRoute);

const port = process.env.PORT || 4000;
app.listen(port , () => {
    console.log(`Server is listing on http://localhost : ${port}`);
})