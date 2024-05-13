
import { SocialIcon } from 'react-social-icons';
import { IoLocationOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { AiFillHome } from "react-icons/ai";
import { MdDesignServices } from "react-icons/md";
import { AiFillProject } from "react-icons/ai";
import { IoMdContacts } from "react-icons/io";
import { PiPhoneCallFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Footer = () => {
    // const address = '';

    const handleGoogleMapsRedirect = () => {
      // Construct the Google Maps link with the address
      const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  
      // Open the link in a new tab
      window.open(googleMapsLink, '_blank');
    };
    return (
        <section className="bg-background2  ">

            <div className="max-w-6xl mx-auto p-4 py-[50px] md:py-[60px] lg:py-[80px] ">
                <h1 className="text-center text-textSecondary text-xl md:text-xl lg:text-2xl font-medium">aXLe Tech</h1>
                <div className="md:flex mt-[80px] xs:mt-[40px]">


                    <div className="md:w-4/12">
                        <div className=" text-textDefault font-medium mx-auto">
                            <a className="decoration-0 cursor-pointer" href="https://www.google.com/maps/place/45+St,+Yangon/@16.7726839,96.1650931,17z/data=!3m1!4b1!4m6!3m5!1s0x30c1ec62099a278d:0x9e7d4c23d9977471!8m2!3d16.7726839!4d96.167668!16s%2Fg%2F1tdsmdbf?entry=ttu"  target="_blank">
                            <p className="xs:text-[14px] text-center md:text-left sm:text-[18px] flex mb-2 justify-center md:justify-normal" ><IoLocationOutline size={22} className="shrink-0 me-2" />No.19/21, 45th Street, Botahtaung, Yangon</p>
                            </a>

<a className="decoration-0" href="tel:+95 9979000020" target="_blank">
                            <p className="xs:text-[14px] sm:text-[18px] flex mb-2 justify-center md:justify-normal"><FaPhone size={16} className="shrink-0 me-2" />+95 9979000020</p>
                            </a>

                            <a className="decoration-0" href="mailto:info@axletechmm.com" target="_blank">
  <p className="xs:text-[14px] sm:text-[18px] flex mb-2 justify-center md:justify-normal">
    <CgMail size={22} className="shrink-0 me-2" />
    info@axletechmm.com
  </p>
</a>

                        </div>
                    </div>

                    <div className="md:w-4/12 mx-auto mt-[30px] md:mt-0 ">
                        <div className="flex justify-center  md:w-6/12 md:ms-[100px]">
                            <SocialIcon url="https://www.facebook.com/axletechmm" className="custom-social-icon me-3 sm:me-1 md:me-1 lg:me-4 lg:social-icon" bgColor="#3B5998" target="_blank" />
                            <SocialIcon network="mailto"
                                url="mailto:info@axletechmm.com"
                                className="custom-social-icon me-3 sm:me-1 md:me-1 lg:me-4 lg:social-icon"
                                target="_blank"
                            />
                            <SocialIcon url="https://www.linkedin.com/company/axletechmm/" className="custom-social-icon me-3 sm:me-1 md:me-1 lg:me-4 lg:social-icon" target="_blank" />
                        </div>
                    </div>

                    <div className="hidden md:w-4/12 mx-auto mt-[30px] md:mt-0 md:flex flex-col justify-center items-center">
                        <ul className="">
                            <li className="py-1 cursor-pointer hover:cursor-pointer nav1">
                                <span className="flex text-textDefault text-[18px] hover:text-textSecondary justify-center md:justify-start "><AiFillHome size={22} className="mr-1 pt-1" /><Link to="/" >Home</Link></span>
                            </li>

                            <li className=" py-1 cursor-pointer hover:cursor-pointer nav1">
                                <span className="flex text-textDefault text-[18px] hover:text-textSecondary justify-center md:justify-start   "><MdDesignServices size={22} className="mr-1 pt-1" /><Link to="/services">Our Services</Link></span>
                            </li>

                            <li className=" py-1 cursor-pointer hover:cursor-pointer nav1">
                                <span className="flex text-textDefault text-[18px] hover:text-textSecondary justify-center md:justify-start   "><AiFillProject size={22} className="mr-1 pt-1" /><Link to="/projects">Our Projects</Link></span>
                            </li>

                            <li className=" py-1 cursor-pointer hover:cursor-pointer nav1">
                                <span className="flex text-textDefault text-[18px] hover:text-textSecondary justify-center md:justify-start  "><IoMdContacts size={22} className="mr-1 pt-1" /><Link to="/about">About us</Link></span>
                            </li>

                            <li className=" py-1 cursor-pointer hover:cursor-pointer nav1">
                                <span className="flex text-textDefault text-[18px] hover:text-textSecondary justify-center md:justify-start  "><PiPhoneCallFill size={23} className="mr-1 pt-1" /><Link to="/contact">Contact us</Link></span>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
            <div className=" xs:text-[13px]  text-center mt-5 pb-1 text-textSecondary1">© 2023 All Rights Reserved. Axle Tech Co.,Ltd</div>
        </section>
    )
}

export default Footer;