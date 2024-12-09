import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import AuthRoutes from "./controllers/AuthController.js"
import MessageRoutes from "./controllers/MessageRoutes.js"


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json())

app.use("/api/auth",AuthRoutes)
app.use("/api/messages",MessageRoutes)


const server = app.listen(process.env.PORT,()=>{
    console.log('server started on port ${process.env.PORT}')
}); // see video at 22 min must refer to env
const io=new Server(server,{
    cors:{
        origin:"http://localhost:3000",
    },
});

global.onlineUsers=new Map();
io.on("connection",(socket)=>{
    global.chatSocket=socket;
    socket.on("add-user",(userId)=>{
        onlineUsers.set(userId,socket.id);
    });
});
