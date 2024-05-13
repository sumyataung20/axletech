// CardComponent.jsx
import React from 'react';

const AboutusCard3 = ({ icon, title, content }) => {

    return (
        <div className="max-w-sm bg-white shadow-lg rounded overflow-hidden m-4 bg-aboutus">
            <div className="flex justify-center items-center p-4">
                <div className="me-4 flex-shrink-0 mb-auto">
                   {icon}
                </div>
                <div>
                    <h2 className="text-lg font-semibold text-textDefault mb-2">{title}</h2>
                    <p className="text-aboutustext">{content}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutusCard3;
