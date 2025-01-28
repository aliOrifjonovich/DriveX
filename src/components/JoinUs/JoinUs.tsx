'use client';
import Image from 'next/image';
import carimage from '../../assets/Car finance.gif';
import Button from '../ui/button';

export default function JoinUs() {
  return (
    <div className="flex w-full items-center justify-between gap-10 rounded-md bg-white p-4 shadow-md">
      <div className="h-[250px] w-[250px] flex-shrink-0">
        <Image
          src={carimage}
          height="180"
          width="200"
          className="h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
          alt="top-host-image"
        />
      </div>

      <div className="flex-grow">
        <h1 className="mb-2 text-[23px]">
          O‘z avtomobillaringizni ijaraga taklif qiling – bizning platformamizda joylashtiring!
        </h1>
        <p className="text-[18px]">
          Platformamizga avtomobillaringizni qo‘shing va mijozlar bazangizni kengaytiring. Tezkor
          jarayon, keng ko‘lamli auditoriya va har bir bosqichda yordam sizni kutmoqda!
        </p>
      </div>

      <div className="flex-shrink-0">
        <Button
          type={'submit'}
          onClick={() => {
            window.open('https://t.me/YourTelegramUsername', '_blank');
          }}
          className="text-md border-none bg-blue-700 text-white"
        >
          Biz bilan bog'laning
        </Button>
      </div>
    </div>
  );
}
