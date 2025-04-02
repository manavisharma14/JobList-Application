
import mongoose from 'mongoose';

const dbConnection = async() => {
    try{
        const DB_URI = "mongodb://localhost:27017/jobdashboard"
        console.log("Connected to MongoDB");
        await mongoose.connect(DB_URI,  {useUnifiedTopology: true, useNewUrlParser: true});
    }
    catch(error){
        console.error("Error connecting to MongoDB", error);
        process.exit(1);
    }
}

export default dbConnection;