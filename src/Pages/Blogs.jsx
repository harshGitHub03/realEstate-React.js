import React from 'react'
import blogHeroImg from '/navlinksHeroImages/blogsHero.jpg'

import BlogComp from '../Components/BlogComp'

function Blogs() {
    return (
        <div>
            <div className='pt-[9.9vh] md:pt-[12.5vh] relative '>
                <div className='h-[40vh] flex flex-col justify-end text-white px-[10vw] pb-10 bg-[#04041b78]'>
                    <h3 className='text-white text-2xl'>Blog</h3>
                    <h1 className='text-5xl font-medium'>Blog Grid - Our Blogs</h1>
                </div>
                <img src={blogHeroImg} className='w-full h-full bg-center absolute object-cover top-[0] z-[-1]' alt="" />
            </div>
            <BlogComp />
        </div>
    )
}

export default Blogs