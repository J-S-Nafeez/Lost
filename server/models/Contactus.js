const mongoose=require("mongoose");
const Contact=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    msg:{type:String}},
    {
        timestamps:true
    });

module.exports=mongoose.model("ContactUs",Contact);
//schema fixed