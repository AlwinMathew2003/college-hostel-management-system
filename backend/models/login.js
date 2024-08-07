import mongoose from 'mongoose'
const Schema = mongoose.Schema

const loginSchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    adm_no:{
        type:Number,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    Date:{
        type:Date,
        required:true
    },
    time:{
        type:String,
        required:true
    }
    
})

export const loginModel = mongoose.model('login',loginSchema)