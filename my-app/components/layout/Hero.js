"use client"
import Link from "next/link";
import Image from "next/image"
import Right from '@/components/icons/Right'
import '../css/style.css'
const Hero = () => {
    return (
        <section className="grid grid-cols-2 ">
            <div>
                <h1 className="text-4xl font-semibold">
                    Everything is better with Pizza
                </h1>
                <p className="mt-4 text-gray-500">
                    pizza is missing piece that makes every day complete, a simple
                    yet delicious in life
                </p>
                <div className="flex gap-8">
                    <button className="btn">
                        Order Now
                        <Right/>
                        </button>
                    <button  className="btn">Learn Modde</button>
                </div>
            </div>

            <div className="w-full h-80 relative">
                <Image src={"/image/i-3.png"}
                    alt={'pizza'}
                    objectFit="contain"
                    className="absolute right-0 bottom-0 "
                    layout={'fill'} />
            </div>
        </section>
    )
}
export default Hero;