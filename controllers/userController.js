import { User } from "../models/User.js"
import bcrypt from "bcrypt";

export const getUsers =(req,res) =>{
  return res.status(200).json({data:'All users'})

}


export const userLogin= async(req,res)=>{
  await  User.create(req.body)
  return res.status(200).json({data:'Successfull'})
}




export const registerUser = async(req,res)=>{
  const {fullname, email,password}=req.body
    try {
      const isExist= await User.findOne({email:email})
      if(isExist){
        return res.status(409).json({message:"Email Already in Use"
        })
      }
      const hashPass= bcrypt.hashSync(password,10);
      await User.create({
        email:email,
        password:hashPass,
        fullname:fullname
      })
      return res.status(200).json({message:"Successfully Registered"})
      
    } catch (error) {
      return res.status(400).json({message:"Error Occured"})
      
    }


  
}