import React from 'react'
import { Link, NavLink } from 'react-router-dom'
function Footer() {
    return (<>
        {/* contact button */}
        <div className='flex justify-between items-center bg-green-600 py-5 px-[5vw] gap-4 md:px-[8vw] text-white'>
            <div className='flex flex-col gap-y-2'>
                <h3 className='max-sm:text-2xl text-5xl font-bold'>Do You Have Questions ?</h3>
                <p className='max-sm:text-sm text-xl'>We'll help you to grow your career and growth.</p>
            </div>
            <NavLink to='/contact' className='md:text-xl mr-2 px-3 md:px-7 py-1 md:py-5 rounded-full border-[6px] font-medium border-green-100 bg-white hover:bg-green-600 active:bg-white text-green-700 hover:text-white active:text-green-600'>Contact Us Today</NavLink>
        </div>

        {/* footer comp */}
        <div className='bg-[#1d2636] flex flex-col items-center pt-12 '>
            <div className='flex w-full flex-wrap justify-between gap-y-4 mb-10 px-[5vw] pr-[6.5vw] md:px-[8vw]'>
                <div className='w-[57%] md:w-1/3 flex flex-col gap-1'>
                    <div className="flex text-gray-300 text-5xl"><h2 className="text-green-500">Rent</h2>It</div>
                    <p className='text-2xl font-medium text-white'>Do You Need Help With Anything?</p>
                    <p className='pt-3 pb-2 md:text-lg  text-gray-400'>Receive updates, hot deals, tutorials, discounts sent straignt in your inbox every month</p>

                    <form onSubmit={() => alert("Thanks you'll get updated with deals and updates!")} className='w-full flex'>
                        <input type="text" placeholder="Email Address" required  className='px-2 md:px-3 py-2 md:text-lg w-[70%] rounded outline-none' />
                        <button className='text-center bg-green-500 hover:bg-green-600 active:bg-green-500 px-1 py-2 md:text-lg font-medium text-white rounded '>subscribe</button>
                    </form>
                </div>

                <ul className='text-gray-400 text-lg flex flex-col gap-2'>
                    <h1 className='text-white text-2xl mb-3'>LAYOUTS</h1>
                    <Link to='/'>Home Page</Link>
                    <Link to='/about'>About Page</Link>
                    <Link to='/services'>Services Page</Link>
                    <Link to='/blogs'>Blogs Page</Link>
                    <Link to='/pricing'>Pricing Page</Link>
                    <Link to='/contact'>Contact Page</Link>
                </ul>
                <ul className='text-gray-400 text-lg flex flex-col gap-2'>
                    <h1 className='text-white text-2xl mb-3'>ALL SECTIONS</h1>
                    <li>Headers</li>
                    <li>Features</li>
                    <li>Attractive</li>
                    <li>Testimonials</li>
                    <li>Videos</li>
                    <li>Footers</li>
                </ul>
                <ul className='text-gray-400 text-lg flex flex-col gap-2'>
                    <h1 className='text-white text-2xl mb-3'>COMPANY</h1>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Pricing</li>
                    <li>Affiliate</li>
                    <li>Login</li>
                    <li>Privacy</li>
                </ul>
            </div>
            <hr className='border-gray-600 border-1 w-full' />
            <p className='text-gray-400 text-sm my-4'>© 2024 RentUP. Developed By harshcode07@gmail.com.</p>
        </div>
    </>)
}

export default Footer