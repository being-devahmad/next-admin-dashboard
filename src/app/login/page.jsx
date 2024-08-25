import styles from './page.module.css'

export const metadata = {
    title: 'login',
    description: 'Welcome to login page'
}

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <h1>Login</h1>
                <input type='text' placeholder='username' name='username' />
                <input type='password' placeholder='password' name='password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginPage
