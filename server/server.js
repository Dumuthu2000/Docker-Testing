import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRouter from './router/userRouter.js'



const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGODB_URI)
.then(()=>{
    console.log('DB connected');
}).catch((err)=>{
    console.log(err.message);
})

app.listen(5000,()=>{
    console.log(`Server is running on port ${5000}`)
});

app.use('/api/user', userRouter); 