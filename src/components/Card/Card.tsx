'use client';

import { BalloonIcon, GasolineIcon, LikeIcon, PeopleCapacity } from '@/Icons';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import { DataInterface } from '@/interfaces/post.interface';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import Login from '../Login/Login';
import Modal from '../Modal/Modal';
import Signup from '../Signup/Signup';

interface CardInterface {
  elem: DataInterface;
}

const Card: FC<CardInterface> = (props) => {
  const t = useTranslations('HomePage');
  const [open, setOpen] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const { elem } = props;
  const userId = typeof window !== 'undefined' && localStorage.getItem('userId');

  const checkUserLoggedIn = () => {
    if (!userId || userId === 'false') {
      setOpen(true);
    }
  };

  return (
    <>
      <CardContainer className="inter-var cursor-pointer p-1">
        <Link
          href={`/product/${elem.name}`}
          className="no-underline"
        >
          <CardBody className="group/card relative h-auto w-auto rounded-xl border border-solid border-black/[0.1] bg-gray-50 p-6">
            <CardItem
              translateZ="50"
              className="w-full"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-primary">{elem.name}</h4>

                  <span onClick={checkUserLoggedIn}>
                    <LikeIcon
                      className={`stroke-secondary text-sm ${open ? 'text-red-500' : 'text-gray-500'}`}
                    />
                  </span>
                </div>
                <p className="text-secondary">{elem.category}</p>
              </div>
            </CardItem>
            <CardItem
              translateZ="100"
              className="w-full"
            >
              <Image
                src={elem.image}
                height="1000"
                width="1000"
                className="h-60 w-full rounded-xl object-contain"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex items-center justify-between">
              <CardItem
                translateZ={20}
                className="flex items-center gap-1 rounded-xl pb-2 text-xs font-normal"
              >
                <GasolineIcon className="fill-secondary" />
                <p className="text-secondary">{elem.volume}</p>
              </CardItem>
              <CardItem
                translateZ={20}
                className="flex items-center gap-1 rounded-xl pb-2 text-xs font-normal"
              >
                <BalloonIcon className="fill-secondary" />
                <p className="text-secondary">{elem.type}</p>
              </CardItem>
              <CardItem
                translateZ={20}
                className="flex items-center gap-1 rounded-xl pb-2 text-xs font-normal"
              >
                <PeopleCapacity className="fill-secondary" />
                <p className="text-secondary">{elem.capacity}</p>
              </CardItem>
            </div>
            <div className="flex items-center justify-between">
              <CardItem
                translateZ={20}
                className="text-xl font-normal"
              >
                <div className="font-semibold text-black">
                  {elem.discountedPrice}/{' '}
                  <span className="text-sm font-medium text-secondary">day</span>
                </div>
                <p className="text- text-sm text-secondary">{elem.price}</p>
              </CardItem>

              <CardItem
                translateZ={20}
                as="button"
                className="cursor-pointer rounded-xl bg-black px-4 py-2 text-xs font-bold text-white hover:bg-white hover:text-black"
              >
                {t('rent_now')}
              </CardItem>
            </div>
          </CardBody>
        </Link>
      </CardContainer>

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

export default Card;
