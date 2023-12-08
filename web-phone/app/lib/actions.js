'use server'
import { redirect } from 'next/navigation';
import { Products, User } from './models';
import { connectToDB } from './utils';
import bcrypt from 'bcrypt'

export const addUser = async (formData) => {

    // tao 1 cau truc de luu thong tin lay tu form user

    const { userName, email, password, phone, address, isAdmin, isActive } =
        Object.fromEntries(formData)
    try {
        connectToDB();
        // dinh dang ma hoa
        const salt = await bcrypt.genSalt(10)
        // tien hanh ma hoa
        const hasdedPassword=await bcrypt.hash(password,salt)
        const newUser = new User({
            userName, email, password:hasdedPassword, phone, address, isAdmin, isActive
        })
        await newUser.save();
    } catch (err) {
        console.log(err);
    }
    redirect('/dashboard/users')
}

export const deleteUser = async (formData) =>{
    const {_id}= Object.fromEntries(formData)
    try{
        connectToDB();
        await User.findByIdAndDelete(_id)
    } catch{
        console("loi xoa")
    }
    redirect('/dashboard/users')
}

export const addProduct = async (formData) => {

    // tao 1 cau truc de luu thong tin lay tu form user

    const { title, des, price, stock, color, size } =
        Object.fromEntries(formData)
    try {
        connectToDB();
        const newProduct = new Products({ title, des, price, stock, color, size } )
        await newProduct.save();
    } catch (err) {
        console.log(err);
    }
    redirect('/dashboard/products')
}

export const deleteProduct = async (formData) =>{
    const {_id}= Object.fromEntries(formData)
    try{
        connectToDB();
        await Products.findByIdAndDelete(_id)
    } catch{
        console("loi xoa")
    }
    redirect('/dashboard/products')
}