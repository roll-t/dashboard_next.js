
import React from 'react';
import styles from '@/app/ui/products/singleProduct/singleProduct.module.css'

const SingleProductPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <img src="/product.png" width={200} height={200} alt="" />
                <h3>Iphone</h3>
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <label htmlFor="title">Title</label>
                    <input type="text" placeholder='title' name='title' required />

                    <label htmlFor="price">Price</label>
                    <input type="number" placeholder='price' name="price" />

                    <label htmlFor="stock">Stock</label>
                    <input type="number" placeholder='stock' name="stock" />

                    <label htmlFor="color">Color</label>
                    <input type="text" placeholder='color' name="color" />

                    <label htmlFor="cat">Category</label>
                    <select name="cat" id="cat">
                        <option value='false' selected>Is Admin</option>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>

                    <label htmlFor="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        placeholder='description'>
                    </textarea>
                    <button type="submit">Update</button>
                </form>
            </div>
        </div>
    );
};

export default SingleProductPage;