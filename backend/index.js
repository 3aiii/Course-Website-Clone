const express = require('express')
const cors = require('cors');
const Mongoose  = require('mongoose');
const userRoute  = require('./routes/userRoutes')
const otpRoute = require('./routes/otpRoutes');
const categoryRoute = require('./routes/categoryRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const collectionRoute = require('./routes/CollectionRoutes');
const CollectionModel = require('./models/CollectionModel');
const { default: mongoose } = require('mongoose');
const feedbackModel = require('./models/feedbackModel');
const app = express()

require("dotenv").config();

app.use(cors())
app.use(express.json())

app.use('/api/auth',userRoute)
app.use('/api/otp',otpRoute)
app.use('/api/cat',categoryRoute)
app.use('/api/collec',collectionRoute)
app.use('/api/feedback',feedbackRoutes)

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


// const newCollec = new feedbackModel({
//         feedBackDes : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum',
//         user :  new mongoose.Types.ObjectId('65883bba5077a4079db0a955'),
//     })

// newCollec.save()