import styles from './page.module.css'
import Image from 'next/image'

const singleProduct = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.svg" alt="" width={250} height={250} />
                </div>
                Laptop
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <label>Title</label>
                    <input type='text' name='title' placeholder='John Cena' />
                    <label>Price</label>
                    <input type='number' name='price' placeholder='$999' />
                    <label>Stock</label>
                    <input type='number' name='stock' placeholder='99' />
                    <label>Color</label>
                    <input type='text' name='color' placeholder='Black' />
                    <label>Size</label>
                    <input type='text' name='size' placeholder='14' />
                    <label>Category</label>
                    <select name='category' id='category'>
                        <option value='kitchen'>Kitchen</option>
                        <option value='computer'>Computer</option>
                    </select>
                    <label> Description </label>
                    <textarea name='description' id='description'></textarea>
                    <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default singleProduct
