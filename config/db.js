import mongoose  from "mongoose";

 export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://marketloom:7m1QEaS2oZyLwQYL@cluster0.qrimbpl.mongodb.net/marketloom').then(()=>console.log("DB Connected"))
}
