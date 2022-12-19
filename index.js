require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express();

app.get('/',(req,res)=>{
    res.send('Base')
})

app.get('/hello',(req,res)=>{
    res.send('Hi')
})

const srv = process.env.MONGO_SRV
mongoose.set('strictQuery', false);
mongoose.connect(srv)
    .then(()=>{
        app.listen(3000,()=>{
            console.log('db connected\nserver running:3000')
        })
    })
    .catch((error)=>{
        console.error(error.message);
    })
