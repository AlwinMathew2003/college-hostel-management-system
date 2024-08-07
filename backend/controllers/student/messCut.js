import mongoose from "mongoose";
import messcutpermissionModel from "../../models/mess-request.js";

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
    res.status(400).json({ message: err.message });
  }
};
