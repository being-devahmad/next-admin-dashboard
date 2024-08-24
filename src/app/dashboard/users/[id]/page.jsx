import styles from './page.module.css'
import Image from 'next/image'

const SingleUserPage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <Image src="/avatar.svg" alt="" width={250} height={250} className={styles.profileImg} />
                </div>
                {/* {user.username} */}
                John Doe
            </div>
            <div className={styles.formContainer}>
                <form className={styles.form}>
                    <input type='hidden' name='id' />
                    <label>Username</label>
                    <input type="text" name="username" placeholder={"username"} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={"email"} />
                    <label>Password</label>
                    <input type="password" name="password" placeholder="password" />
                    <label>Phone</label>
                    <input type="phone" name="phone" placeholder={"phone"} />
                    <label>Address</label>
                    <textarea name="address" id="" placeholder={"address"}></textarea>
                    <label>is Admin?</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <label>Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value={true} >Yes</option>
                        <option value={false}>No</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage
