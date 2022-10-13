const mongoose=require('mongoose')
require('dotenv').config()

const connectDB=async()=>{
    try {
        await mongoose.connect(process.env.mongourl)
        console.log('connect DB')
    } catch (error) {
        console.log(error)
    }
}

module.exports=connectDB