const express = require('express')
const {urlencoded} = require("express");
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000

connectDB()


const app = express()

//middleware

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`Server Connected to ${port}`)
})
