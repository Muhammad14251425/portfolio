'use client'
import Image from 'next/image'
import {motion} from "framer-motion" 

type Props = {}

export default function Projects({ }: Props) {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration: 2.5}}
        className='h-screen relative flex flex-col justify-evenly mx-auto z-0 items-center overflow-hidden text-left md:flex-row max-w-full'>
            <h3 className='uppercase tracking-[20px] absolute top-[67px] text-2xl text-gray-500'>Projects</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80'>
                {
                    projects.map((project, index) => (
                        <div key={index} className='w-screen flex-shrink-0 snap-center flex flex-col gap-y-5 items-center justify-center p-20 md:p-44 h-screen'>
                            <motion.div 
                            initial={{y:-300,opacity:0}}
                            transition={{duration:1.2}}
                            whileInView={{ opacity:1, y:0}}
                            viewport={{once:true}}
                            >
                            <Image src="https://cdn.sanity.io/images/ltuexkre/production/af7ca99b5a796d0698cf9121a4a0795b5022b6be-666x375.png" height={132} width={132} alt='img'
                                className='w-[440px] h-72 object-contain ' />
                                </motion.div>
                            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                                <h4 className='text-4xl font-semibold text-center'>
                                    <span className='underline decoration-red-500/50' >Case Study {index + 1} of {projects.length}:</span>
                                    <span> UPS clone</span> 
                                </h4>
                                <p className='text-lg text-center md:text-left'>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit perferendis nihil? Odio excepturi facilis, a vel quos rem ipsa repellat tenetur nisi expedita cupiditate et, soluta numquam est assumenda  a vel quos rem ipsa repellat tenetur nisi expedita cupiditate et.
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='w-full absolute bg-red-500/15 left-0 h-[500px] top-[30%] -skew-y-12' />
        </motion.div>
    )
}