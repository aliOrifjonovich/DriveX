'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import carimage from '../../assets/Car finance.gif';
import Button from '../ui/button';

export default function JoinUs() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex w-full flex-col items-center justify-between gap-6 rounded-md bg-white p-4 shadow-md md:flex-row md:gap-10">
      {/* Rasm qismi */}
      <div className="flex w-full flex-shrink-0 justify-center md:w-[250px] md:justify-start">
        <Image
          src={carimage}
          height="180"
          width="200"
          className="h-[200px] w-[200px] rounded-xl object-cover group-hover/card:shadow-xl md:h-[250px] md:w-[250px]"
          alt="top-host-image"
        />
      </div>

      <div className="w-max flex-grow text-center md:text-left">
        <h1 className="mb-2 hidden text-[23px] lg:block">{t('main_title_1')}</h1>
        <p className="hidden text-[18px] lg:block">{t('main_text_1')}</p>

        <h1 className="mb-2 text-[18px] lg:hidden">{t('main_title_2')}</h1>
        <p className="text-[16px] lg:hidden">{t('main_text_2')}</p>
      </div>

      <div className="flex justify-center md:w-1/3 md:justify-end">
        <Button
          type={'submit'}
          onClick={() => {
            window.open('https://t.me/YourTelegramUsername', '_blank');
          }}
          className="text-md w-full border-none bg-blue-700 px-6 py-2 text-white md:w-auto"
        >
          {t('join_us')}
        </Button>
      </div>
    </div>
  );
}
