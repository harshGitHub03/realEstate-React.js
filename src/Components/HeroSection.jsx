import React from 'react'

function HeroSection() {
    return (
        <div>
            <div className="bg-[url('/homeBgImg/heroImg.png')] bg-center pt-[12vh] bg-cover bg-no-repeat h-[102vh]  flex flex-col  justify-center items-center max-md:gap-2 gap-6">
                <p className="max-md:text-6xl px-2 text-7xl text-center text-white font-semibold">Search Your Next <br className='max-md:hidden'/>Home</p>
                <p className="text-gray-300 w-2/3 text-center text-sm sm:text-xl">Find new & featured property located in your local city</p>

                {/* home page find bar */}
                <form action="" className="flex max-md:flex-col max-md:mt-4 mt-2 md:mt-5 px-4 py-1 bg-white rounded">
                    <div className="flex flex-col gap-2 p-3 px-4 bg-white">
                        <h1 className="text-gray-600">City/Street</h1>
                        <input type="text" placeholder="Location" required className="md:w-[17vw] placeholder:text-black px-2 h-8 rounded border border-gray-300" />
                    </div>
                    <div className="flex flex-col gap-2 p-3 px-4 bg-white md:border-l ">
                        <h1 className="text-gray-600">Property Type</h1>
                        <input type="text" placeholder="Eg. Appartments" required className="md:w-[17vw] placeholder:text-black px-2 h-8 rounded border border-gray-300" />
                    </div>
                    <div className="flex flex-col gap-2 p-3 px-4 bg-white md:border-x">
                        <h1 className="text-gray-600">Price Range</h1>
                        <input type="text" placeholder="Price range" className="md:w-[17vw] placeholder:text-black px-2 h-8 rounded border border-gray-300" />
                    </div>
                    <div className="flex items-center max-md:py-2 px-3 gap-4 justify-around">
                        <h1 className="text-sm md:text-lg font-semibold">Advance <br />Filter</h1>
                        <button className="px-7 bg-green-500 py-3 text-xl text-white rounded"><i class="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default HeroSection