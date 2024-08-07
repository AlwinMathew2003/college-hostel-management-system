import mongoose from 'mongoose'
const Schema = mongoose.Schema

const messSchema = new Schema({
    _id:{
        type:Number,
        required:true
    },
    FoodType:{
        type:String,
        required:true
    },
    timing:{
        type:String,
        required:true
    }
})

const messModel = mongoose.model('mess',messSchema)