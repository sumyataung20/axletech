import React from 'react';

const Input = ({ icon, type, placeholder, classnames, name, value, onChange }) => {
  return (
    <div className="relative">
      <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        {icon}
      </span>
      <input
        type={type} // Set the input type accordingly
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full pl-10 pr-4 py-2 border bg-transparent border-textSecondary rounded-md focus:outline-none ${classnames} outline-none text-[18px] text-textDefault`}
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default Input;
