import { useState } from "react";
import UserContext from "./UserContext";
import { blogAssets } from "../assets/assets";

const UserContextProvider = ({ children }) => {
    //@media maxwidth:768px "navLinks" show hide toggle
    const [showNav,setShowNav]=useState(false)

    
    // services Listings toogle
    const [serviceSort,setServiceSort]=useState('Commercial')


    // signIn show hide
    const [signInToggle, setSignInToggle] = useState(false,false,false)


    // 'signIn' terms Agree Toggle
    const [agree, setAgree] = useState(false)




    return <>
        <UserContext.Provider value={{showNav,setShowNav, serviceSort,setServiceSort, signInToggle, setSignInToggle, agree, setAgree }}>
            {children}
        </UserContext.Provider>
    </>
}

export default UserContextProvider