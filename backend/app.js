import dotenv from 'dotenv';
dotenv.config()


import express from "express";
import { createServer } from "node:http";
import { Server } from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import connectToSocket from "./src/controllers/socketManager.js";
import userRoutes from "./src/routes/userRoutes.js"

const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", process.env.PORT );
app.use(cors());
app.use(express.json({ limit: "40kb" }));
app.use(express.urlencoded({ limit: "40kb", extended: true }));

const MONGO_URI =process.env.MONGO_URI;


mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log("db connected");
  })
  .catch((err) => {
    console.log(err);
  });


app.use("/api/v1/users",userRoutes)


server.listen(app.get("port"), () => {
  console.log("app started on 8000");
});
