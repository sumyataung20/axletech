import React from 'react';

const Textarea = ({ placeholder, classnames, name, value, onChange }) => {
  return (
    <div className="relative">
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full pl-4 pr-4 py-2 border bg-transparent border-textSecondary rounded-md focus:outline-none ${classnames} outline-none text-[18px] text-textDefault`}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Textarea;
