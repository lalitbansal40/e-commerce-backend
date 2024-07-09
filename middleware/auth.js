import jwt from "jsonwebtoken"
const authMiddleWare = async(req,res,next)=>{
    const {token} = req.headers;
    if(!token){
        return res.json({success:false,message:"Not Authorized Login Again"})
    }
    try{
const token_decod = jwt.verify(token,"random#secret")
req.body.userId = token_decod.id;
next()
    }
    catch(error){
        console.log(error)
        res.json({success:false,message:"error"})
    }
}
export default authMiddleWare;