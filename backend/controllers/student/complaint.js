import mongoose from "mongoose";
import complaintModel from "../../models/complaint.js";

export const complaintPost = async (req, res) => {
  try {
    const { _id, adm_no, Room_no, message, status } = req.body;
    const newComplaint = new complaintModel({
      _id,
      adm_no,
      Room_no,
      message,
      status,
    });
    await newComplaint.save();
    res.status(201).json(newComplaint);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
