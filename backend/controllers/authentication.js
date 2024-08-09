import mongoose from "mongoose";
import Student from "../models/students.js";
import User from "../models/User.js";

export const signin = async (req, res) => {
  try {
    //if admin
    const user = await User.findOne({ adm_no: req.body.admno });
    console.log(user.password)
    if (user.password === req.body.password) {
      const student = await Student.findOne({ adm_no: 12112020 });
      console.log(student);
      res.json(student);
    } else {
      res.json({ message: "wrong creds" });
    }
  } catch {
    console.log("not found!!!");
  }
};

export const signup = async (req, res, next) => {
  try {
    const newUser = new Student(req.body);
    await newUser.save();
    res.status(200).send("User has been created");
  } catch (err) {
    next(err);
  }
};
