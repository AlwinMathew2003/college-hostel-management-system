import mongoose from "mongoose";
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  adm_no: {
    type: String,
    required: true,
  },
  Room_no: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  Dept: {
    type: String,
    required: true,
  },
  Semester: {
    type: String,
    required: true,
  },
  GaurdianName: {
    type: String,
    required: true,
  },
  mail_id: {
    type: String,
    required: true,
  },
  Date_updated: {
    type: Date,
    required: true,
  },
  messRequests: {
    type: [String],
  },
});

export default mongoose.model("Student", studentSchema, "Student");
