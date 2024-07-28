const mongoose = require("mongoose")
const Schema = mongoose.Schema
const holidaySchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    Date:{
        type:Date,
        required:true
    },
    Reason:{
        type:String,
        required:true
    },
})

export const holidayModel = mongoose.model('holidays',holidaySchema)
