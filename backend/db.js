const mongoose=require("mongoose")

const UserSchema=new mongoose.Schema({
    username:String,
    password:String,
    firstName:String,
    LastName:String
})

const User=mongoose.model('User',UserSchema)

module.exports={
    User
};