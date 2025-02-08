import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/posts.routes.js";
import UserRoutes from "./routes/user.routes.js"; // should work
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use(postRoutes);
app.use(UserRoutes);
app.use(express.static('uploads'))

const start = async () => {
    const connectDB = await mongoose.connect("mongodb+srv://sudiptadutta8445:uiMemgryeH6m6Tpb@cluster0.zhlvg.mongodb.net/connectpro?retryWrites=true&w=majority&appName=Cluster0");

    app.listen(9090, () => {
        console.log("Server is running on port 9090");
    });
    
};
start();
