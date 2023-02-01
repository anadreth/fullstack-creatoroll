import React from 'react'
import Footer from '../../components/Footer/Footer'
import NavBar from './../../components/NavBar/NavBar'
function About() {
  return (
    <div>
        <NavBar />
        <div className='flex justify-center items-center w-screen h-screen bg-light z-100'>
            <div className=''>
                <h1 className='font-seasons text-orange tracking-widest text-5xl'>ABOUT US</h1>
                <p className='font-seasons text-orange'>Sparking imagination...</p>
            </div>
        </div>
        <div className='bg-red text-light w-screen h-screen flex justify-center items-center'>
            <div className='p-3 w-3/4'>
                <p>
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
                </p>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default About