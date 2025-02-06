'use client';
import { LikeIcon } from '@/Icons';
import { NotificationIcon } from '@/Icons/NotificationIcon';
import HamburgerMenu from '@/components/HamburgerMenu/HamburgerMenu';
import LanguageSelection from '@/components/LanguageSelection/LanguageSelection';
import Login from '@/components/Login/Login';
import Modal from '@/components/Modal/Modal';
import Signup from '@/components/Signup/Signup';
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../assets/fontbolt.png';
const Header = () => {
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const userId = typeof window !== 'undefined' && localStorage.getItem('userId');

  const checkUserLoggedIn = () => {
    if (!userId || userId === 'false') {
      setOpen(true);
    }
  };

  return (
    <>
      <Container>
        <header className="flex items-center justify-between py-4">
          <Link href="/">
            <div className="flex h-[50px] w-[150px] items-center justify-between md:w-[250px]">
              <Image
                src={logo}
                alt="logo"
                className="h-full w-full object-contain"
              />
            </div>
          </Link>
          <div className="flex items-start justify-center gap-3">
            <div className="hidden md:block">
              <LanguageSelection />
            </div>
            <span
              className="hidden cursor-pointer rounded-full border border-[#C3D4E9] px-3 py-2 duration-300 ease-in-out hover:bg-[#C3D4E9] min-[380px]:block"
              onClick={checkUserLoggedIn}
            >
              <LikeIcon />
            </span>
            <div
              className="relative hidden cursor-pointer rounded-full border border-[#C3D4E9] p-2 px-3 py-2 duration-300 ease-in-out hover:bg-[#C3D4E9] min-[380px]:block"
              onClick={checkUserLoggedIn}
            >
              <span className="absolute right-[-2px] top-[-2px] h-3 w-3 rounded-full bg-[#FF4423]"></span>
              <NotificationIcon />
            </div>
            <HamburgerMenu
              setOpen={setOpen}
              setOpenSignup={setOpenSignup}
              userId={userId}
            />
          </div>
        </header>
      </Container>

      <Modal
        open={open}
        handleClose={() => setOpen(false)}
      >
        <Login
          setOpen={setOpen}
          setOpenSignup={setOpenSignup}
        />
      </Modal>

      <Modal
        open={openSignup}
        handleClose={() => setOpenSignup(false)}
      >
        <Signup
          setOpen={setOpen}
          setOpenSignup={setOpenSignup}
        />
      </Modal>
    </>
  );
};

export default Header;
