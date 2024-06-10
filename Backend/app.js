const express = require("express");
const app = express();
const bodyParser = (require('body-parser'))

app.use(bodyParser.json());

require('dotenv/config');

const api = process.env.API_URL

app.get(`${api}/products`, (req, res) =>{
    const products = {
        id : 1,
        name: riza,
        image : 'url',
    }
    res.send(products);
})

app.post(`${api}/products`, (req, res) =>{
    const newProduct = req.body;
    console.log(newProduct);
    res.send(products);
})

app.listen(3000, ()=>{
    console.log(api)
    console.log("Server is running http://localhost:3000");
})