require("dotenv").config();

const mongoose = require("mongoose");

async function test() {

    try {

        console.log("URI:", process.env.MONGO_URI);

        await mongoose.connect(
            process.env.MONGO_URI
        );

        console.log(
            "✅ CONNECTED"
        );

        process.exit(0);

    } catch (error) {

        console.log(error);

    }

}

test();