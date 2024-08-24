// fetching data from database

import { dbConnext } from "../db/dbConnect"
import { User } from "../models/userModel"

export const fetchUsers = async () => {
    try {
        dbConnext()
        const users = await User.find({})
        console.log("allUsers-->", users)
        return users

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch all users")
    }
}