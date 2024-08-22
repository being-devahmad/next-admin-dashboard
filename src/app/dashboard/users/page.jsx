import Image from "next/image"
import styles from './page.module.css'
import Link from "next/link"


const UserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image src="/avatar.svg"
                  width={40}
                  height={40}
                  className={styles.userImage} />
                John Doe
              </div>

            </td>
            <td>john@gmail.com</td>
            <td>22.08.2024
              {/* {user.createdAt?.toString().slice(4, 16)} */}
            </td>
            <td>Admin
              {/* {user.isAdmin ? "Admin" : "Not Admin"} */}
            </td>
            <td>Online
              {/* {user.isActive ? "online" : "offline"} */}
            </td>
            <td className={styles.actions}>
              <Link href={`/dashboard/users/1`}>
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

export default UserPage
