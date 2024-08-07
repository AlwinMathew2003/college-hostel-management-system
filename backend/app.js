// Backend server
import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { set, connect } from "mongoose";
import authUser from "./routes/authentication.js";
import complaintRoutes from "./routes/student/complaintRoutes.js";
import messcutpermissionRoutes from "./routes/student/messcutpermissionRoutes.js";
import apologyRoutes from "./routes/admin/apologyRoutes.js"

config();



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
