import Student from "../../models/students.js";
import mongoose from "mongoose";
import db from "../../mysql.js";

//add a student
export const addStudent = async (req, res) => {
  const newStudent = new Student({ ...req.body });
  try {
    await newStudent.save();
    res.status(200).send("student has been created");
  } catch (err) {
    res.json(err);
  }
};

export const fetchStudents = async (req,res)=>{
  try{  
    const [studentData] = await db.query('SELECT name,sem FROM student')
    if (studentData.length>0)
    {
      res.json(studentData);
    }
    else{
      res.json({"message":"No Data Found"})
    }
    
  }catch(err){
    console.log(err)
    res.json(err)
  }
}

//delete a user for later

//update student for later
