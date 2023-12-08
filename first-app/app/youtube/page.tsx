"use client"
import { useRouter } from "next/navigation"

const Youtube = () => {
    const router = useRouter()
    function handleClick(){
        router.push("/")
    }

    return (
        <>
            <p>Youtube page</p>
            <button onClick={handleClick}>Back home</button>
        </>
    )
}
export default Youtube