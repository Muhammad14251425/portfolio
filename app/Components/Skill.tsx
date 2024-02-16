'use client'
import { urlFor } from "@/sanity"
import { Skille } from "@/typings"
import { motion } from "framer-motion"
import Image from "next/image"

type Props = {
    directionLeft?: boolean;
    imageurl: string;
    progress: number;
}

export const dynamic = 'force-dynamic';
function Skill({ directionLeft, imageurl, progress }: Props) {

    console.log(progress);
    

    return (
        <div className="group relative flex cursor-pointer">
            <motion.div
                initial={{
                    x: directionLeft ? -200 : 200,
                    opacity: 0
                }}
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, x: 0 }}
            >

                <Image

                    src={imageurl}
                    alt="sanity"
                    height={132}
                    width={132}
                    className="h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32 rounded-full border border-gray-500 object-contain filter group-hover:grayscale transition duration-300 ease-in-out"
                />

            </motion.div>
            <div

                className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white rounded-full z-0
         h-24 w-24 md:w-28 md:h-28 xl:h-32 xl:w-32">
                <div className="flex items-center justify-center h-full">

                    <p className="absolute text-3xl font-bold text-black opacity-100">{progress}</p>



                </div>
            </div>
        </div>
    )
}

export default Skill

