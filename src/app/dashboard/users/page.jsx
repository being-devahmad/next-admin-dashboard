import Image from "next/image"
import styles from './page.module.css'
import Link from "next/link"
import { fetchUsers } from "@/lib/utils/users"
import { deleteUser } from "@/lib/actions/user"

export const metadata = {
  title: 'Dashboard | User',
  description: 'All Users '
}


const UserPage = async () => {

  const users = await fetchUsers()

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

          {users.map((user, index) => {
            const { id, username, email, img, address, phone, isAdmin, isActive, createdAt } = user
            return (
              <tr key={id || index}>
                <td>
                  <div className={styles.user}>
                    <Image src={img}
                      width={40}
                      height={40}
                      className={styles.userImage} />
                    {username}
                  </div>

                </td>
                <td>{email}</td>
                <td>{createdAt ? createdAt?.toString().slice(4, 16) : ""}</td>
                <td>{isAdmin ? "Admin" : "Not Admin"} </td>
                <td>{isActive ? "Online" : "Offline"}</td>
                <td className={styles.actions}>
                  <Link href={`/dashboard/users/${id}`}>
                    <button className={`${styles.button} ${styles.view}`}>View</button>
                  </Link>
                  <form action={deleteUser}>
                    <input type="hidden" name="id" value={id} />
                    <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                  </form>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default UserPage
