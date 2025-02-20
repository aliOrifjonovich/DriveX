'use client';

import { BalloonIcon, LikeIcon } from '@/Icons';
import {
  BackCameraIcon,
  BluetoothIcon,
  CartIcon,
  DoorsIcon,
  FuelIcon,
  HeatedSeatsIcon,
  PersonIcon,
  PlayIcon,
  SeatsIcon,
  UsbChargeIcon,
  USBIcon,
} from '@/Icons/NotificationIcon';
import { Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

const productFeatures = [
  { title: '4 doors', icon: <DoorsIcon /> },
  { title: '5 seats', icon: <SeatsIcon /> },
  { title: 'Gasoline, Benzine', icon: <FuelIcon /> },
  { title: 'Minimum age: 25', icon: <PersonIcon /> },
  { title: 'Automation', icon: <BalloonIcon /> },
  { title: 'Deposit: 5000$', icon: <CartIcon /> },
  { title: 'Android Auto', icon: <PlayIcon /> },
  { title: 'Apple CarPlay', icon: <PlayIcon /> },
  { title: 'Backup camera', icon: <BackCameraIcon /> },
  { title: 'Bluetooth', icon: <BluetoothIcon /> },
  { title: 'Heated seats', icon: <HeatedSeatsIcon /> },
  { title: 'USB charger', icon: <UsbChargeIcon /> },
  { title: 'USB Icon', icon: <USBIcon /> },
];

const Info = () => {
  const t = useTranslations('HomePage');
  const [showAll, setShowAll] = useState(false);

  const visibleFeatures = showAll ? productFeatures : productFeatures.slice(0, 6);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-sans text-[20px] md:text-[30px]">Nissan GT - R</h1>
          <h3 className="font-sans text-[16px] font-medium text-[#596780] md:text-[20px]">
            Premium Car
          </h3>
        </div>
        <span className="cursor-pointer pt-2">
          <LikeIcon />
        </span>
      </div>
      <Divider />

      <div className="flex flex-col gap-2">
        <h4>Main Features</h4>

        <motion.div
          className="grid grid-cols-2 gap-4 md:grid-cols-3"
          initial={{ height: 'auto' }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
        >
          {visibleFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              {feature.icon}
              <p className="text-[#596780]">{feature.title}</p>
            </motion.div>
          ))}
        </motion.div>

        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-1 cursor-pointer self-start rounded-md bg-transparent p-1 text-[14px] font-semibold transition-all hover:bg-gray-300"
        >
          {showAll ? 'Less' : 'More'}
        </button>
      </div>
      <Divider />

      <div className="flex flex-col gap-2">
        <h4 className="font-sans text-[18px] font-normal text-[#596780]">Hosted by</h4>
        <div className="flex items-center gap-3">
          <div className="h-[70px] w-[70px]">
            <img
              src="https://images.turo.com/media/driver/tWtBeCH1Tnq3hnB7Y5M8MA.220x220.jpg"
              alt="car_owner"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[20px]">Orient Rent Car</h3>
            <p className="text-[14px] text-[#596780]">Joined March 2025</p>
          </div>
        </div>
      </div>
      <Divider />

      <div className="flex items-center justify-between px-4">
        <div className="text-2xl font-normal">
          <div className="font-semibold text-black">
            {'$80'}/ <span className="text-xl font-medium text-secondary">day</span>
          </div>
          <p className="text-sm text-secondary">{'$100'}</p>
        </div>

        <button className="cursor-pointer rounded-md bg-black px-5 py-3 text-xs font-bold text-white hover:bg-white hover:text-black">
          {t('rent_now')}
        </button>
      </div>
    </div>
  );
};

export default Info;
