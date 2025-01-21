import { CloseEyeIcon, OpenEyeIcon } from '@/Icons/NotificationIcon';
import React from 'react';

interface InputProps {
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (value: string) => void;
  isPassword?: boolean;
  showPassword?: boolean;
  togglePasswordVisibility?: () => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  onChange,
  isPassword = false,
  showPassword = false,
  togglePasswordVisibility,
  className = '',
}) => {
  return (
    <div className={`relative rounded-lg transition-all`}>
      <input
        type={isPassword && showPassword ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={className}
      />
      {isPassword && togglePasswordVisibility && (
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-1/2 -translate-y-1/2 transform cursor-pointer"
        >
          {showPassword ? <OpenEyeIcon /> : <CloseEyeIcon />}
        </span>
      )}
    </div>
  );
};

export default Input;
