'use client'
import { motion } from "framer-motion"
import Skill from "./Skill"
import { Skille } from "@/typings"
import Image from "next/image"
import { log } from "console"
import { urlFor } from "@/sanity"
type Iprops = {
  skills: Skille[]
}

export const dynamic = 'force-dynamic';
const SkillsComponent = ({ skills }: Iprops) => {



  return (
    <div>
      <motion.div
    
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2.5 }}
      className='h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] p-2 xl:px-10 min-h-screen justify-center
      xl:space-y-0 mx-auto items-center overflow-hidden'>
        <h3 className='uppercase tracking-[20px] absolute top-[67px] text-2xl text-gray-500'>Skills</h3>
        <h3 className='absolute top-28  uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for Current proficiency </h3>
        <div     className="grid grid-cols-3 md:grid-cols-4 gap-5 ">
      {
        skills.map((item, index) => (

              <Skill key={index} progress={item.progress} imageurl={urlFor(item.image).url()} />
              ))
            }
            </div>
      </motion.div>
    </div>
  )
}

export default SkillsComponent