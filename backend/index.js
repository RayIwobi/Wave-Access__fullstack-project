const express = require('express')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const path = require('path')
const multer = require('multer')
const PORT = process.env.PORT || 10000
const app = express()


const TestRouter = require('./routes/routeTest.js')

app.use('/text', TestRouter)

app.use(cors({
    origin: 'https://metering-website-azure.vercel.app',
    credentials:true,
}))


const  {UserRouter } = require('./routes/user.js') 
const  {CommentRouter } = require('./routes/comment.js')  

// Mount webhook before express.json for raw body

const User = require('./models/User.js')

const cookieParser = require('cookie-parser');//requirement for authentication


const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary')

// const commentsModel = require('./models/comments/Comments.js')


app.use(express.json())
app.use(cookieParser())
app.use(express.static('public'))
app.use('/auth', UserRouter)
app.use('/comments', CommentRouter)


mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('✅ MongoDB connected'))
.catch(err => console.error('❌ MongoDB connection failed:', err));


cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

const storage = new CloudinaryStorage({
  cloudinary:cloudinary,
  params:{
    folder: 'nedifoods',
    allowed_formats: ['jpg', 'png', 'jpeg']
  }
})

const uploadfile = multer({
  storage:storage
})

//routes
app.post('/sendinfo', uploadfile.single('file'), async(req, res) => {
  try{
    const {productname, productweight, weight, productquantity,  productprice, productoldprice,category, description} = req.body
    const image = req.file?.filename || ""

    const newentry = await Products.create({
      productname,
      productweight,
      weight,
      productquantity,
      productprice,
      productoldprice,
      category,
      description,
      image
    })

    if (!image) {
      return res.status(404).send({ message: 'Image not found' });
    }

    res.json(newentry)
    console.log("req.body:", req.body); // 👈 Add this
    console.log("req.file:", req.file);

  }
  catch (error){
    console.error(error)
    res.status(500).json({message: 'Server Error'})
  }
})

app.listen(process.env.PORT, () => {
    console.log('SERVER RUNNING ON PORT ' + process.env.PORT)
})
