

import React from 'react';

const Card = ({ icon, title, content, additionalClasses }) => {
  return (
    <div className={`xs:max-w-sm sm:max-w-sm mx-auto xs:mb-[60px] sm:mb-[60px] bg-white rounded-xl shadow hover:shadow-[0_35px_60px_-3px_rgba(84,199,236,0.03)] hover:translate-y-[-12px] transition-all cursor-pointer border bottom-1 border-textDefault p-6 mb-6 relative ${additionalClasses}`}>
      <div className="flex items-center justify-center w-50 absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {icon && <img src={icon} alt="Card Icon" className="w-full h-full max-w-[100px]" />}
      </div>
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-2 text-textSecondary">{title}</h2>
        <p className="text-gray-600 text-textDefault">{content}</p>
      </div>
    </div>
  );
};

export default Card;
