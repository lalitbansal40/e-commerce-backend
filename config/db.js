import mongoose  from "mongoose";

 export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://marketloomcustomercare:oHkShDKmNHaPHeu3@cluster0.uvz3njw.mongodb.net/marketloom').then(()=>console.log("DB Connected"))
}