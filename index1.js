// 


import express from 'express';
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import mongoose from 'mongoose';


const port=5000;

const app=express();

app.use(express.json())

mongoose.connect('mongodb+srv://rubeshshrestha213:Fantasy.1@cluster0.2qe1d4m.mongodb.net/Shopus'

).then((val)=>{
  console.log(val)
  app.listen(port,(e)=>{
    console.log('connected')
  })

}).catch((err)=>{
console.log(err);
})

app.get('/',(req,res)=>{
  return res.status(200).json({data:'Hello'})

})

app.use('/api/products',productRoutes);
app.use('/api/users',userRoutes)
// app.use();


// app.listen(port,(e)=>{
//   console.log('connected')
// })