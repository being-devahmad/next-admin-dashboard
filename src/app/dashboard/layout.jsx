import classes from '@/components/ui/dashboard/dashboard.module.css'
import Navbar from '@/components/ui/Navbar/Navbar'
import Sidebar from '@/components/ui/sidebar/sidebar'
const layout = ({ children }) => {
    return (
        <div className={classes.container}>
            <div className={classes.menu}>
                <Sidebar />
            </div>
            <div className={classes.content}>
                <Navbar />
                {children}
            </div>
        </div>
    )
}

export default layout
