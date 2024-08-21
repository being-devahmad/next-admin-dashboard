import Navbar from '../Navbar/Navbar'
import Sidebar from '../sidebar/sidebar'
import styles from './dashboard.module.css'

const DashboardComponent = () => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar/>
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default DashboardComponent