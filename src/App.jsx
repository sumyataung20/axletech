import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home.jsx'
import Service from './pages/Service.jsx'
import Project from './pages/Project.jsx'
import About from "./pages/Aboutus.jsx"
import Contact from './pages/Contactus.jsx'
import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import { useLocation } from 'react-router-dom'
// import Title from './components/Title.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'

import NotFound from './pages/NotFound.jsx'
const Scrolltop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({top: 0, left: 0});
  
  }, [pathname])
  

  return null;
}



const App = () => {
    return (
        <>
        <BrowserRouter>
<Scrolltop/>
<Routes>

  <Route path="/" element={<Home />} />
  <Route path="/services" element={<Service />} />

  <Route path="/projects" element={<Project />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="*" element={<NotFound />} />
  
</Routes>
</BrowserRouter>
<ToastContainer position="bottom-right" />
        </>
    )
}
 
   
export default App;

