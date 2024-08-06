import React, { useContext, useEffect, useRef, useState } from 'react'

import UserContext from '../Context/UserContext'


function SignUp() {
    // show hide sign in component
    const { signInToggle, setSignInToggle } = useContext(UserContext)

    // sign in /sign up toggle
    const [signType, setSignType] = useState('signUp')

    // to hide scroll on signin show
    useEffect(() => {
        signInToggle ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'scroll'
    })

    // to close sign in on click outside functionality
    const signClose = useRef()
    useEffect(() => {

        const handler = (e) => {
            // only when the outer part is clicked (this condition satisfies)
            if (e.target === signClose.current) {
                setSignInToggle(false)
            }
        }
        document.addEventListener('click', handler)
    })


    // Terms agree button toggle(check/uncheck)
    const { agree, setAgree } = useContext(UserContext)



    return (
        <div ref={signClose} className={` ${signInToggle ? 'flex' : 'hidden'} h-full w-full fixed top-0 z-30  flex-col justify-center items-center bg-[#00000090]`}>
            <div className='bg-white py-8 px-8  min-w-[23vw] flex flex-col gap-6'>

                <form onSubmit={(e) => { e.preventDefault(); alert(signType == "signIn" ? 'sign In' : "sign Up") }} className='flex flex-col  text-gray-800 bg-white   gap-5 rounded'>
                    <div className='gap-2'>
                        <h2 className='text-2xl text-gray-800 font-medium'>{signType == "signIn" ? 'Sign In' : "Sign Up"}</h2>
                        <p className='text-sm text-gray-500'>Register to get best deals.</p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <input type="text" className={` ${signType == "signIn" ? '' : 'hidden'} h-9 text-sm border-b-[1.5px] border-gray-400 outline-none`} placeholder='Name' required />
                        <input type="text" className=' h-9 text-sm border-b-[1.5px] border-gray-400 outline-none' placeholder='Email' required />
                        <input type="text" className=' h-9 text-sm border-b-[1.5px] border-gray-400 outline-none' placeholder='Password' required />
                        <input type="text" className={` ${signType == 'signIn' ? '' : 'hidden'} h-9 text-sm border-b-[1.5px] border-gray-400 outline-none`} placeholder='re-type password' required />
                    </div>

                    <div className='flex items-center text-[0.8rem] gap-8'>
                        <div className='flex items-center '>
                            <div onClick={() => setAgree(agree ? false : true)} className='pl-0 p-1 cursor-pointer text-base font-md '>

                                {agree ? <i className="fa-solid fa-circle-check "></i> : <i className="fa-regular fa-circle-check"></i>}
                            </div>
                            <p className='flex gap-1'>Agree our<p className='underline'>Terms and Conditions</p></p>
                        </div>
                    </div>

                    <button className='bg-gray-500 hover:bg-gray-600 active:bg-gray-700 text-white font-medium rounded-full py-2 text-sm mt-2'>{signType == "signIn" ? 'Sign In' : "Sign Up"}</button>

                </form >

                <div className='flex justify-between mb-2'>
                    <span className='text-sm'>{signType == "signIn" ? "" : "Dosen't "}have an account?</span>
                    <span onClick={() => signType == 'signIn' ? setSignType('signup') : setSignType('signIn')} className='text-sm text-blue-700 underline'>Sign in</span>
                </div>
                <div className='text-center'>
                    <p className='text-sm'>or {signType == "signIn" ? 'sign In' : "sign Up"} with</p>
                    <div className='text-2xl mt-3 flex justify-center gap-2'>
                        <i className="fa-brands fa-facebook hover:scale-110"></i>
                        <i className="fa-brands fa-twitter mx-2 hover:scale-110"></i>
                        <i className="fa-brands fa-google hover:scale-110"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp