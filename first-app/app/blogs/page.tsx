'use client'
import AppTable from "@/components/AppTable"
import useSWR from "swr"

const Blogs = ()=>{
    const fetcher =(url :string)=> fetch(url).then((res)=>res.json())

    const {data,error,isLoading} =useSWR( "http://localhost:8000/blogs",
    fetcher,
    {
        revalidateIfStale:false,
        revalidateOnFocus:false,
        revalidateOnReconnect:false
    })
    const sort = (data:[])=>{
        return data?.sort((a:any,b:any)=> b.id - a.id)
    }
    return (
       <AppTable
        blogs={sort(data)}
       />
    )
}
export default Blogs