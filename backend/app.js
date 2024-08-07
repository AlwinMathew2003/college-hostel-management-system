// Backend server
import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { set, connect } from "mongoose";
import authUser from "./routes/authentication.js";
config();
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const complaintRoutes = require("./routes/student/complaintRoutes");
const messcutpermissionRoutes = require("./routes/student/messcutpermissionRoutes")
const apologyRoutes = require("./routes/admin/apologyRoutes")

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(json());
app.use(cors());
app.use("/api/login", authUser);
set("debug", true);
connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api/complaints", complaintRoutes);
app.use("/api/messcutpermissions",messcutpermissionRoutes);
app.use("/api/apologies",apologyRoutes);

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
