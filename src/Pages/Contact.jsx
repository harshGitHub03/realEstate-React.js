import React from 'react'
import contactHeroImg from '/navlinksHeroImages/contactHeroImg.png'
function Contact() {
    return (
        <>
            {/* contact hero section */}
            <div className='pt-[9.9vh] md:pt-[12.5vh] relative '>
                <div className='h-[40vh] flex flex-col justify-end text-white px-[10vw] pb-10 bg-[#04041b78]'>
                    <h3 className='text-white text-2xl'>Contact</h3>
                    <h1 className='text-5xl font-medium'>Get Helps & Friendly Support</h1>
                </div>
                <img src={contactHeroImg} className='w-full h-full bg-center absolute object-cover top-[0] z-[-1]' alt="" />
            </div>

            {/* contact section */}
            <div className='px-[9vw] py-10 pb-12 sm:py-14  bg-gray-200 mx-auto flex max-sm:flex-col max-sm:gap-12 justify-between'>
                <div className=' sm:w-1/2 flex flex-col justify-between'>
                    <h3 className='text-6xl'>Let Luxery be your Next Home</h3>
                    <div className='flex mt-6 flex-col gap-3'>
                        <h3 className='pl-1'><i class="fa-solid fa-phone">+91 43231-32832</i></h3>
                        <h3 className='pl-1'><i class="fa-regular fa-envelope"></i> rentit.dev.harsh@mail.com</h3>
                        <div className='flex gap-3 text-xl mt-1'>
                            <i class="fa-brands fa-instagram text-lg p-2 leading-4 shadow-lg hover:scale-110 active:text-white bg-white active:bg-green-500 rounded-full"></i>
                            <i class="fa-brands fa-twitter text-lg p-2 leading-4 shadow-lg hover:scale-110 active:text-white bg-white active:bg-green-500 rounded-full"></i>
                            <i class="fa-brands fa-whatsapp text-lg p-2 leading-4 shadow-lg hover:scale-110 active:text-white bg-white active:bg-green-500 rounded-full"></i>
                            <i class="fa-brands fa-threads text-lg p-2 leading-4 shadow-lg hover:scale-110 active:text-white bg-white active:bg-green-500 rounded-full"></i>
                        </div>
                    </div>
                </div>

                <form onSubmit={(e)=>{e.preventDefault(); alert("message sent!")}}className='sm:w-2/5 min-[] flex  flex-col gap-4'>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-lg '>Your Name</h3>
                        <input type="text" required className='rounded w-full py-2 px-3 outline-none' placeholder='Name' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-lg'>Your Email</h3>
                        <input type="text" required className='rounded w-full py-2 px-3 outline-none' placeholder='Email' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-lg'>Askings</h3>
                        <textarea type="text" className='rounded w-full py-2 px-3 outline-none' placeholder='Type...' />
                    </div>

                    <button className='bg-green-600 hover:bg-green-700 active:bg-green-500 font-medium  text-lg text-white px-3 py-2 mt-2'>Send Query</button>
                </form>
            </div>
        </>
    )
}

export default Contact