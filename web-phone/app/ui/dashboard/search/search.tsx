"use client"

import React from 'react';
import styles from './search.module.css'
import {
    MdOutlineSearch
} from "react-icons/md";
import { usePathname, useSearchParams,useRouter} from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = () => {
    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname=usePathname()

    const handleSearch = useDebouncedCallback( (e:any)=>{
        const params = new URLSearchParams(searchParams)
        if(e.target.value){
            e.target.value.length > 2 && params.set("q",e.target.value)
        }else{
            params.delete("q")
        }

        replace(`${pathname}?${params}`)
    },300)

    return (
        <div className={styles.search}>
            <MdOutlineSearch
                size={20}
            />
            <input type="text" placeholder='Search...' className={styles.input} onChange={(e)=>handleSearch(e)}/>
        </div>
    );
};

export default Search;