import React from 'react'
import { motion } from 'framer-motion'
import { NavBar, Footer } from './../../components/index'

function About() {

    return (
        <motion.div
            animate={{opacity: [0, 1]}}
            transition={{duration: 1}}
            >
            <NavBar />
            <div className='flex justify-center items-center w-screen h-screen bg-light z-100'>
                <div className=''>
                    <h1 className='font-seasons text-orange tracking-widest text-5xl'>ABOUT US</h1>
                    <p className='font-seasons text-orange'>Sparking imagination...</p>
                </div>
            </div>
            <div className='bg-red text-light w-screen h-screen flex justify-center items-center'>
                <div className='p-3 w-3/4'>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                    >
                        A lot of information about this site.
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                        A lot of information about this site
                    </motion.p>
                </div>
            </div>
            <Footer />
        </motion.div>
  )
}

export default About