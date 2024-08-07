import mongoose from 'mongoose'
const Schema = mongoose.Schema

const apologySchema = new Schema(
    {
        _id:{
            type:String,
            required:true
        },
        Room_no:{
            type:String,
            required:true
        },
        Stud_name:{
            type:String,
            required:true
        },
        Reason:{
            type:String,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        Apology_no:{
            type:String,
            required:true
        },
        Adm_no:{
            type:String,
            required:true
        },
        Status:{
            type:Boolean,
            required:true
        }
    }
)

export default mongoose.model('apology',apologySchema);