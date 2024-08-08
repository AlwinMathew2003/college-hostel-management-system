import mongoose from "mongoose";
import Student from "../models/login.js";

export const signin = async (req, res) => {
  try {
    // console.log(req.body)
    // const users = await Student.find({});
    // console.log(users)
    const user = await Student.findOne({ adm_no: req.body.admno });
    // console.log(user)
    if (user.password === req.body.password) {
      res.json(user);
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
