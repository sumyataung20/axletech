

import React from 'react';
import hsuimg from "../images/homepage/hsu.jpg"
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
const Staffcard = ({ image, name, title, content, icon1, icon2, icon3, icon4 }) => {
    return (
        <div className={`xs:max-w-sm sm:max-w-sm mx-auto xs:mb-[60px] sm:mb-[60px] bg-white rounded-xl shadow-lg bg-aboutus hover:shadow-[0_35px_60px_-10px_rgba(84,199,236,0.1)] bottom-1 border-textDefault p-6 mb-6 relative `}>
            <div className="flex items-center justify-center absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                {image && <img src={image} alt="Card Icon" className=" w-[120px] h-[120px] rounded-full object-cover" />}
            </div>
            <div className="text-center mt-16">
                <h2 className="text-xl font-medium text-gray-800 mb-2 text-textDefault">{name}</h2>
                <h2 className="text-xl font-medium text-gray-800 mb-2 text-textSecondary ">{title}</h2>
                <div className="text-aboutustext mb-3 text-md text-center italic">{content}</div>
            </div>

            <div className="flex justify-center items-center">
                <a href={icon1} target="_blank"><CiFacebook className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
                <a href={icon2} target="_blank"><AiOutlineInstagram className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
                <a href={icon3} target="_blank"><AiOutlineGithub className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
                <a href={`mailto:${icon4}`} target="_blank"><AiOutlineMail className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
            </div>
        </div>
    );
};

export default Staffcard;
