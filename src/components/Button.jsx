import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Button({
  type = 'button',
  to,
  className = '',
  processing,
  children,
  onClick
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    }

    if (to) {
      navigate(to); // Use React Router's useNavigate for client-side navigation
    }
  };

  if (to) {
    return (
      <Link to={to} className={className}>
        <button
          type={type}
          className={`inline-flex items-center px-4 py-2 xs:px-2 xs:py-2 bg-primary border border-transparent rounded-md text-sm text-textDefault active:bg-secondary hover:bg-secondary hover:shadow-[0_35px_60px_-15px_rgba(252,252,252,0.3)] transition ease-in-out duration-150 ${processing && 'opacity-25'
            } ` + className}
          disabled={processing}
          onClick={handleClick}
        >
          {children}
        </button>
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`inline-flex items-center px-4 py-2 xs:px-2 xs:py-2 bg-primary border border-transparent rounded-md text-sm text-textDefault active:bg-secondary hover:bg-secondary hover:shadow-[0_35px_60px_-15px_rgba(252,252,252,0.3)] transition ease-in-out duration-150 ${processing && 'opacity-25'
        } ` + className}
      disabled={processing}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}


