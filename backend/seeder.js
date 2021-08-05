import Colors from "colors";
import  Mongoose  from "mongoose";
import products from "./data/products.js";
import users from "./data/users.js";
import Product from "./models/productModel.js";
import User from "./models/userModel.js";
import dotenv from "dotenv"
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

const importData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

        const createdUsers = await User.insertMany(users);

        const adminUser = createdUsers[0]._id;
        
        const sampleProducts =  products.map(product => {
            return {...product, user:adminUser}
        });

        await Product.insertMany(sampleProducts);
        console.log("data inserted".green.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

const destroyData = async () => {
    try {
        await Order.deleteMany();
        await Product.deleteMany();
        await User.deleteMany();

    
        console.log("data destroyed".red.inverse);
        process.exit();

    } catch (error) {
        console.error(`${error}`.red.inverse);
        process.exit(1);
    }
}

if (process.argv[2] === "-d"){
    destroyData();

}
else {
    importData();
}
