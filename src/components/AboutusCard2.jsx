import React from 'react';

const AboutusCard2 = ({ image, content }) => {
    return (
        <div className="mx-auto rounded xs:w-10/12 sm:w-8/12 max-w-[500px] max-h-[600px] md:w-8/12 lg:w-6/12  hover:shadow-[0_35px_60px_-10px_rgba(84,199,236,0.1)] transition ease-in-out duration-150">

            <div className="flex flex-col sm:flex-row justify-center items-stretch mx-auto">

                {/* Left side with background gradient and image */}
                <div className=" sm:w-8/12 md:w-1/2  aboutusgradient from-blue-500 to-pink-500 relative">
                    <img
                        src={image}
                        alt="Card Image"
                        className="object-contain w-4/6 mx-auto md:w-full h-full px-3 py-3"
                    />
                </div>

                {/* Right side with text content */}
                <div className=" sm:w-8/12 md:w-1/2 px-2 py-2 bg-aboutus flex items-center justify-center">
                    <p className="text-textDefault text-center md:text-start md:px-2 md:tracking-tight my-2 flex-grow">{content}</p>
                </div>

            </div>

        </div>
    );
};

export default AboutusCard2;
