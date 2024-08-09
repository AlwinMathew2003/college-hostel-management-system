import mongoose from "mongoose";
const Schema = mongoose.Schema;

const loginSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  adm_no: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  student_id:{
    type:String
  }
});

export default mongoose.model("Login", loginSchema, "login");
