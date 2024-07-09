import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt, { compare } from "bcrypt"
import validator from "validator"

//login
const loginUser = async (req,res)=>{
   const {email,password}= req.body
   try{
  const user = await userModel.findOne({email})
  if(!user){
    return res.json({success:false,message:"User Does Not Exist..."})
  }
  let isMatch= false;
 if(password===user.password)
 {
    isMatch = true;
 }
  if(!isMatch){
    return res.json({success:false,message:"Invalid Credentials"})
  }
  const token = createToken(user._id)
  res.json({success:true,token,name:user.name})
   }catch(error)
   {
    console.log(error)
    res.json({success:false,message:"Error"})
   }
}

const createToken = (id)=>{
    return jwt.sign({id},"random#secret" )
}
//register User
const registerUser = async (req,res)=>{
const {name,email,password} = req.body;
try{
    const exist = await userModel.findOne({email})
    if(exist){
        return res.json({success:false,message:"User Already Exist"})
    }
    if(!validator.isEmail(email))
    {
        return res.json({success:false,message:"Please Enter a Valid Email"})
    }
    const newUser = new userModel({
        name:name,
        email:email,
        password:password
    })
    
    const user = await newUser.save()
    const token = createToken(user._id)
    res.json({success:true,token})
}catch(error)
{
console.log(error)
res.json({success:false,message:"Error"})
}
}

//export
export {loginUser,registerUser}