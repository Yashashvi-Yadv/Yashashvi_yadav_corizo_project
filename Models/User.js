const mongoose = require('mongoose');
require('dotenv').config()

// Connection URL
const url = process.env.DATABASE_URL; // Replace with your MongoDB server URL and database name

async function connectDB() {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB');
    } catch (err) {
        console.error('Connection error:', err);
    }
}

connectDB();

const UserSchema = new mongoose.Schema({
    Name:String,
    Age:Number,
    Class:Number,
    Stream:String,
})

const Models = mongoose.model("User", UserSchema);
module.exports = Models;