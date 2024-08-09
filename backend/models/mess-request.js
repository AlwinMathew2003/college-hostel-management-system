import mongoose from "mongoose";
const Schema = mongoose.Schema;

const messRequestSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  adm_no: {
    type: Number,
    required: true,
  },
  leavingDate: {
    type: Date,
    required: true,
  },
  leavingTime: {
    type: String,
    required: true,
  },
  reason: {
    type: String,
    required: true,
  },
  returningDate: {
    type: Date,
    required: true,
  },
  returningTime: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
  },
});

//export const messRequestModel = mongoose.model('mess-request',messRequestSchema)

export default mongoose.model("MessCutPermission", messRequestSchema); // Model name 'messcutpermission'
// module.exports = messcutpermissionModel; // Exporting the model
