import React from 'react'
import servicesPageImg from '/navlinksHeroImages/servicesHero.jpg'

import ServicesComp from '../Components/ServicesComp'
function Services() {
    return (<>
        {/* heroSection */}
        <div className='pt-[9.9vh] md:pt-[12.5vh] relative '>
            <div className='h-[40vh] flex flex-col justify-end text-white px-[10vw] pb-10 bg-[#04041b78]'>
                <h3 className='text-white text-2xl'>Services</h3>
                <h1 className='text-5xl font-medium'>Services - All Services</h1>
            </div>
            <img src={servicesPageImg} className='w-full h-full bg-center absolute object-cover top-[0] z-[-1]' alt="" />
        </div>

        <ServicesComp />

    </>)
}

export default Services