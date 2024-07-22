import React, { useContext, useEffect } from 'react'
import { servicesAssets } from '../assets/assets.jsx'


import { blogAssets } from '../assets/assets'
import UserContext from '../Context/UserContext.jsx'


function Services() {
    const { serviceSort, setServiceSort } = useContext(UserContext)

    return (<>
        <div className='bg-[#f7f9fc] pb-16 px-[7vw] md:px-[9vw]'>
            {/* choose menu */}
            <div className=' flex flex-col items-center gap-12 py-12 '>
                <div className='text-center w-full flex flex-col gap-3'>
                    <h1 className='text-4xl md:text-[2.7rem] lg:text-5xl text-[#2d3954] font-semibold'>Featured Property Types</h1>
                    <p className=' text-lg  text-[#72809d]'>Find All Types Of Property.</p>
                </div>

                <div className='flex flex-wrap gap-3  gap-y-4   w-full justify-between '>
                    {servicesAssets.map((element) => {
                        return <div onClick={() => setServiceSort(element.property)} className={`${element.property == serviceSort ? 'border-4 border-red-300' : 'border-4 border-transparent'} max-[380px]:w-[39vw] max-sm:w-[1/4] max-[900px]:w-[150px] min-[900px]:w-[14vw] py-[4%] sm:py-[2.5%]  rounded flex flex-col items-center justify-around shadow-lg hover:shadow-2xl cursor-pointer`}>
                            <img src={element.image} className='w-[50%]  mb-4' />
                            <h3 className=' text-center md:text-[1.1rem] lg:text-xl'>{element.name}</h3>
                            <p className='text-lg text-gray-500'>{element.Total}</p>
                        </div>
                    })}
                </div>
            </div>
            

            {/* list items */}
            <h1 className='text-2xl text-[#2d3954] font-semibold'>Sorted listings -</h1>

            <div className=' flex  flex-wrap justify-around gap-y-9 gap-2  md:gap-6 lg:gap-8 mt-10 '>
                {
                    blogAssets.map((element) => {
                        //to show items Service Selected only
                        if (element.property === serviceSort) {
                            return <div className='  lg:w-[24vw] overflow-hidden shadow-xl hover:shadow-2xl'>
                                <div className=' min-[500px]:h-[35vw]  md:h-[26vw] lg:h-[17vw]  overflow-hidden'>
                                    <img src={element.image} className='h-full w-full bg-cover hover:scale-110 duration-150 ' />
                                </div>
                                <div className='px-5 pb-7 pt-6  flex flex-col gap-2 md:gap-3'>
                                    <div className='flex justify-between'>
                                        <p className={`px-3 py-1 w-fit h-fit font-bold rounded ${element.category == 'For Rent' ? 'bg-[#ff98001a] text-[#ff9800]' : 'bg-[#25b5791a] text-[#25b579]'}`}>{element.category}</p>
                                        <p className='text-xl text-gray-700 font-semibold' >{element.property}</p>
                                    </div>

                                    <div className='mb-3'>
                                        <h4 className='text-xl font-semibold'>{element.name}</h4>
                                        <h4 className='text-lg text-[#72809d]'><i class="fa-solid fa-location-dot mr-1"></i>{element.address}</h4>
                                    </div>
                                    <hr />
                                    <div className='text-xl flex items-center justify-start'>
                                        <h3 className='flex gap-2 items-center text-xl font-medium text-gray-600'><p className='p-4 py-3 rounded-full bg-green-500 text-2xl text-white font-semibold'>{element.price}</p>/sqft</h3>
                                    </div>
                                </div>
                            </div>
                        }
                    })

                }
            </div >

        </div>
    </>)
}

export default Services