import { AppleIcon, CancelIcon, EmailIcon, GoogleIcon, PhoneIcon } from '@/Icons/NotificationIcon';
import React, { useState } from 'react';

import { RegisterProps } from '@/interfaces/ModalInterface';
import Button from '../ui/button';
import Heading from '../ui/heading';
import Input from '../ui/input';
import MuiPhone from '../ui/muiPhone';

const Signup: React.FC<RegisterProps> = ({ setOpen, setOpenSignup }) => {
  const [inputData, setInputData] = useState({
    type: 'phone',
    value: '',
  });

  const [passwordVisibility, setPasswordVisibility] = useState({
    createPassword: false,
    confirmPassword: false,
  });

  const togglePasswordVisibility = (field: 'createPassword' | 'confirmPassword') => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleInputChange = (value: string) => {
    setInputData((prev) => ({
      ...prev,
      value,
    }));
  };

  const toggleInputType = () => {
    setInputData((prev) => ({
      type: prev.type === 'phone' ? 'email' : 'phone',
      value: '',
    }));
  };

  return (
    <div className="bg-primary-dark relative flex flex-col gap-8 p-4 sm:w-[250px] sm:p-4 md:w-[550px] md:gap-5 md:p-8">
      <span
        className="absolute right-2 top-4 cursor-pointer"
        onClick={() => setOpenSignup(false)}
      >
        <CancelIcon />
      </span>

      <Heading className="text-black">Create an account</Heading>

      <form className="flex flex-col gap-8">
        {inputData.type === 'phone' ? (
          <MuiPhone
            value={inputData.value}
            onChange={handleInputChange}
          />
        ) : (
          <Input
            type="email"
            placeholder="E-mail"
            value={inputData.value}
            onChange={handleInputChange}
            className="w-full rounded-lg border-2 border-solid border-[#C3D4E9] bg-transparent p-4 text-base text-black placeholder:font-medium placeholder:text-[#616b74] focus:border-black focus:outline-none"
          />
        )}

        <Input
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border-2 border-solid border-[#C3D4E9] bg-transparent p-4 text-base text-black placeholder:font-medium placeholder:text-[#616b74] focus:border-black focus:outline-none"
        />

        <Input
          type={passwordVisibility.createPassword ? 'text' : 'password'}
          placeholder="Create New Password"
          isPassword
          showPassword={passwordVisibility.createPassword}
          togglePasswordVisibility={() => togglePasswordVisibility('createPassword')}
          className="w-full rounded-lg border-2 border-solid border-[#C3D4E9] bg-transparent p-4 text-base text-black placeholder:font-medium placeholder:text-[#616b74] focus:border-black focus:outline-none"
        />

        <Input
          type={passwordVisibility.confirmPassword ? 'text' : 'password'}
          placeholder="Confirm Password"
          isPassword
          showPassword={passwordVisibility.confirmPassword}
          togglePasswordVisibility={() => togglePasswordVisibility('confirmPassword')}
          className="w-full rounded-lg border-2 border-solid border-[#C3D4E9] bg-transparent p-4 text-base text-black placeholder:font-medium placeholder:text-[#616b74] focus:border-black focus:outline-none"
        />

        <Button
          type="submit"
          className="bg-[#000] text-white hover:bg-[#616b74]"
        >
          Sign up
        </Button>
      </form>

      <div className="links flex flex-col gap-4">
        <span className="cursor-pointer text-center font-semibold text-black">
          Forgot Password?
        </span>
        <span className="bg-primary-dark px-1 text-center text-sm font-normal text-[#616b74]">
          or continue with
        </span>
        <div className="flex flex-col gap-2">
          {[
            {
              Icon: inputData.type === 'phone' ? PhoneIcon : EmailIcon,
              label: inputData.type,
              onClick: toggleInputType,
            },
            { Icon: GoogleIcon, label: 'Google', onClick: () => {} },
            { Icon: AppleIcon, label: 'Apple', onClick: () => {} },
          ].map(({ Icon, label, onClick }) => (
            <Button
              key={label}
              type="button"
              onClick={onClick}
              className="flex items-center justify-center gap-3 border border-[#000] bg-white text-base text-black"
            >
              <Icon />
              {label}
            </Button>
          ))}
        </div>
        <span
          className="cursor-pointer text-center text-[#593cfb]"
          onClick={() => {
            setOpen(true);
            setOpenSignup(false);
          }}
        >
          Do you have an account? Login
        </span>
      </div>
    </div>
  );
};

export default Signup;
