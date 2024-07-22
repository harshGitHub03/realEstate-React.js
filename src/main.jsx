import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// to keep navbar and footer for all pages
import Footer from './Components/Footer.jsx'
import Navbar from './Components/Navbar.jsx'
import { BrowserRouter } from 'react-router-dom'

//context Provider Import
import UserContextProvider from './Context/UserContextProvider.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
    
  </React.StrictMode>,
)
