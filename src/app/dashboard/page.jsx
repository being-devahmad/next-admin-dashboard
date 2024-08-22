import Transactions from "./transactions/page";
import classes from "@/components/ui/dashboard/dashboard.module.css"

export default function Dashboard() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.main}>
                <Transactions />
            </div>
        </div>
    )
}