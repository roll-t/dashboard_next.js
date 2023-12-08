import { User,Products } from "./models";
import { connectToDB } from './utils';

export const fetchUser = async (q,page) => {
    const regex= new RegExp(q,'i');
    const ITEM_PER_PAGE= 2
    try {
        // Kết nối vào cơ sở dữ liệu trước
        await connectToDB();
        // Truy vấn cơ sở dữ liệu sử dụng await
        const count = await User.find({userName:{$regex: regex}}).count();
        const users = await User.find({userName:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,users};
    } catch (error) {
        console.error(error);
        throw new Error('Error when using fetchUser');
    }
}


export const fetchProduct = async (q,page) => {
    const regex= new RegExp(q,'i');
    const ITEM_PER_PAGE= 2
    try {
        // Kết nối vào cơ sở dữ liệu trước
        await connectToDB();
        // Truy vấn cơ sở dữ liệu sử dụng await
        const count = await Products.find({title:{$regex: regex}}).count();
        const products = await Products.find({title:{$regex: regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE * (page-1));
        return {count,products};
    } catch (error) {
        console.error(error);
        throw new Error('Error when using fetchUser');
    }
}

export const  fetchSingleProduct = async (_id)=>{
    try{
        await connectToDB()
        return await Products.findById(id)
    }catch(err){
        throw new Error("loi tua lua")
    }
}

export const  fetchSingleUser = async (id)=>{
    try{
        await connectToDB()
        const user = await User.findById(id)
        return user
    }catch(err){
        throw new Error("loi tua lua")
    }
}

