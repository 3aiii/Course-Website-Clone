const express = require('express')
const cors = require('cors');
const Mongoose  = require('mongoose');
const userRoute  = require('./routes/userRoutes')
const otpRoute = require('./routes/otpRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const app = express()

require("dotenv").config();

app.use(cors())
app.use(express.json())

app.use('/api/auth',userRoute)
app.use('/api/otp',otpRoute)
app.use('/api/cat',categoryRoute)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})

Mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database Connection Successfully');
}).catch((err)=>{
    console.error(err);
})