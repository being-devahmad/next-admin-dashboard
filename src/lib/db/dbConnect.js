import mongoose from "mongoose";

let connection = {}; // Use a global object to track the connection state

export const dbConnext = async () => {
    try {
        // Check if already connected
        if (connection.isConnected) {
            return; 
        }

        // Establish new connection
        const db = await mongoose.connect(process.env.MONGO_URL);

        // Save connection state globally
        connection.isConnected = db.connections[0].readyState;

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        throw new Error("Failed to connect to MongoDB");
    }
};
