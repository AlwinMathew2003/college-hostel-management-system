import Student from "../../models/students.js";
import mongoose from "mongoose";
import messRequest from "../../models/mess-request.js";
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
    const student = await Student.findOne({ adm_no: req.params.adm_no });
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }

    const allpersid = student.messRequests;

    const allPerms = await Promise.all(
      allpersid.map(async (permid) => {
        return await messRequest.findById(permid);
      })
    );

    res.json(allPerms);
  } catch (err) {
    console.error("Error fetching permissions:", err); // Improved logging
    res
      .status(500)
      .json({ error: "An error occurred while fetching permissions" });
  }
};

//delete a user for later

//update student for later
