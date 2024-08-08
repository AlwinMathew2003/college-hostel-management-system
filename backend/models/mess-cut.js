import mongoose from 'mongoose'
const Schema = mongoose.Schema

const messCutSchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    adm_no:{
        type:Number,
        required:true
    },
    break_fast:{
        type:Boolean,
        required:true
    },
    lunch:{
        type:Boolean,
        required:true
    },
    tea:{
        type:Boolean,
        required:true
    },
    dinner:{
        type:Boolean,
        required:true
    },
    mess_cut_status:{
        type:Boolean,
        required:true
    },
    Date:{
        type:Date,
        required:true
    }
})

export default mongoose.model("mess-cut",messCutSchema)
