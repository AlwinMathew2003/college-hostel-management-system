import mongoose from "mongoose";
import apologyModel from "../../models/apology.js";

export const apologyReqPost = async (req, res) => {
  try {
    const {
      _id,
      Room_no,
      Stud_name,
      Reason,
      date,
      Apology_no,
      Adm_no,
      Status,
    } = req.body;
    const newApology = new apologyModel({
      _id,
      Room_no,
      Stud_name,
      Reason,
      date,
      Apology_no,
      Adm_no,
      Status,
    });
    await newApology.save();
    res.status(201).json(newApology);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const apologyReqGet = async (req, res) => {
  try {
    const apologies = await apologyModel.find();
    res.status(200).json(apologies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
