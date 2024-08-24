import { fetchUser } from '@/lib/utils/users'
import styles from './page.module.css'
import Image from 'next/image'
import { updateUser } from '@/lib/actions/user'

const SingleUserPage = async ({ params }) => {

    const { id } = params
    console.log("id", id)
    const user = await fetchUser(id)
    console.log("user-->", user)

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src={user.img} alt="" width={250} height={250} className={styles.profileImg} />
                </div>
                {user.username}
            </div>
            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type='hidden' name='id' value={user.id} />
                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder='password' />
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder={user.phone} />
                    <label>Address</label>
                    <textarea name="address">{user.address}</textarea>
                    <label>is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true} selected={user.isAdmin}>Yes</option>
                        <option value={false} selected={!user.isAdmin}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true} selected={user.isActive}>Yes</option>
                        <option value={false} selected={! user.isActive}>No</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage
