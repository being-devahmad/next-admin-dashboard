// fetching products from database

import { dbConnext } from "../db/dbConnect"
import { Product } from "../models/productModel"

export const fetchProducts = async () => {
    try {
        dbConnext()
        const products = await Product.find()
        return products

    } catch (error) {
        console.log(error)
        throw new Error("Failed to fetch all products")
    }
}