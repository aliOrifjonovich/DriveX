'use client';

import { CircleIcon } from '@/Icons/NotificationIcon';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import Appstore from '../../assets/appstore.svg';
import BannerImage from '../../assets/bannercar.png';
import Playstore from '../../assets/googleplay.svg';
import Heading from '../ui/heading';

const Banner: FC = () => {
  const t = useTranslations('HomePage');
  const bannerContent = (
    <div className="relative flex h-[350px] w-full flex-col-reverse items-center justify-center rounded-md bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 pb-5 pt-5 md:h-[530px] md:flex-row md:flex-row-reverse md:items-center md:justify-center">
      <div className="relative z-10 h-full w-2/3">
        <Image
          src={BannerImage}
          alt="banner image"
          layout="fill"
          objectPosition="bottom"
          objectFit="contain"
        />
      </div>
      <div className="absolute left-0 top-[-20px] z-0 h-full max-md:hidden">
        <CircleIcon />
      </div>
      <div className="z-10 flex w-full flex-col items-center justify-center text-white md:w-1/2">
        <div className="flex flex-col gap-0 md:gap-4">
          <div className="flex flex-col gap-1 pl-4 pr-4 md:gap-4 md:pl-8 md:pr-8">
            <Heading
              level={1}
              className="text-center text-xl font-semibold text-white md:text-left md:text-4xl md:leading-normal"
            >
              {t('banner_tag')}
            </Heading>
            <p className="pl-1 pr-1 text-center text-[14px] font-normal leading-7 md:text-left md:text-lg">
              {t('banner_p')}
            </p>
          </div>

          <div className="item-center flex justify-center gap-2 md:items-start md:justify-start md:gap-4 md:pl-8">
            <div className="cursor-pointer">
              <Image
                src={Appstore}
                alt="appstore"
                width={130}
                height={50}
                className="h-[50px] w-[80px] md:h-[70px] md:w-[130px]"
              />
            </div>

            <div className="cursor-pointer">
              <Image
                src={Playstore}
                alt="gogle-play"
                width={130}
                height={60}
                className="h-[50px] w-[80px] md:h-[70px] md:w-[130px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return <div className="w-full">{bannerContent}</div>;
};

export default Banner;
