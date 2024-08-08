import express from 'express';
import { productController } from '../controllers/productController.js';

const router=express.Router();



router.route('/').get(productController)



export default router;