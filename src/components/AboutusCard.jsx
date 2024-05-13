import React from 'react';
const AboutusCard = ({ image, title, content }) => {
    return (
        <div className="max-w-[350px] mx-auto xs:mb-[60px] sm:mb-[60px] rounded-xl shadow-2xl p-6 mb-6 bg-aboutus hover:shadow-[0_35px_60px_-10px_rgba(84,199,236,0.1)] transition ease-in-out duration-150 md:me-4">
            <div className="flex flex-col items-center justify-center">
                {image && <img src={image} alt="Card Icon" className="w-12 h-auto" />}
                <div className="text-textDefault my-3 text-xl text-center font-medium">{title}</div>
                <div className="text-textDefault mb-3 text-md text-center">{content}</div>
            </div>
        </div>
    );
};

export default AboutusCard;
