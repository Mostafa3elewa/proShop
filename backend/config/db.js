import  Mongoose  from "mongoose";


const connectDB = async() =>{
    try {
        const conn = await Mongoose.connect(process.env.MONGO_URI,{ //getting uri from env file
            useUnifiedTopology : true,
            useNewUrlParser : true,
            useCreateIndex : true 
        })
        console.log(`MongoDB connected  : ${conn.connection.host}`);
    } catch (error) {
        console.log(`Error:${error.message}`);
        process.exit(1)
    }
}

export default connectDB;