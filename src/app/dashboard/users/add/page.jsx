import { createUser } from '@/lib/actions/user'
import styles from './page.module.css'

const AddUserPage = () => {
    return (
        <div className={styles.container}>
            <form action={createUser} className={styles.form}>
                <input type="text" placeholder="username" name="username" required />
                <input type="email" placeholder="email" name="email" required />
                <input type="password" placeholder="password" name="password" required />
                <input type="phone" placeholder="phone" name="phone" />
                <select name="isAdmin" id="isAdmin">
                    <option value={false}>Is Admin?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name="isActive" id="isActive">
                    <option value={false}>Is Active?</option>
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <textarea
                    name="address"
                    id="address"
                    placeholder="Address"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddUserPage
