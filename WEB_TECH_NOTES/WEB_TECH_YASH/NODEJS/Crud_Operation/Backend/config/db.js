const mongoose = require("mongoose")
const dotenv = require("dotenv")

dotenv.config();

const connectDb =async () => {
    try {
         await mongoose.connect(process.env.MONGODB_URL);
         console.log("MongoDb Connected");
    } catch (error) {
        console.log("MongoDb Error");
    }
}

module.exports = connectDb;