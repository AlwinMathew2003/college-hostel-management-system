// Backend server
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const mongoose = require("mongoose")

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://tbi-user:Sfn09Ysegdwtjc9IB@collegehostelmanagement.r8desjj.mongodb.net/collegeHostelManagement?retryWrites=true&w=majority')
.then(()=>{
console.log("MongoDB Connected")
})
.catch((err)=>{
    console.log(err)
})

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})