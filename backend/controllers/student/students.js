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

export const getAllPerm = async (req, res) => {
  try {
    const stduent = Student.findById(req.id);
    const allpersid = stduent.messRequests;
    const allPerms = await Promise.all(
      allpersid.map((permid) => {
        return User.findById(permid);
      })
    );
    res.json(allPerms);
  } catch (err) {
    res.json(err);
    console.log("tried");
  }
};

//delete a user for later

//update student for later
