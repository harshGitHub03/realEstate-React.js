import React from 'react'
import pricingHeroImg from '/navlinksHeroImages/pricingHeroImg.jpg'
import PricingComp from '../Components/PricingComp'
function Pricing() {
    return (
        <>
            <div className='pt-[9.9vh] md:pt-[12.5vh] relative '>
                <div className='h-[40vh] flex flex-col justify-end text-white px-[10vw] pb-10 bg-[#04041b78]'>
                    <h3 className='text-white text-2xl'>30 days money back guarantee</h3>
                    <h1 className='text-4xl md:text-5xl font-medium'>No Extra Fees. Friendly Support</h1>
                </div>
                <img src={pricingHeroImg} className='w-full h-full bg-center absolute object-cover top-[0] z-[-1]' alt="" />
            </div>
            <PricingComp />
        </>
    )
}

export default Pricing