import React from 'react'
import Header from './Components/Header'
import Hero from './Components/Hero'
import About from './Components/About'
import WorkExperience from './Components/WorkExperience'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import ContactMe from './Components/ContactMe'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { Experience, PageInfo, Project, Skille, Social } from '@/typings'

type Props = {

}
export const revalidate = 30;
export const dynamic = "force-static"
function page({}: Props) {
  return (
    <div className='h-screen text-white snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-red-500/80'>
      <Header />
      <section id='hero' className='snap-start'>
        <Hero />
      </section>
      <section id='about' className='snap-center' >
        <About />
      </section>
      <section id='experience' className='snap-center' >
        <WorkExperience />
      </section>
      <section id='skills' className='snap-start' >
        <Skills  />
      </section>
      <section id='projects' className='snap-start' >
        <Projects />
      </section>
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer' >
          <div className='flex items-center justify-center'>
            <Image 
            src="/my colledge image.jpeg" 
            alt='my pic'
            width={132}
            height={132}
            className='h-10 w-10 rounded-full filter grayscale hover:grayscale-0 object-contain' />
          </div>

        </footer>
      </Link>
    </div>
  )
}

export default page

