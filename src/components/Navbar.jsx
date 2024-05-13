
import logo from "../images/homepage/axletechlogowhite.png";
import { RxCross2 } from "react-icons/rx";
import { FiAlignLeft } from "react-icons/fi";
import { AiFillHome } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink, Events, animateScroll as scroll } from "react-scroll";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const location = useLocation();

  const handleClick = () => {
    setClick(!click);
  };

  const changeNavbarColor = () => {
    if (window.scrollY > 0) {
        setScrolling(true);
    }
    else {
      setScrolling(false);
    }
};


window.addEventListener('scroll', changeNavbarColor);


  // const navClass = scrolling ? 'navscroll' : '';
  const content = (
    <div className={`lg:hidden md:hidden fixed top-[80px] left-0 h-screen w-3/6 z-50 transform transition-transform duration-200 ${click ? "translate-x-0" : "-translate-x-full"}`}>
      <ul className="py-4 text-lg scroll-px-20 w-full h-screen navblur1">
        <Link to="/">
        <li className={`ps-4 py-3 cursor-pointer hover:cursor-pointer nav1  ${location.pathname === '/' ? 'active1' : ''}`} >
          <span className="flex"><AiFillHome size={22} className="mr-1 pt-1" />Home</span>
        </li>
        </Link>


<Link to="/services">
        <li className={`ps-4 py-3 cursor-pointer hover:cursor-pointer nav1  ${location.pathname === '/services' ? 'active1' : ''}`}>
          <span className=" flex"><MdDesignServices size={22} className="mr-1 pt-1" />Our Services</span>
        </li>
        </Link>


        <Link to="/projects">
        <li className={`ps-4 py-3 cursor-pointer hover:cursor-pointer nav1 ${location.pathname === '/projects' ? 'active1' : ''}`}>
          <span className="flex"><AiFillProject size={22} className="mr-1 pt-1" />Our Projects</span>
        </li>
        </Link>
        

        <Link to="/about">
        <li className={`ps-4 py-3 cursor-pointer hover:cursor-pointer nav1 ${location.pathname === '/about' ? 'active1' : ''}`}>
          <span className="flex"><IoMdContacts size={22} className="mr-1 pt-1" />About us</span>
        </li>
        </Link>


<Link to="/contact">
        <li className={`ps-4 py-3 cursor-pointer hover:cursor-pointer nav1 ${location.pathname === '/contact' ? 'active' : ''}`}>
          <span className="flex"><PiPhoneCallFill size={23} className="mr-1 pt-1" />Contact us</span>
        </li>
        </Link>
      </ul>
    </div>
  );

  return (
    <nav className={`fixed top-0 w-full py-3 navblur ${scrolling ? 'navscroll' : ''}`}>
      <div className="h-[60px] flex justify-between z-50 text-textDefault lg:py-2 xs:px-3 sm:px-6 md:px-1 lg:px-2 xl:px-2   py-1 navcontainer">
        <div className="flex items-center flex-1">
          <a href="/" className="no-underline">
            <img src={logo} alt="logo" className="w-[80px] h-[80px] object-contain" />
          </a>
        </div>

        <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
          <ul className="flex gap-8 mr-16 lg:text-[18px] sm:text-[16px] whitespace-nowrap">

          <Link to="/">
            <li className={`text-textDefault cursor-pointer hover:cursor-pointer nav  ${location.pathname === '/' ? 'active' : ''}`} >
              Home
            </li>
            </Link>



            <Link to="/services">
            <li className={`text-textDefault cursor-pointer hover:cursor-pointer nav  ${location.pathname === '/services' ? 'active' : ''}`}  >Our Services</li>
            </Link>

            <Link to="/projects">
            <li className={`text-textDefault cursor-pointer hover:cursor-pointer nav  ${location.pathname === '/projects' ? 'active' : ''}`} >Our Projects</li>
            </Link>


            <Link to="/about">
            <li className={`text-textDefault cursor-pointer hover:cursor-pointer nav  ${location.pathname === '/about' ? 'active' : ''}`} >About us</li>
            </Link>

            <Link to="/contact">
            <li className={`text-textDefault cursor-pointer hover:cursor-pointer nav  ${location.pathname === '/contact' ? 'active' : ''}`} >Contact us</li>
            </Link>

            
          </ul>
        </div>

        <div>
          {content}
        </div>
        <button className="block lg:hidden md:hidden transition-transform" onClick={handleClick}>
          {click ? <RxCross2 className="text-fatimes" size={20} /> : <FiAlignLeft size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

