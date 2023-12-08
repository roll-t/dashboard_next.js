import Link from "next/link";
const Header =()=>{
    return(
        <header className='flex items-center justify-between'>
        <Link className='text-primary font-bold text-4xl' href="#">
            ST PIZZA</Link>
        <nav className='flex gap-8 text-gray-500 items-center font-semibold'>
            <Link href={''} >Home</Link>
            <Link href={''} >Menu</Link>
            <Link href={''} >About</Link>
            <Link href={''} >Contact</Link>
            <Link href={''} className='bg-primary text-white rounded-full px-8 py-2 '>Login</Link>
        </nav>
    </header>
    )
}
export default Header;