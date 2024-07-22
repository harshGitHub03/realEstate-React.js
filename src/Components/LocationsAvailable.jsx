import React from 'react'
import { locationsAvailableAssets } from '../assets/assets'

function LocationsAvailable() {
    return <>
        <div className='px-[8vw] pt-12 pb-7'>
            <div className='flex flex-col items-center gap-2 text-center'>
                <h2 className='text-4xl md:text-[2.7rem] lg:text-5xl text-[#2d3954] font-semibold'>Locations Available</h2>
                <p className='text-[#72809d] leading-6 text-lg w-full md:w-2/3 lg:w-[45%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam velit ratione quia iusto magni voluptatibus ex quidem eos qui officia sequi, voluptates dolore.</p>
            </div>

            <div className='text-white  flex justify-around gap-x-2 md:gap-x-9 gap-y-10 flex-wrap py-12'>

                {
                    locationsAvailableAssets.map((element) => {

                        return <div className='w-2/5 sm:w-[35vw] lg:w-[25vw] h-fit relative rounded shadow hover:scale-110 duration-150'>
                            <div className='absolute rounded flex flex-col items-center justify-center md:gap-3 w-full h-full backdrop-brightness-[0.7] backdrop-blur-[2px] hover:backdrop-blur-[0px]'>
                                <h2 className='max-sm:text-[1.3rem] sm:text-[1.3rem] md:text-[1.6rem] lg:text-[1.9rem] text-center md:leading-8 font-semibold'>{element.cityName}</h2>
                                <div className='flex max-sm:hidden justify-center flex-wrap leading-5 md:text-lg lg:text-xl'>
                                    {element.properties.map((subEle) => {
                                        return <p className='mx-3'>{subEle}</p>
                                    })}
                                </div>
                            </div>
                            <img src={element.image} className='rounded h-fit' />
                        </div>
                    })
                }

            </div>
        </div>
    </>
}

export default LocationsAvailable