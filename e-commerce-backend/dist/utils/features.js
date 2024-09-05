import mongoose from "mongoose";
export function dbConnect() {
    mongoose.connect("mongodb://localhost:27017", {
        dbName: "Ecommerce-2024"
    }).then((c) => {
        console.log(`Database connected successfully in to ${c.connection.host}`);
    }).catch((error) => {
        console.log(error);
    });
}
;
