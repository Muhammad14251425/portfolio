'use client'
import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'
type Props = {}

function Header({ }: Props) {
    return (
        <header className='flex justify-between sticky top-0 max-w-7xl p-4 mx-auto z-20'>
            <motion.div
                className='flex items-center'
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5
                }}>
                <SocialIcon url='https://www.youtube.com' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://facebook.com' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.instagram.com' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.linkedin.com' fgColor='gray' bgColor='transparent' />
                <SocialIcon url='https://www.twitter.com' fgColor='gray' bgColor='transparent' />
            </motion.div>
            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.5
                }} >
                <div className='cursor-pointer flex items-center' >
               
                        <SocialIcon  className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
                 
                    <Link href="#contact">
                        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>get in touch</p>
                    </Link>
                </div>
            </motion.div>
        </header>
    )
}

export default Header

