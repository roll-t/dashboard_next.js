import React from 'react';
import styles from '@/app/ui/users/users.module.css'
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/pagination/pagination';
import Link from 'next/link';
import { fetchUser } from './../../lib/data';
import { disconnect } from 'process';
import { deleteUser } from '@/app/lib/actions';

const UserPage = async ({ searchParams }: any) => {

    const q = searchParams?.q || "";

    const page = searchParams?.page || 1;

    const { count, users } = await fetchUser(q, page);

    return (
        <div className={styles.container}>
            <div className={styles.head}>
                <Search />
                <button className={styles.btnAdd}>
                    <Link href={'/dashboard/users/add'}>
                        Add New
                    </Link>
                </button>
            </div>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Created at</td>
                        <td>Role</td>
                        <td>Active</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => (
                        <tr key={user._id}>
                            <td className={styles.userName}>
                                <img src={user.img || '/user.png'} alt="" width={50} height={50} />
                                {user.userName}
                            </td>
                            <td>{user.email}</td>
                            <td>{user.createdAt?.toString().slice(4, 16) || 'no time'}</td>
                            <td>{user.isAdmin ? "Admin" : "Client"}</td>
                            <td>{user.isActive ? "Active" : "Passive"}</td>
                            <td>
                                <div className={styles.btns}>
                                    <Link href={`/dashboard/users/${user._id}`}>
                                        <button className={`${styles.button} ${styles.view}`}>
                                            View
                                        </button>
                                    </Link>
                                    <form action={deleteUser}>
                                        <input type="hidden" value={user._id} name="_id" />
                                        <button className={`${styles.button} ${styles.delete}`}>Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <Pagination count={count} />
        </div>
    );
};

export default UserPage;