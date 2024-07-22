import React from 'react'
import aboutHero from '/navlinksHeroImages/aboutPageImgs/aboutHero.jpg'
import aboutImg from '/navlinksHeroImages/aboutPageImgs/aboutPageImg.jpg'

function About() {
    return (<>
        <div className='pt-[9.9vh] md:pt-[12.5vh] relative '>
            <div className='h-[40vh] flex flex-col justify-end text-white px-[10vw] pb-10 bg-[#04041b78]'>
                <h3 className='text-white text-2xl'>About Us</h3>
                <h1 className='text-5xl font-medium'>About Us - Who We Are?</h1>
            </div>
            <img src={aboutHero} className='w-full h-full bg-center absolute object-cover top-[0] z-[-1]' alt="" />
        </div>
        <div className='max-w-[80%] my-16 mx-auto flex max-md:flex-col justify-between items-center'>
            <div className='w-[45%] max-md:w-full flex flex-col'>
                <h3 className='text-4xl font-medium mb-2'>Our Agency Story</h3>
                <p className='text-[1.3rem] text-gray-700 mb-7'>Check out our company story and work process</p>
                <p className='text-lg leading-[1.6em]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore  magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. <br /><br />     llamco laboris nisi ut aliquip ex ea commodo consequat.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            </div>
            <img src={aboutImg} className='max-md:w-full max-md:mt-8 w-[50%] h-fit' alt="" />
        </div>
    </>)
}

export default About