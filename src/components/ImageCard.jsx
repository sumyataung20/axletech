// Card.js

import React from 'react';
import { Link } from 'react-router-dom';

const ImageCard = ({ image, link }) => {
    return (
        <Link to={link} target="_blank" rel="noopener noreferrer">
            <div className="xs:max-w-[180px] sm:max-w-[200px] mx-auto xs:mb-[60px] sm:mb-[60px] rounded-xl shadow-2xl p-6 mb-6 hover:shadow-[0_35px_60px_-10px_rgba(84,199,236,0.2)] transition ease-in-out duration-150 ">
                <div className="flex items-center justify-center">
                    {image && <img src={image} alt="Card Icon" className="w-full h-full" />}
                </div>
            </div>
        </Link>
    );
};

export default ImageCard;
