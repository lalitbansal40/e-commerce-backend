import mongoose  from "mongoose";

 export const connectDb = async()=>{
    await mongoose.connect('mongodb+srv://marketloomcustomercare:<password>@cluster0.qrimbpl.mongodb.net/marketloomcustomercare').then(()=>console.log("DB Connected"))
}
