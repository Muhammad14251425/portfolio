'use client'
import { motion } from "framer-motion"

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:2.5}}
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center ease-out'>
        <h3 className='uppercase tracking-[20px] absolute top-[67px] text-2xl text-gray-500'>About</h3>
        <motion.img 
        initial={{x:-200,opacity:0}}
        whileInView={{x:0, opacity:1}}
        // viewport={{once:true}}
        transition={{duration:1.2}}
        src="/my colledge image.jpeg"
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
        />
        <div className="space-y-6 md:space-y-10 px-0 md:px-10">
            <h4 className="text-2xl md:text-4xl font-semibold">Here is a <span className="underline decoration-red-500">little</span> background</h4>
            <p className="text-xs md:text-sm">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt culpa eos laudantium corporis quae magnam ipsam, maiores impedit eveniet odio temporibus eum consequuntur modi. Vero consequuntur doloribus impedit ad deserunt?
                Maxime minima nostrum voluptatibus. Quia sequi, voluptates ullam officia,  reprehenderit nobis necessitatibus porro reiciendis! Quod tempora neque aspernatur, reprehenderit nobis necessitatibus porro reiciendis! Quod tempora neque aspernatur, quas tempore nemo dignissimos, quod placeat expedita quae autem alias corrupti nihil dolorum debitis? Atque exercitationem recusandae accusamus, rerum at provident?
                 reprehenderit nobis necessitatibus porro reiciendis! Quod tempora neque aspernatur, atque nam, expedita ab unde architecto alias necessitatibus veniam.
                
               
            </p>
        </div>
    </motion.div>
  )
}

export default About