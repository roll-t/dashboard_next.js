import React from 'react';
import styles from '@/app/ui/products/products.module.css'
import Search from '@/app/ui/dashboard/search/search';
import Pagination from '@/app/ui/pagination/pagination';
import Link from 'next/link';
import { fetchProduct } from '@/app/lib/data';
import { deleteProduct } from '@/app/lib/actions';
const ProductPage = async ({ searchParams }: any) => {

    const q = searchParams?.q || "";

    const page = searchParams?.page || 1;

    const { count, products } = await fetchProduct(q, page)

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.head}>
                    <Search />
                    <button className={styles.btnAdd}>
                        <Link href={'/dashboard/products/add'} className='nav-link'>
                            Add New
                        </Link>
                    </button>
                </div>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Price</td>
                            <td>Created at</td>
                            <td>Stock</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {products?.map(product => (
                            <tr key={product._id}>

                                <td className={styles.product}>
                                    <img src={product.img || '/product.png'} alt="" width={50} height={50} />
                                    {product.title}
                                </td>
                                <td width={350} >
                                    <p className={styles.des}>
                                        {product.des}
                                    </p>
                                </td>
                                <td>${product.price} </td>
                                <td>{product.createdAt?.toString().slice(4, 16) || 'no time'}</td>
                                <td>{product.stock} </td>
                                <td>
                                    <div className={styles.btns}>
                                        <Link href={'/dashboard/products/1'}>
                                            <button className={`${styles.button} ${styles.view}`}>View</button>
                                        </Link>
                                        <form action={deleteProduct}>
                                            <input type="hidden" name='_id' value={product._id} />
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
        </div>
    );
};

export default ProductPage;