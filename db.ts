import mongoose from 'mongoose';

const dbUrl:string = process.env.DB_URL || 'mongodb://127.0.0.1:27017/learn';

const connectDB = async () => {
    try {
        await mongoose.connect(dbUrl).then((data:any) => {
            console.log(`Database connected `)
        })
    } catch (error:any) {
        console.log(error.message);
        setTimeout(connectDB, 5000);
    }
}

export default connectDB;