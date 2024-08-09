import Student from "../../models/students.js";
import mongoose from "mongoose";

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

//delete a user for later

//update student for later
