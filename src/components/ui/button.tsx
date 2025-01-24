import React from 'react';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ type, children, onClick, className = '' }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`cursor-pointer rounded-lg bg-black px-4 py-2 text-lg font-semibold transition-all ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
