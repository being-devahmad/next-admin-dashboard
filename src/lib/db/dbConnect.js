import mongoose from "mongoose"

export const dbConnext = async () => {
    try {
        const connection = {}

        if (connection.isConnected) return;

        const db = await mongoose.connect(process.env.MONGO_URL)
        connection.isConnected = db.connection[0].readyState;

    } catch (error) {
        throw new Error(error)
    }
}