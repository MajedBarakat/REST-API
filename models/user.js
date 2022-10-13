const mongoose = require('mongoose')

const {Schema, model}=mongoose

const userSchema= new Schema({
    name:{type: String, require: true},
    age:{type:Number},
    coffee:{type:String}
})

const user=model('user',userSchema)
module.exports=user