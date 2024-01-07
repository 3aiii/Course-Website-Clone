const express = require('express')
const cors = require('cors');
const Mongoose  = require('mongoose');
const userRoute  = require('./routes/userRoutes')
const otpRoute = require('./routes/otpRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const collectionRoute = require('./routes/CollectionRoutes');
const CollectionModel = require('./models/CollectionModel');
const { default: mongoose } = require('mongoose');
const app = express()

require("dotenv").config();

app.use(cors())
app.use(express.json())

app.use('/api/auth',userRoute)
app.use('/api/otp',otpRoute)
app.use('/api/cat',categoryRoute)
app.use('/api/collec',collectionRoute)
// app.use('/api/course',)

app.listen(process.env.PORT,()=>{
    console.log(`Server is running at port ${process.env.PORT}`);
})

Mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('Database Connection Successfully');
}).catch((err)=>{
    console.error(err);
})


// for ( i = 0 ; i <5 ; i++){
//     const NewCourse = new courseModel({
//         courseName : 'การทำเสนอเพื่อเพิ่มโอกาสปิดการขาย',
//         difficulty : 'ขั้นสูง',
//         coursePrice : 500,
//         courseVideo : '',
//         courseImg : 'https://www.thaipr.net/wp-content/uploads/2023/01/Copy-of-1200x800-5265af37.jpeg',
//         userCreate : new Mongoose.Types.ObjectId('658940882c77e91f4c909186'),
//         category : new Mongoose.Types.ObjectId('65969fa7a984514f778bd1e8')
//     })
//     // NewCourse.save()
// }

// for ( i = 0 ; i < 4 ; i++){
//     const newCollec = new CollectionModel({
//         collectionName : 'อัพสกิลการตลาดดิจิตอลยุคใหม่ ด้วยการตลาดแบบวัดผลได้',
//         course : [
//             new mongoose.Types.ObjectId('659939e0e74abb0897b95100'),
//             new mongoose.Types.ObjectId('65916c71c49ec3bee95edfef'),
//             new mongoose.Types.ObjectId('659939e0e74abb0897b95102'),
//         ]
//     })
//     // newCollec.save()
// }


// coll_cat.map((data)=>{
//     const courseCate = new categroyModel(data)
//     // courseCate.save()
// })
