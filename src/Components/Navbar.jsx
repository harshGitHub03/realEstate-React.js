import { useContext, useEffect } from "react"
import { NavLink } from "react-router-dom"
import UserContext from "../Context/UserContext"

const Navbar = () => {
    //to show/hide "Navbar" on @media max-width:768px
    const { showNav, setShowNav } = useContext(UserContext)

    // toget to show hide "SignIn" component
    const { signInToggle, setSignInToggle } = useContext(UserContext)

    return <>
        <nav className=" fixed z-10 px-7 text-4xl w-screen flex justify-around items-center bg-white h-[10vh] md:h-[12.5vh]">
            <div className="flex"><h2 className="text-green-700">Rent</h2>It</div>
            <ul className={`${showNav ? '' : 'max-md:hidden'} max-md:flex-col max-md:absolute max-md:top-[9.95vh] max-md:w-screen max-md:bg-slate-600 flex max-md:items-center max-md:py-6 max-md:text-white flex-row text-lg md:ml-[7%] font-medium gap-4`}>
                <NavLink to='/' className='p-2'>Home</NavLink>
                <NavLink to='/about' className='p-2'>About</NavLink>
                <NavLink to='/services' className='p-2'>Services</NavLink>
                <NavLink to='/blogs' className='p-2'>Blogs</NavLink>
                <NavLink to='/pricing' className='p-2'>Pricing</NavLink>
                <NavLink to='/contact' className='p-2'>Contact</NavLink>
            </ul>

            <div className="text-xl flex flex-row-reverse items-center gap-2">
                {/* <button className="px-3 py-2 text-xl font-medium">wishlist</button> */}
                <button onClick={() => setSignInToggle(true)} className="flex max-md:text-[1.1rem] items-center max-lg:text-[1.2rem] max-md:px-3 px-4 max-md:py-[0.4rem] py-2 ml-3 rounded-full bg-green-500 text-white hover:bg-white hover:text-green-600 "><i class="fa-solid fa-right-to-bracket mr-1 "></i><p className="max-[850px]:hidden">Sign Up</p></button>
                <div onClick={() => showNav ? setShowNav(false) : setShowNav(true)} className="text-3xl p-1 md:hidden flex items-center hover:scale-110 duration-75">
                    {
                        showNav ? <i class="fa-solid fa-xmark"></i>:<i class="fa-solid fa-bars-staggered text-[1.41rem]"></i>
                    }
                </div>
            </div>


        </nav>
    </>
}

export default Navbar