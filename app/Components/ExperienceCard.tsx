import Image from 'next/image'
import { motion } from 'framer-motion'

type Props = {}

const ExperienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
    md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 opacity-50 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.div
        initial={{y:-100, opacity:0}}
        transition={{duration:1.2}}
        whileInView={{opacity:1,y:0}}
        whileHover={{scale:1.1,transition: { duration: 0.1 }}}
        viewport={{once:true}}
        >
        <Image 
        height={132}
        width={132}
        className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        src="/my colledge image.jpeg" alt="pic" />
        </motion.div>

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light text-center'>Nextjs Developer</h4>
            <p className='font-bold text-2xl my-2 text-center'>Nextjs</p>
            <div className='flex gap-x-2 my-2 justify-center'>
            <Image 
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt='languages'
            height={132}
            width={132}
            className='h-10 w-10 rounded-full'
            />
            <Image 
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt='languages'
            height={132}
            width={132}
            className='h-10 w-10 rounded-full'
            />
            <Image 
            src="https://cdn.sanity.io/images/ltuexkre/production/2a67945990f9c2ef568cf7e8483c1a8174556463-500x500.png"
            alt='languages'
            height={132}
            width={132}
            className='h-10 w-10 rounded-full'
            />
            </div>
            <p className='uppercase py-5 text-gray-300 text-center'>Wed dec 30 2020-present</p>
            <div className='h-[200px] snap-y snap-mandatory '>
            <ul className='list-disc space-y-4 text-lg px-5 overflow-y-scroll h-[200px] scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80'>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
                <li>Summary Points Summary Points Summary Points Summary Points </li>
            </ul>
            </div>
        </div>
    </article>
  )
}

export default ExperienceCard