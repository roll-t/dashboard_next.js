
import React from 'react';
import styles from './transactions.module.css'
const Transactions = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
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
                            <div className={styles.user}>
                                <img src="/user.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImg} alt="" />
                                Roll Tecry
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.done} ${styles.status}`}>done</span>
                        </td>
                        <td>
                            14.02.2024
                        </td>
                        <td>
                            $3.200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <img src="/user.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImg} alt="" />
                                Roll Tecry
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.cancel} ${styles.status}`}>cancel</span>
                        </td>
                        <td>
                            14.02.2024
                        </td>
                        <td>
                            $3.200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <img src="/user.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImg} alt="" />
                                Roll Tecry
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.pending} ${styles.status}`}>Pending</span>
                        </td>
                        <td>
                            14.02.2024
                        </td>
                        <td>
                            $3.200
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className={styles.user}>
                                <img src="/user.png"
                                    width={40}
                                    height={40}
                                    className={styles.userImg} alt="" />
                                Roll Tecry
                            </div>
                        </td>
                        <td>
                            <span className={`${styles.pending} ${styles.status}`}>Pending</span>
                        </td>
                        <td>
                            14.02.2024
                        </td>
                        <td>
                            $3.200
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Transactions;