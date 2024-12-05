import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./controllers/AuthController.js"

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/auth",AuthRoutes)

const server = app.listen(process.env.PORT,()=>{
    console.log('server started on port ${process.env.PORT}')
}); // see video at 22 min must refer to env
