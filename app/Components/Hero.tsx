'use client'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: ["Hi, The Name's Muhammad Fawwad", "Next.js Frontend Developer", "Designer","Responsiveness Master"],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <div className="h-screen flex flex-col gap-y-8 items-center justify-center text-center overflow-hidden z-20">
            <BackgroundCircles />
            <Image
                src="/my colledge image.jpeg"
                alt="mypic"
                className="relative rounded-full h-32 w-32 mx-auto object-cover"
                width={128}
                height={128}
            />
            <div className="z-20">
                <p className="uppercase tracking-[15px]  relative pb-2">website developer</p>
            <h1  className="text-white text-4xl lg:text-6xl px-10 font-semibold ">
                <span>{text}</span>
                <Cursor cursorColor="#F7AB0A"/>
            </h1>
            <div className="pt-5">
                <Link href="#about"><button className="heroButton">About</button></Link>
                <Link href="#experience"><button className="heroButton">Experience</button></Link>
                <Link href="#skills"><button className="heroButton">Skills</button></Link>
                <Link href="#projects"><button className="heroButton">Projects</button></Link>
                
                
                
                
            </div>
            </div>
        </div>
    )
}

export default Hero