import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
<<<<<<< HEAD
        origin: ["http://localhost:5173"],
=======
        origin: ["https://react-chatapp-test.vercel.app:5173"],
>>>>>>> b436fe3035be017c29ce166ae1e0b857b215af4e
        methods: ["GET", "POST"]
    }
});

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on("connection", (socket) => {
    console.log("a user connected : ", socket.id);
    const userId = socket.handshake.query.userId;

    if(userId != undefined) userSocketMap[userId] = socket.id;

    io.emit("getOnlineUsers", Object.keys(userSocketMap));

    socket.on("disconnect", () => {
        console.log("user disconnected : ", socket.id);
        delete userSocketMap[userId];
        io.emit("getOnlineUsers", Object.keys(userSocketMap));
    });
    
    socket.on("connect_error", (err) => {
      console.log(`connect_error due to ${err.message}`);
    });
});



export {app, io, server};