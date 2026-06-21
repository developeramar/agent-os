const mongoose = require("mongoose");

const connectDB = async () => {

    try {

        console.log("Trying MongoDB...");

        await mongoose.connect(
            process.env.MONGO_URI,
            {
                serverSelectionTimeoutMS: 10000
            }
        );

        console.log("✅ MongoDB Connected");

    } catch (error) {

        console.log("❌ FULL ERROR");
        console.log(error);

    }

};

module.exports = connectDB;