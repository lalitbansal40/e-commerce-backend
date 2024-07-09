import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
 
    query:{
        type:String,
        required:true
    }
},{minimize:false})


const contactModel = mongoose.models.contact || mongoose.model("contact",contactSchema);
export default contactModel;