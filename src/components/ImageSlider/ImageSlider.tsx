'use client';
import { LikeIcon } from '@/Icons';
import { CancelIcon } from '@/Icons/NotificationIcon';
import { useState } from 'react';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';
import Signup from '../Signup/Signup';

const images = [
  {
    id: 1,
    url: 'https://orientrentcar.uz/wp-content/uploads/2024/10/1-2-2.jpg',
  },
  {
    id: 2,
    url: 'https://orientrentcar.uz/wp-content/uploads/2024/10/2-2-2.jpg',
  },
  {
    id: 3,
    url: 'https://orientrentcar.uz/wp-content/uploads/2024/10/3-2-2.jpg',
  },
  {
    id: 4,
    url: 'https://orientrentcar.uz/wp-content/uploads/2024/10/4-2-2.jpg',
  },
  {
    id: 5,
    url: 'https://orientrentcar.uz/wp-content/uploads/2024/10/toyota-salon.png',
  },
  {
    id: 6,
    url: 'https://safesearch.pixabay.com/get/g59e47668bd500b87f9f0e82722814b77ac79878f727479a7af2460ca13b508d4b2341196913244d22a60e508a561b5ec_340.jpg',
  },
];

const ImageSlider = () => {
  const [open, setOpen] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const remainingImages = images.length - 4;
  const userId = typeof window !== 'undefined' && localStorage.getItem('userId');

  const checkUserLoggedIn = () => {
    if (!userId || userId === 'false') {
      setOpenLogin(true);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="flex w-full flex-col gap-2">
          <div
            className="h-full w-full"
            onClick={() => setOpen(true)}
          >
            <img
              src={images[0].url}
              width={500}
              height={500}
              alt="product"
              className="h-full w-full rounded-lg object-contain"
            />
          </div>
          <div
            className="hidden md:flex md:gap-2"
            onClick={() => setOpen(true)}
          >
            {images.slice(1, 4).map((image) => (
              <div
                key={image.id}
                className="h-full w-full"
              >
                <img
                  src={image.url}
                  alt="product"
                  className="h-full w-full rounded-lg object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="absolute bottom-2 right-2 cursor-pointer rounded-lg border-none bg-white px-4 py-2 font-bold text-black md:bottom-4 md:right-4"
        >
          View other {remainingImages} images
        </button>
      </div>

      <Modal
        open={open}
        handleClose={() => setOpen(false)}
      >
        <div className="flex h-full w-full flex-col gap-1">
          <div className="z-1000 sticky top-0 flex items-center justify-between bg-white/50 p-2 backdrop-blur-md">
            <h2 className="text-center">CAR NAME 1.0 </h2>
            <div className="flex items-center gap-4">
              <span
                className="cursor-pointer"
                onClick={checkUserLoggedIn}
              >
                <LikeIcon />
              </span>
              <span
                className="cursor-pointer"
                onClick={() => setOpen(false)}
              >
                <CancelIcon />
              </span>
            </div>
          </div>
          {images.map((image) => (
            <div
              key={image.id}
              className="h-full w-full"
            >
              <img
                src={image.url}
                alt="product"
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </Modal>
      <Modal
        open={openLogin}
        handleClose={() => setOpenLogin(false)}
      >
        <Login
          setOpen={setOpenLogin}
          setOpenSignup={setOpenSignup}
        />
      </Modal>

      <Modal
        open={openSignup}
        handleClose={() => setOpenSignup(false)}
      >
        <Signup
          setOpen={setOpenLogin}
          setOpenSignup={setOpenSignup}
        />
      </Modal>
    </>
  );
};

export default ImageSlider;
