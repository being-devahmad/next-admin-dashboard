import Image from "next/image"
import Link from "next/link"
import styles from './page.module.css'
import { fetchProducts } from "@/lib/utils/products"
import { deleteProduct } from "@/lib/actions/product"

const ProductPage = async () => {
  const products = await fetchProducts()
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
          {
            products.map((product) => {
              const { id, title, desc, price, stock, createdAt , img } = product
              return (
                <>
                  <tr key={id}>
                    <td>
                      <div className={styles.product}>
                        <Image src={img} height={40} width={40} className={styles.productImage} />
                        {title}
                      </div>
                    </td>
                    <td>
                      {desc}
                    </td>
                    <td>${price} </td>
                    <td>{createdAt?.toString().slice(4, 16)}</td>
                    <td>{stock}</td>
                    <td className={styles.actions}>
                      <Link href={`/dashboard/products/${id}`}>
                        <button className={`${styles.button} ${styles.view}`}>View</button>
                      </Link>
                      <form action={deleteProduct}>
                        <input type="hidden" name="id" value={id} />
                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                      </form>
                    </td>
                  </tr>
                </>
              )
            })
          }

        </tbody>
      </table>
    </div>
  )
}

export default ProductPage
