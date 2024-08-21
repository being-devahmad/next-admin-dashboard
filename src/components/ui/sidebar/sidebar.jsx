import Image from 'next/image'
import React from 'react'
import classes from "./sidebar.module.css"
import {
    MdAttachMoney,
    MdDashboard,
    MdShoppingBag,
    MdSupervisedUserCircle
} from "react-icons/md";
import MenuLink from './menuLink/menuLink';

const menuItems = [
    {
        title: "Users",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "Users",
                path: "/dashboard/users",
                icon: <MdSupervisedUserCircle />,
            },
            {
                title: "Products",
                path: "/dashboard/products",
                icon: <MdShoppingBag />,
            },
            {
                title: "Transictions",
                path: "/dashboard/transactions",
                icon: <MdAttachMoney />
            },
        ],
    },
]

const Sidebar = () => {
    return (
        <div className={classes.container}>
            <div className={classes.user}>
                <Image
                    className={classes.userImage}
                    src="/avatar.svg"
                    alt="user image"
                    width={50}
                    height={50} />
                <div className={classes.userDetail}>
                    <span className={classes.username}>
                        Hello
                    </span>
                    <span className={classes.userTitle}>
                        World
                    </span>
                </div>
            </div>
            <ul className={classes.list}>
                {menuItems.map((item) => (
                    <li key={item.title}>
                        <span className={classes.item}>{item.title}</span>
                        {
                            item.list.map((i) => (
                                <MenuLink item={i} key={i.title} />
                            ))
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Sidebar