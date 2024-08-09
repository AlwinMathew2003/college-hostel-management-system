import mongoose from "mongoose";
const Schema = mongoose.Schema;

const complaintSchema = new Schema({
  _id: {
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
  message: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Complaint", complaintSchema); // Model name 'Complaint'
