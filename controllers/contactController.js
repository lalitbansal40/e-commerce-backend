import contactModel from "../models/contactModel.js";
const contact = async (req,res)=>{
    const {fname,lname,email,query,phone} = req.body;
    try{
        const newContact = new contactModel({
            fname:fname,
            lname:lname,
            email:email,
            query:query,
            phone:phone
        })
        
        const contact = await newContact.save()
        res.json({success:true,message:"Thank You for Contact Us."})
    }catch(error)
    {
    console.log(error)
    res.json({success:false,message:"Error"})
    }
    }
    export default contact;