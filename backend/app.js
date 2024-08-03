// Backend server
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require("mongoose")
const complaintRoutes = require("./routes/complaintRoutes");
const messcutpermissionRoutes = require("./routes/messcutpermissionRoutes")

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/complaints", complaintRoutes);
app.use("/api/messcutpermissions",messcutpermissionRoutes);


mongoose.set('debug', true);
mongoose.connect('mongodb+srv://akhiljosetcr:kR1i0eZiPMZBqZGl@college-hostel.daqchog.mongodb.net/?retryWrites=true&w=majority&appName=College-Hostel')
.then(()=>{
console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})