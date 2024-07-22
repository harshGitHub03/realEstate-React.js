import react from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../src/Pages/Home.jsx'
import About from './Pages/About.jsx'
import Services from './Pages/Services.jsx'
import Blogs from './Pages/Blogs.jsx'
import Pricing from './Pages/Pricing.jsx'
import Contact from './Pages/Contact.jsx'
import SignIn from './Components/SignIn.jsx'
import ScrollToTop from './Components/ScollToTop.jsx'


const App = () => {
  return <div className='overflow-x-hidden'>
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>
        <Route path='/pricing' element={<Pricing />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
      </Routes>
      <SignIn/>
  </div>
}

export default App