const express = require("express");
const app = express();
const bodyParser = (require('body-parser'));
const morgan = require('morgan');
const mongoose = require('mongoose');

app.use(bodyParser.json());
app.use(morgan('tiny'));

const productSchema = mongoose.Schema({
    name: String,
    image: String,
    countInStock: Number
})

const Product = mongoose.model('Product', productSchema);

require('dotenv/config');

const api = process.env.API_URL

app.get(`${api}/products`, (req, res) =>{
    const product = {
        id : 1,
        name: 'riza',
        image : 'url',
    }
    res.send(product);
})

app.post(`${api}/products`, (req, res) =>{
    const product =  new product({
        name: req.body.name,
        image: req.body.image,
        countInStock: req.body.countInStock
    })

    product.save().then((createdProduct=>{
        res.status(201).json(createdProduct)
    })).catch((err)=>{
        res.status(500).json({
            error: err,
            success: false
        })
    })
})

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName:'watchus-database'
})
.then(()=>{
    console.log('Database connection is ready..')
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000, ()=>{
    console.log(api)
    console.log("Server is running http://localhost:3000");
})