const express = require('express')
const cors = require('cors');
const Mongoose  = require('mongoose');
const userRoute  = require('./routes/userRoutes')
const otpRoute = require('./routes/otpRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const courseModel = require('./models/courseModel');
const coll_cat = require('./utils/categoryCollection');
const categroyModel = require('./models/categroyModel');
const app = express()

require("dotenv").config();

app.use(cors())
app.use(express.json())

app.use('/api/auth',userRoute)
app.use('/api/otp',otpRoute)
app.use('/api/cat',categoryRoute)
// app.use('/api/course',)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})

Mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database Connection Successfully');
}).catch((err)=>{
    console.error(err);
})

// const NewCourse = new courseModel({
//     courseName : 'ทักษะการต่อรองและโน้มน้าวใจสำหรับนักขาย',
//     difficulty : 'ขั้นสูง',
//     coursePrice : 1200,
//     courseVideo : '',
//     courseImg : 'https://i.ytimg.com/vi/PONXu8S-vLA/maxresdefault.jpg',
//     userCreate : new Mongoose.Types.ObjectId('658940882c77e91f4c909186'),
//     category : new Mongoose.Types.ObjectId('658d709dea46466917ec13d0')
// })

// NewCourse.save()

// coll_cat.map((data)=>{
//     const courseCate = new categroyModel(data)
//     // courseCate.save()
// })
