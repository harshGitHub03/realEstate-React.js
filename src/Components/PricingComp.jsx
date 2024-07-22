import React from 'react'

function PricingComp() {
    return (<div className='my-10 mb-16 px-[9vw] flex flex-col gap-12 '>
        <div className='flex flex-col items-center gap-2 text-center'>
            <h2 className='text-4xl md:text-[2.7rem] lg:text-5xl text-[#2d3954] font-semibold'>Pricing Models</h2>
            <p className='text-[#72809d] text-lg w-full md:w-2/3 lg:w-[43%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit ratione quia iust voluptates dolore.</p>
        </div>

        <div className='flex flex-wrap lg:flex-nowrap w-full justify-between items-center gap-6 gap-y-10 md:gap-5'>
            <div className='w-full md:w-2/5  lg:w-fit h-fit shadow-xl hover:shadow-2xl flex flex-col items-center gap-4 py-10 px-8 rounded-lg'>
                <h3 className='text-3xl font-bold'>Basic</h3>
                <p className='flex items-end text-2xl font-semibold'>$<p className='text-6xl font-bold'>29</p></p>
                <p className='text-lg'>per user, per month</p>
                <div className='flex w-full flex-col gap-5 md:gap-7 mt-5'>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>99.5% Uptime Guarantee</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>120GB CDN Bandwidth</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>5GB Cloud Storage</p>
                    <p className='text-lg flex'><i class="fa-solid fa-xmark text-red-600 bg-red-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>Personal Help Support</p>
                    <p className='text-lg flex'><i class="fa-solid fa-xmark text-red-600 bg-red-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>Enterprise SLA</p>
                </div>
                <button className='w-full text-xl mt-2 px-7 py-4 md:py-5 rounded-full border-[6px] md:font-medium border-green-100 bg-white hover:bg-green-600 active:bg-green-700 text-green-600 hover:text-white '>Start Basic</button>

            </div>

            <div className=' w-full md:w-2/5  lg:w-fit  shadow-xl hover:shadow-2xl flex flex-col items-center gap-3 py-10 px-8 rounded-lg scale-105'>
                <div className='px-4 py-3 rounded-full bg-[#ff6922] text-white font-bold'>Best Value</div>
                <h3 className='text-3xl font-bold'>Standard</h3>
                <p className='flex items-end text-2xl font-semibold'>$<p className='text-6xl font-bold'>49</p></p>
                <p className='text-lg'>per user, per month</p>
                <div className='flex w-full flex-col gap-6 my-4'>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>99.5% Uptime Guarantee</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>150GB CDN Bandwidth</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>10GB Cloud Storage</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>Personal Help Support</p>
                    <p className='text-lg flex'><i class="fa-solid fa-xmark text-red-600 bg-red-100 p-2 rounded-full h-fit text-lg leading-4 mr-3"></i>Enterprise SLA</p>
                </div>
                <button className='text-white bg-green-600 hover:bg-green-500 active:bg-green-700 px-4 w-full py-4 md:py-5 rounded-full text-xl md:font-semibold'>Start Standard</button>
            </div>
            <div className='w-full md:w-2/5  lg:w-fit  shadow-xl hover:shadow-2xl flex flex-col items-center gap-3 py-10 px-8'>
                <h3 className='text-3xl font-bold'>Platinum</h3>
                <p className='flex items-end text-2xl font-semibold'>$<p className='text-6xl font-bold'>79</p></p>
                <p className='text-lg'>2 user, per month</p>
                <div className='flex w-full flex-col gap-5 md:gap-7 my-4'>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full text-lg h-fit leading-4 mr-3"></i>200GB CDN Bandwidth</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full text-lg h-fit leading-4 mr-3"></i>20GB Cloud Storage</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full text-lg h-fit leading-4 mr-3"></i>100% Uptime Guarantee</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full text-lg h-fit leading-4 mr-3"></i>Personal Help Support</p>
                    <p className='text-lg flex'><i class="fa-solid fa-check text-green-600 bg-green-100 p-2 rounded-full text-lg h-fit leading-4 mr-3"></i>Enterprise SLA</p>
                </div>
                <button className='w-full text-xl px-7 py-4 md:py-5 rounded-full border-[6px] md:font-medium border-green-100 bg-white hover:bg-green-600 active:bg-green-700 text-green-600 hover:text-white '>Start Platinum</button>
            </div>
        </div>
    </div>)
}

export default PricingComp