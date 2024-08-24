import { fetchProduct } from '@/lib/utils/products'
import styles from './page.module.css'
import Image from 'next/image'
import { updateProduct } from '@/lib/actions/product'

const SingleProduct = async ({ params }) => {

    const { id } = params
    const product = await fetchProduct(id)
    console.log("product-->", product)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={product.img} alt="" width={250} height={250} />
                </div>
                {product.title}
            </div>
            <div className={styles.formContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type='hidden' name='id' value={product.id} />
                    <label>Title</label>
                    <input type='text' name='title' placeholder={product.title} />
                    <label>Price</label>
                    <input type='number' name='price' placeholder={`$ ${product.price}`} />
                    <label>Stock</label>
                    <input type='number' name='stock' placeholder={product.stock} />
                    <label>Color</label>
                    <input type='text' name='color' placeholder={product.color} />
                    <label>Size</label>
                    <input type='text' name='size' placeholder={product.size} />
                    <label>Category</label>
                    <select name='category' id='category'>
                        <option value='category'>Choose Category</option>
                        <option value='kitchen'>Kitchen</option>
                        <option value='computer' >Computer</option>
                    </select>
                    <label> Description </label>
                    <textarea name='description' id='description'>{product.description}</textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProduct
