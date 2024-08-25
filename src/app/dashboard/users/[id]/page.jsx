import { fetchUser } from '@/lib/utils/users'
import styles from './page.module.css'
import Image from 'next/image'
import { updateUser } from '@/lib/actions/user'


export async function generateMetadata({ params }) {
    const id = params.id;
    let user;

    try {
        user = await fetchUser(id);
    } catch (error) {
        console.error("Error fetching user:", error);
        return {
            title: "User not found",
            openGraph: {
                title: "User not found",
                description: "The user you are looking for does not exist.",
                url: `https://localhost:3000/dashboard/users/${id}`,  
                images: [
                    {
                        url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwRPWpO-12m19irKlg8znjldmcZs5PO97B6A&s', 
                        width: 800,
                        height: 600,
                        alt: 'Default image'
                    }
                ],
            },
        };
    }

    return {
        title: user.username,
        description: `Profile page for ${user.username}`,
        openGraph: {
            title: user.username,
            description: `View the profile of ${user.username}.`,
            url: `https://localhost:3000/dashboard/users/${id}`,  
            images: [
                {
                    url: user.img,  
                    width: 800,
                    height: 600,
                    alt: `${user.username}'s profile picture`
                }
            ],
        },
    };
}




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
                        <option value={false} selected={!user.isActive}>No</option>
                    </select>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage
