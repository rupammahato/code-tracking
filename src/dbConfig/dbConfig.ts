import mongoose from "mongoose";


export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on("connected", () => {
            console.log("connected to MongoDB");
        });

        connection.on("error", (err) => {
            console.log(
                "error connecting to MongoDB, please make sure MongoDB is running:",
                + err
            );
            process.exit();
        });
    } catch (error) {
        console.log("error connecting to MongoDB");
        console.log(error);
    }
}