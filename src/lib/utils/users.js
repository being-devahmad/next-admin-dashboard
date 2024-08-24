// fetching users from database

import { dbConnext } from "../db/dbConnect"
import { User } from "../models/userModel"

export const fetchUsers = async () => {
    try {
        dbConnext()
        const users = await User.find()
        return users

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch all users")
    }
}

export const fetchUser = async (id) => {
    try {
        dbConnext()
        const user = await User.findById(id)
        return user

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch all users")
    }
}