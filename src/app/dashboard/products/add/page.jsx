import { addProduct } from "@/lib/actions/product"
import styles from "./page.module.css"

export const metadata = {
    title: 'Dashboard | Add New Product',
    description: 'All New Product'
}

const AddProductPage = () => {
    return (
        <div className={styles.container}>
            <form action={addProduct} className={styles.form} >
                <input type='text' placeholder='title' name='title' required />
                <select name='category' id='category'>
                    <option value='general'>Choose a Category</option>
                    <option value='kitchen'>Kitchen</option>
                    <option value='phone'>Phone</option>
                    <option value='computer'>Computer</option>
                </select>
                <input type='number' placeholder='price' name='price' required />
                <input type='number' placeholder='stock' name='stock' required />
                <input type='text' placeholder='color' name='color' />
                <input type='text' placeholder='size' name='size' />

                <textarea name='desc' id='desc' placeholder='Description'></textarea>
                <button type='Submit'>Submit</button>
            </form>

        </div>
    )
}

export default AddProductPage
