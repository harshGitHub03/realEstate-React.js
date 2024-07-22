import React from 'react'
import { awardsAssets } from '../assets/assets'

function AwardsComp() {
  return (
    <div className="bg-[url('/awardsBgImg/awardsBg.png')] h-fit  w-screen ">
      <div className='flex flex-col items-center justify-around gap-[10rem] w-full h-full py-20  backdrop-blur-sm backdrop-brightness-50 '>
        <div className='text-center flex flex-col gap-2 w-2/3 md:w-2/4 lg:w-1/3'>
          <h3 className='text-green-400 md:text-xl text-xl font-medium'>Our Awards</h3>
          <p className='text-3xl text-white'>Over 1,24,000+ Happy User Bieng With Us Still They Love Our Services</p>
        </div>
        <div className='flex flex-wrap justify-around md:w-5/6  px-8 gap-7 gap-y-8'>
        {
          awardsAssets.map((element) => {
            return <>
              <div className='w-fit  text-white flex flex-col justify-center items-center gap-2'>
                <div className='bg-gray-700 text-4xl md:text-5xl flex justify-center items-center w-[80px] md:w-[90px] h-[80px] md:h-[90px] rounded-tl-md rounded-tr-[55px] rounded-br-md rounded-bl-[55px]'>
                  {element.icon}
                </div>
                <h1 className='text-4xl md:text-5xl font-bold'>{element.total}</h1>
                <p className=' text-md md:text-lg'>{element.name}</p>
              </div>
            </>
          })
        }
        </div>
      </div>
    </div>
  )
}

export default AwardsComp