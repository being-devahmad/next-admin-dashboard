'use server'

import { revalidatePath } from 'next/cache';
import { dbConnext } from '../db/dbConnect';
import { User } from '../models/userModel';
import bcrypt from 'bcrypt'
import { redirect } from 'next/navigation';

export const createUser = async (formData) => {
    const { id, username, password, email, phone, isAdmin, isActive } = Object.fromEntries(formData)
    try {
        dbConnext();

        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            username, email, phone, isAdmin, isActive, password: hashedPassword
        })

        await newUser.save()

    } catch (error) {
        console.log(error)
        throw new Error("Failed to create new user")
    }

    revalidatePath('/dashboard', 'layout')
    redirect('http://localhost:3000/dashboard/users')


}

export const deleteUser = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        dbConnext()
        await User.findByIdAndDelete(id)
    } catch (error) {
        console.log("Failed to delete", error)
    }

    revalidatePath('/dashboard/users')

}

export const updateUser = async (formData) => {
    const { id, username, password, email, phone, isAdmin, isActive } = Object.fromEntries(formData)

    dbConnext()

    try {

        // password hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const updateUserDetails = {
            username, email, phone, isAdmin, isActive, password: hashedPassword
        }

        Object.keys(updateUserDetails).forEach((key) => {
            if (updateUserDetails[key] === "" || updateUserDetails[key] === undefined) {
                delete updateUserDetails[key];
            }
        });

        await User.findByIdAndUpdate(id, updateUserDetails)

    } catch (error) {
        console.log(error)
        throw new Error("Failed to update user")
    }

    revalidatePath('/dashboard/users')

    redirect('/dashboard/users')

}