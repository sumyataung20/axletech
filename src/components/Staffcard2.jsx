

import React from 'react';

import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from 'react-icons/ai';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
const Staffcard2 = ({ image, name, title, content, icon1, icon2, icon3, icon4 }) => {
    return (
        <div className={`flex flex-col md:flex-row justify-center  items-center w-10/12 lg:max-w-[800px] mx-auto xs:mb-[60px] sm:mb-[60px] bg-aboutus rounded-lg hover:shadow-[0_35px_60px_-10px_rgba(84,199,236,0.1)] shadow-lg  p-6 mb-6  `}>
            <div className="md:w-3/12 my-3 md:my-0">
                {image && <img src={image} alt="Card Icon" className="w-[120px] h-[120px] rounded-full object-cover" />}
            </div>
            <div className="text-center md:w-4/12 my-3 md:my-0">
                <h2 className="text-lg lg:text-xl flex-nowrap font-medium text-gray-800 mb-2 text-textDefault">{name}</h2>
                <h2 className="text-xl font-medium text-gray-800 mb-2 text-textSecondary">{title}</h2>
                <div className="flex justify-center items-center sm:order-last md:mt-3">
                    <a href={icon1} target="_blank"><CiFacebook className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
                    <a href={icon2} target="_blank"><AiOutlineInstagram className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
                    <a href={icon3} target="_blank"><AiOutlineGithub className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
                    <a href={`mailto:${icon4}`} target="_blank"><AiOutlineMail className="text-textDefault mr-2 hover:text-textSecondary" size={24} /></a>
                </div>
            </div>
            <div className="md:w-5/12 my-3 md:my-0">
                <div className="text-aboutustext mb-3 text-lg text-center md:text-start tracking-tighter italic">{content}</div>
            </div>
        </div>
    );
};

export default Staffcard2;
