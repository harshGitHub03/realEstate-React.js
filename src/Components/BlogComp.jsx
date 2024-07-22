import React from 'react'
import { blogAssets } from '../assets/assets'

function RecentlyListed() {



  return (
    <div className='max-w-[86vw] sm:w-[90vw] md:w-[80vw] m-auto w-screen'>
      <div className='flex flex-col justify-center items-center text-center gap-3 py-11'>
        <h2 className='text-4xl md:text-[2.7rem] lg:text-5xl text-[#2d3954] font-semibold'>Recent Property Listed</h2>
        <p className='text-lg  text-[#72809d] w-full md:w-2/3 lg:w-[45%] leading-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, aspernatur animi quaerat voluptate accusantium quae quidem! Quis  , voluptatem laborum!</p>
      </div>

      <div className='flex flex-wrap justify-around gap-5 gap-y-8 min-[900px]:gap-7 mb-16'>
        {
          blogAssets.map((element) => {
            //to show items recent added only
            if (element.recentAdded === true) {
              return <div className='  sm:min-w-[280px] sm:w-[24vw] overflow-hidden shadow-xl hover:shadow-2xl'>
                <img src={element.image} className='w-fit  hover:scale-110 duration-150 ' />

                <div className='px-5 py-7 flex flex-col gap-3'>
                  <div className='flex justify-between'>
                    <p className={`px-3 py-1 w-fit h-fit font-bold rounded ${element.category == 'For Rent' ? 'bg-[#ff98001a] text-[#ff9800]' : 'bg-[#25b5791a] text-[#25b579]'}`}>{element.category}</p>
                    <p className='text-xl text-gray-700 font-semibold pr-2' >{element.property}</p>
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
  )
}

export default RecentlyListed