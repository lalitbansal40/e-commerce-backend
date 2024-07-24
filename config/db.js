import mongoose  from "mongoose";

 export const connectDb = async()=>{
         await mongoose.connect('mongodb+srv://e-commerce:Phl0psd3TSNBOVme@cluster0.hg7idrg.mongodb.net/marketloom').then(()=>console.log("DB Connected"))
}
