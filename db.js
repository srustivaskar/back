require("dotenv").config()
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Mongodb connected successfully...")
    }
    catch (error) {
        console.error(`error occured while running the server : ${error.message}`)

        process.exit(1)
    }
}

module.exports = connectDB