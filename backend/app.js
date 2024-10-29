// Backend server
import express, { json } from "express";
import cors from "cors";
import { config } from "dotenv";
import { set, connect } from "mongoose";
import authUser from "./routes/authentication.js";
import complaintRoutes from "./routes/student/complaintRoutes.js";
import messcutpermissionRoutes from "./routes/student/messcutpermissionRoutes.js";
import apologyRoutes from "./routes/admin/apologyRoutes.js"
import passwordRoutes from "./routes/student/updatePassword.js"
import mysql from "mysql2";


config();



const PORT = process.env.PORT;
const app = express();

app.use(json());
app.use(cors());

// // set("debug", true);
// // connect(process.env.MONGO)
// //   .then(() => {
// //     console.log("MongoDB Connected");
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// Create a connection pool
const db  = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hostel'
});

// Test the connection
db.getConnection((err, connection) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL!');
  connection.release(); // Release the connection back to the pool
});


app.use("/api/login", authUser);
app.use("/api/complaints",complaintRoutes )
app.use("/api/complaints", complaintRoutes);
app.use("/api/messcutpermissions",messcutpermissionRoutes);
app.use("/api/apologies",apologyRoutes);
app.use("/api/user",passwordRoutes);


app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}`);
});
