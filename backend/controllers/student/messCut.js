import mongoose from "mongoose";
import messcutpermissionModel from "../../models/mess-request.js";
import Student from '../../models/students.js'

export const messcutPermissionPost = async (req, res) => {
  try {
    const {
      _id,
      adm_no,
      leavingDate,
      leavingTime,
      reason,
      returningDate,
      returningTime,
      status,
    } = req.body;
    const newpermission = new messcutpermissionModel({
      _id,
      adm_no,
      leavingDate,
      leavingTime,
      reason,
      returningDate,
      returningTime,
      status,
    });
    await newpermission.save();

    res.status(201).json(newpermission);
  } catch (err) {
    console.log(err)
    res.status(400).json({ message: err.message });
  }
};

export const messcutPermissionGet = async (req, res) => {
  try {
    // Fetch all permissions
    const permissions = await messcutpermissionModel.find();

    // Fetch all students
    const students = await Student.find();

    // Create a map of adm_no to student name
    const studentMap = new Map(students.map(student => [student.adm_no.toString(), student.name])); // Ensure adm_no is a string

    // Log studentMap for debugging
    // console.log("Student Map:", Array.from(studentMap.entries()));

    // Enrich permissions data with student names
    const enrichedPermissions = permissions.map(permission => ({
      ...permission.toObject(), // Convert MongoDB document to plain object
      studentName: studentMap.get(permission.adm_no.toString()) || 'Unknown' // Add student name
    }));

    // console.log("Enriched Permissions:", enrichedPermissions); // Log the enriched data

    res.status(200).json(enrichedPermissions);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
