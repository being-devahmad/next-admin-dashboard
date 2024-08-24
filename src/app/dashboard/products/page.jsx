import Image from "next/image"
import Link from "next/link"
import styles from './page.module.css'

const ProductPage = async () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Createt At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/avatar.svg" height={40} width={40} className={styles.productImage} />
                {/* {product.title} */}
                Pixel 4a5g
              </div>
            </td>
            <td>
              Description
              {/* {product.desc} */}
            </td>
            <td>$100
              {/* {product.price} */}
            </td>
            <td>24.8.24
              {/* {product.cratedAt?.toString().slice(4, 16)} */}
            </td>
            <td>out of stock
              {/* {product.stock} */}
            </td>
            <td className={styles.actions}>
              <Link href={`/dashboard/products/1`}>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <form>
                <input type="hidden" name="id" />
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </form>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default ProductPage
