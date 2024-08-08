import express from 'express';
import {getUsers, registerUser, userLogin} from '../controllers/userController.js'
import { notAllowed } from '../utils/showError.js';
import Joi from 'joi';
import expressValidate from 'express-joi-validation'

const validate=expressValidate.createValidator({});

// const loginSchema=Joi.object({
//   email:Joi.string().email().required(),
//   password:Joi.string().pattern(/^(?=.[0-9])(?=.[!@#$%^&])[a-zA-Z0-9!@#$%^&]{6,16}$/).required().messages({
//     'string.pattern.base':`Provide Strong Password of having atleast one number and character each.`
//   })
// })
const registerSchema=Joi.object({
  fullname:Joi.string().required(),
  email:Joi.string().email().required(),
  password:Joi.string().min(5).max(15).required()
})
const loginSchema=Joi.object({
  fullname:Joi.string().required(),
  email:Joi.string().email().required(),
  password:Joi.string().min(5).max(15).required()
})

const router=express.Router()



router.route('/').get(getUsers).all(notAllowed)
router.route('/login').post(validate.body(loginSchema),userLogin).all(notAllowed)
router.route('/register').post(validate.body(registerSchema),registerUser).all(notAllowed)



export default router