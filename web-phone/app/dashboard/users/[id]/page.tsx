
import React from 'react';
import styles from '@/app/ui/users/singleUser/singleUser.module.css'
import { fetchSingleUser } from '@/app/lib/data';

const SingleUserPage = async ({params}:any) => {
    const {id} = params
    const user= await fetchSingleUser(id);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <img src={user.img || '/user.png'} width={200} height={200} alt="" />
                <h3>{user?.userName || "hello"}</h3>
            </div>
            <div className={styles.formContainer}>  
                <form action="" className={styles.form}>
                    <label htmlFor="username">Username</label>
                    <input type="text" placeholder='username' value={user.userName} name='username' required />

                    <label htmlFor="email">Email</label>
                    <input type="mail" placeholder='email' value={user.email} name="email" />

                    <label htmlFor="password">Password</label>
                    <input type="password" placeholder='password' value={user.password} name="password" />

                    <label htmlFor="phone">Phone</label>
                    <input type="number" placeholder='phone' value={user.phone} name="phone" />


                    <label htmlFor="address">Address</label>
                    <textarea
                        value={user.address} 
                        name="address"
                        id="address"
                        placeholder='Address'>
                    </textarea>

                    <label htmlFor="isAdmin">Is Admin</label>
                    <select name="isAdmin" id="isAdmin">
                        <option value="true" selected={user.isAdmin}>Yes</option>
                        <option value="false" selected={!user.isAdmin}>No</option>
                    </select>

                    <label htmlFor="isActive">Is Active</label>
                    <select name="isActive" id="isActive">
                        <option value="true" selected={user.isActive}>Yes</option>
                        <option value="false" selected={!user.isActive}>No</option>
                    </select>

                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleUserPage;