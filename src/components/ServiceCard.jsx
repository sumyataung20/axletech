import React from 'react';

const ServiceCard = ({ imageUrl, title, listItems, images }) => {
    return (
        <div className="w-full h-full shadow-lg flex flex-col mx-auto bg-white rounded-xl overflow-hidden hover:shadow-[0_35px_60px_-10px_rgba(84,199,236,0.1)]">
            <img className="w-full h-48 object-cover" src={imageUrl} alt="Card" />
            <div className="px-6 py-4">
                <div className="font-semibold text-textSecondary text-xl mb-2">{title}</div>
                <ul className="text-textDefault text-base list-disc pl-4">
                    {listItems.map((item, index) => (
                        <li key={index} className="mb-2">{item}</li>
                    ))}
                </ul>
                <div className="flex mt-4">
                    {images?.map((image, index) => (
                        <div key={index} className="mr-4">
                            <img
                                src={image}
                                alt={`Image ${index + 1}`}
                                className="w-12 h-12 rounded-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;



