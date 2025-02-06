import { AppleIcon, CancelIcon, EmailIcon, GoogleIcon, PhoneIcon } from '@/Icons/NotificationIcon';
import React, { useState } from 'react';
import Button from '../ui/button';
import Heading from '../ui/heading';
import Input from '../ui/input';
import MuiPhone from '../ui/muiPhone';

interface LoginProps {
  setOpen: (value: boolean) => void;
  setOpenSignup: (value: boolean) => void;
}

const Login: React.FC<LoginProps> = ({ setOpen, setOpenSignup }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [useEmailInput, setUseEmailInput] = useState(true);
  const [inputValue, setInputValue] = useState<string>('');

  const handlePasswordToggle = () => {
    setPasswordVisible((prev) => !prev);
  };

  const switchToSignupModal = () => {
    setOpen(false);
    setOpenSignup(true);
  };

  const toggleInputType = () => {
    setUseEmailInput((prev) => !prev);
    setInputValue('');
  };

  return (
    <div className="bg-primary-dark relative flex flex-col gap-8 p-4 sm:w-[250px] sm:p-4 md:w-[550px] md:gap-5 md:p-8">
      <span
        className="absolute right-2 top-4 cursor-pointer"
        onClick={() => setOpen(false)}
      >
        <CancelIcon />
      </span>

      <Heading className="text-black">Welcome back</Heading>

      <form className="flex flex-col gap-8">
        {useEmailInput ? (
          <MuiPhone
            value={inputValue}
            onChange={(phone) => setInputValue(phone)}
          />
        ) : (
          <Input
            type="email"
            placeholder="E-mail"
            value={inputValue}
            onChange={(value) => setInputValue(value)}
            className="w-full rounded-lg border-2 border-solid border-[#C3D4E9] bg-transparent p-4 text-base text-black placeholder:font-medium placeholder:text-[#616b74] focus:border-black focus:outline-none"
          />
        )}
        <Input
          type={passwordVisible ? 'text' : 'password'}
          placeholder="Password"
          isPassword
          showPassword={passwordVisible}
          togglePasswordVisibility={handlePasswordToggle}
          className="w-full rounded-lg border-2 border-solid border-[#C3D4E9] bg-transparent p-4 text-base text-black placeholder:font-medium placeholder:text-[#616b74] focus:border-black focus:outline-none"
        />
        <Button
          type="submit"
          className="bg-black text-white hover:bg-[#616b74]"
        >
          Login
        </Button>
      </form>

      <div className="links flex flex-col gap-4">
        <span className="cursor-pointer text-center font-semibold text-white">
          Forgot Password?
        </span>

        <span className="bg-primary-dark px-1 text-center text-sm font-normal text-[#616b74]">
          or continue with
        </span>

        <div className="flex flex-col gap-2">
          {[
            {
              Icon: useEmailInput ? EmailIcon : PhoneIcon,
              label: useEmailInput ? 'Email' : 'Phone',
              onClick: toggleInputType,
            },
            { Icon: GoogleIcon, label: 'Google', onClick: () => {} },
            { Icon: AppleIcon, label: 'Apple', onClick: () => {} },
          ].map(({ Icon, label, onClick }) => (
            <Button
              key={label}
              type="button"
              onClick={onClick}
              className="flex w-full items-center justify-center gap-4 border border-[#000] bg-white text-black"
            >
              <Icon />
              {label}
            </Button>
          ))}
        </div>

        <span
          className="cursor-pointer text-center text-[#593cfb]"
          onClick={switchToSignupModal}
        >
          Don&apos;t have an account? Sign up
        </span>
      </div>
    </div>
  );
};

export default Login;
