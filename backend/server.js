import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";


dotenv.config();

const app= express();
const PORT = process.env.PORT || 5000

app.use(express.json()); //**to parse req.body in auth controller /middleware
app.use(express.urlencoded({ extended: true })); //middleware to parse form data(urlencoded)

app.use(cookieParser()); //middleware to parse user data cookies

app.use("/api/auth",authRoutes);

app.listen(PORT,() => {
    console.log(`Server is listening on port: ${PORT}`);
    connectMongoDB();
});