import Image from 'next/image'
import React from 'react'
import classes from './transactions.module.css'

const Transactions = () => {
    return (
        <div className={classes.container}>
            <h2 className={classes.title}>Latest Transactions</h2>
            <table className={classes.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Status</td>
                        <td>Date</td>
                        <td>Amount</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className={classes.user}>
                                <Image
                                    className={classes.userImg}
                                    src={'/avatar.svg'}
                                    alt='avatar'
                                    width={40}
                                    height={40}
                                />
                                John Cena
                            </div>
                        </td>
                        <td>
                            <span className={`${classes.status} 
                            ${classes.pending}`}>
                                pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$999</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={classes.user}>
                                <Image
                                    className={classes.userImg}
                                    src={'/avatar.svg'}
                                    alt='avatar'
                                    width={40}
                                    height={40}
                                />
                                John Cena
                            </div>
                        </td>
                        <td>
                            <span className={`${classes.status} 
                            ${classes.done}`}>
                                done
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$999</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={classes.user}>
                                <Image
                                    className={classes.userImg}
                                    src={'/avatar.svg'}
                                    alt='avatar'
                                    width={40}
                                    height={40}
                                />
                                John Cena
                            </div>
                        </td>
                        <td>
                            <span className={`${classes.status} 
                            ${classes.pending}`}>
                                pending
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$999</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={classes.user}>
                                <Image
                                    className={classes.userImg}
                                    src={'/avatar.svg'}
                                    alt='avatar'
                                    width={40}
                                    height={40}
                                />
                                John Cena
                            </div>
                        </td>
                        <td>
                            <span className={`${classes.status} 
                            ${classes.cancel}`}>
                                cancel
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$999</td>
                    </tr>

                    <tr>
                        <td>
                            <div className={classes.user}>
                                <Image
                                    className={classes.userImg}
                                    src={'/avatar.svg'}
                                    alt='avatar'
                                    width={40}
                                    height={40}
                                />
                                John Cena
                            </div>
                        </td>
                        <td>
                            <span className={`${classes.status} 
                            ${classes.done}`}>
                                done
                            </span>
                        </td>
                        <td>14.02.2024</td>
                        <td>$999</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions