import mongoose from "mongoose";
const Schema = mongoose.Schema;

const feeSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  Tally_name: {
    type: String,
    required: true,
  },
  stud_name: {
    type: String,
    required: true,
  },
  adm_no: {
    type: Number,
    required: true,
  },
  Room_no: {
    type: Number,
    required: true,
  },
  semester: {
    type: String,
    required: true,
  },
  dept: {
    type: String,
    required: true,
  },
  due: {
    type: String,
    required: true,
  },
  advance: {
    type: String,
    required: true,
  },
  gym: {
    type: String,
    required: true,
  },
  loundary: {
    type: String,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
});

export default mongoose.model("Fees", feeSchema);
