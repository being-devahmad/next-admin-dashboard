'use server'

import { dbConnext } from '../db/dbConnect';
import { redirect } from 'next/navigation';
import { Product } from '../models/productModel';
import { revalidatePath } from 'next/cache';

export const addProduct = async (formData) => {
    const { title, desc, price, img, stock, color, size } = Object.fromEntries(formData)
    try {
        dbConnext();

        const newProduct = new Product({
            title, desc, price, img, stock, color, size
        })

        await newProduct.save()

    } catch (error) {
        console.log(error)
        throw new Error("Failed to add new product")
    }

    revalidatePath('/dashboard', 'layout')
    redirect('http://localhost:3000/dashboard/products')


}

export const deleteProduct = async (formData) => {
    const { id } = Object.fromEntries(formData)

    try {
        dbConnext()
        await Product.findByIdAndDelete(id)
    } catch (error) {
        console.log("Failed to delete" , error)
    }

    revalidatePath('/dashboard/products')

}