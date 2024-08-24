'use server'

const { dbConnext } = require("../db/dbConnect");
const { User } = require("../models/userModel");

export const createUser = async (formData) => {
    const { username, password, email, phone, isAdmin, isActive } = Object.fromEntries(formData)
    try {
        dbConnext();

        const newUser = new User({
            username, email, phone, isAdmin, isActive, password
        })

        await newUser.save()

    } catch (error) {
        console.error(error)
        throw new Error("Failed to create new user")
    }

}