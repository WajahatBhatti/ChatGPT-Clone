const mongoose = require('mongoose');

const connectDB = async (dbName) => {
  try {
    // Connect to the MongoDB cluster using the provided connection string and options
    const connection = await mongoose.connect(`mongodb+srv://***:***@***.ey93gey.mongodb.net/${dbName}?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    // Log the successful connection host
    console.log(`Connected to MongoDB cluster. Database: ${dbName}`, connection.connection.host);
  } catch (error) {
    // Handle connection errors
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit the application with an error status
  }
}

module.exports = connectDB;
