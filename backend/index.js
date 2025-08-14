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

const Products = require('./models/newArrivals/Products.js')
// const commentsModel = require('./models/comments/Comments.js')
const Category = require('./models/Category.js')



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



app.get('/getitems', async(req, res) => {
  try{
    const items = await Products.find().sort({ createdAt: -1 })
    res.status(200).json(items)
  
  } 
  catch (error){
    console.error(error)
    res.status(500).json({message:'it could not display items'})
  } 
})


app.get('/getitems/:id', async(req, res) => {
  try{
    const {id} = req.params.id
    const items = await Products.findById(req.params.id)
    res.status(200).json(items)
  
  } 
  catch (error){
    console.error(error)
    res.status(500).json({message:'it could not display items'})
  } 
})

app.get('/product/:id', async(req, res) => {
  try{
    const {id} = req.params
    const items = await Products.findById(req.params.id)
    res.status(200).json(items)
  
  } 
  catch (error){
    console.error(error)
    res.status(500).json({message:'it could not display items'})
  } 
})

app.put('/updateitems/:id', uploadfile.single('file'), async (req, res) => {
  try {
    const { id } = req.params;

    // Get form fields from body
    const {
      productname,
      productweight,
      weight,
      productquantity,
      productprice,
      productoldprice,
      category,
      description,
    } = req.body;

    // Check for missing required fields
    // if (!productname || !productquantity || !productprice || !category) {
    //   return res.status(400).json({ message: 'Missing required fields' });
    // }

    // Cast string to number where needed (especially from form-data)
    const updateData = {
      productname,
      productweight: Number(productweight),
      weight,
      productquantity: Number(productquantity),
      productprice: Number(productprice),
      productoldprice: Number(productoldprice),
      category,
      description,
    };

    // Include image if file was uploaded
    if (req.file?.filename) {
      updateData.image = req.file.filename;
    }

    const updatedItem = await Products.findByIdAndUpdate(
      id,
      updateData,
      { new: true }
    );

    if (!updatedItem) {
      return res.status(404).json({ message: 'Item not found' });
    }

    res.json(updatedItem);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'The item did not update', error });
  }
});


app.delete('/deleteitems/:id', async(req, res) => {
  try{
    const _id = req.params.id
    const newdelete = await Products.findByIdAndDelete(_id)

    if(!newdelete){
      res.status(500).json({message:'item not found'})
    }

    res.status(200).json({newdelete, message:'Successfully deleted items'})
  }
  catch (error){
    console.error(error)
  }
})

//CATEGORIES SEARCH FUNCTIONALITY
app.get('/category/:CategoryName', async(req, res) => {
  try{
    const category = req.params.CategoryName.toLowerCase()
      const product = await Products.find({category})
      res.status(200).json(product)
  }
  catch(error){
    console.error({error, message:'Error, couldnt find product'})
    res.status(500).json(error)
  }
})


//Vegetables and spice section
app.get('/category/vegetables-and-greens', async(req, res) => {
  try{
    const category = req.params.CategoryName.toLowerCase()
      const product = await Products.find({category})
      res.status(200).json(product)
  }
  catch(error){
    console.error({error, message:'Error, couldnt find product'})
    res.status(500).json(error)
  }
})

//Spices and Seasoning section
app.get('/category/spices-and-seasonings', async(req, res) => {
  try{
    const category = req.params.CategoryName.toLowerCase()
      const product = await Products.find({category})
      res.status(200).json(product)
  }
  catch(error){
    console.error({error, message:'Error, couldnt find product'})
    res.status(500).json(error)
  }
})

//SEARCH FUNCTIONALITY
app.get('/products', async(req, res) => {
  const search = req.query.search || ''

  try{
    const products = await Products.find({
      name: { $regex: search, $options: 'i'} //case insensitive match
    })

    res.json(products)
  }
  catch(error){
    res.status(500).json({error: 'Server error'})
  }
})


// SEARCH FUNCTIONALITY -- GET /search?q=rice
app.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const results = await Products.find({
      productname: { $regex: q, $options: "i" } // case-insensitive match
    });
    res.json(results);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});


//TRIAL CATGEORIES NAVIGATION ROUTE
app.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// app.get('/products', async (req, res) => {
//   const { category, subcategory } = req.query;

//   try {
//     let query = {};
//     if (category) query.category = category;
//     if (subcategory) query.subcategory = subcategory;

//     const products = await Product.find(query);
//     res.json(products);
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });


//Saving the data before the stripe session
//const PendingCart = require('./models/PendingCart');



//STRIPE PAYMENT CODE



app.listen(process.env.PORT, () => {
    console.log('SERVER RUNNING ON PORT ' + process.env.PORT)
})
