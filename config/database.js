const mongoose = require("mongoose");

// Connect to the database
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB has been connected");
  } catch (error) {
    console.log("DB Connection failed:", error.message);
  }
};

module.exports = connectDB;

