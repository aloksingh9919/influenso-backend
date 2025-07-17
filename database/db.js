const mongoose = require('mongoose');

 const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI, {
        dbName: "INFLUENSO"
    }).then(() => {
        console.log("Database connected successfully")
    }).catch((err) => {
        console.log("Error connecting to database", err)
    })
}

module.exports ={connectDB}