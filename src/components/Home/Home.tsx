import { Button, Container } from '@mui/material';
import Image, { StaticImageData } from 'next/image';

import { LeftRowIcon } from '@/Icons/NotificationIcon';
import Banner from '@/components/Banner/Banner';
import PopularCard from '@/components/PopularCard/PopularCard';
import RecommendedCard from '@/components/RecommendedCard/RecommendedCard';
import { useTranslations } from 'next-intl';
import Marquee from 'react-fast-marquee';
import bmw from '../../assets/bmw.png';
import byd from '../../assets/byd.png';
import CarImage from '../../assets/car.png';
import chevrolet from '../../assets/chevrolet.webp';
import isuzu from '../../assets/isuzu.png';
import kiya from '../../assets/kiya.png';
import lexus from '../../assets/lexus.png';
import lisang from '../../assets/lisang.png';
import mercedes from '../../assets/mercedes.png';
import porse from '../../assets/porse.png';
import tesla from '../../assets/tesla.webp';
import toyota from '../../assets/toyota.png';
import JoinUs from '../JoinUs/JoinUs';
import SearchForm from '../SearchForm/SearchForm';
import TopHost from '../TopHosts/TopHost';

export interface DataInterface {
  name: string;
  category: string;
  image: StaticImageData;
  volume: string;
  type: string;
  capacity: string;
  price: string;
  discountedPrice: string;
}

const data: DataInterface[] = [
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
  {
    name: 'Nissan GT - R',
    category: 'Sport',
    image: CarImage,
    volume: '80L',
    type: 'Manual',
    capacity: '2 People',
    price: '$100.00',
    discountedPrice: '$80.00',
  },
];

const marqueData = [
  { img: chevrolet, name: 'Chevrolet' },
  { img: toyota, name: 'Toyota' },
  { img: lisang, name: 'Lisang' },
  { img: tesla, name: 'Tesla' },
  { img: isuzu, name: 'Isuzu' },
  { img: mercedes, name: 'Mercedes' },
  { img: bmw, name: 'BMW' },
  { img: kiya, name: 'KIA' },
  { img: byd, name: 'BYD' },
  { img: porse, name: 'PORSE' },
  { img: lexus, name: 'LEXUS' },
];

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <>
      <Container>
        <div className="relative flex flex-col gap-10 py-5">
          <div className="flex flex-col gap-4 md:relative">
            <Banner />
            <SearchForm />
          </div>

          <div className="mt-4 flex w-full flex-col items-center gap-4 rounded-md p-2">
            <Marquee
              pauseOnHover={true}
              speed={30}
              direction="left"
              gradientWidth={100}
            >
              {marqueData?.map((el, index) => (
                <div
                  key={index}
                  className="mr-14 h-[60px] w-max overflow-hidden"
                >
                  <Image
                    src={el.img}
                    height="1000"
                    width="1000"
                    className="h-full w-full cursor-pointer rounded-xl object-cover grayscale filter transition duration-300 ease-in-out hover:grayscale-0"
                    alt={el.name}
                  />
                </div>
              ))}
            </Marquee>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between px-2">
              <h2>Popular Car</h2>
              <Button
                variant="text"
                size="small"
                sx={{
                  textTransform: 'none',
                  color: '#1d4ed8',
                  fontSize: '16px',
                  fontWeight: '600',
                  fontStyle: 'sans-serif',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {t('view_all')}
                <LeftRowIcon />
              </Button>
            </div>
            <PopularCard data={data} />
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-between px-2">
              <h2>Recommended Car</h2>
              <Button
                variant="text"
                size="small"
                sx={{
                  textTransform: 'none',
                  color: '#1d4ed8',
                  fontSize: '16px',
                  fontWeight: '600',
                  fontStyle: 'sans-serif',
                  letterSpacing: '1px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
              >
                {t('view_all')}
                <LeftRowIcon />
              </Button>
            </div>

            <RecommendedCard data={data} />
          </div>

          <div className="flex flex-col gap-5">
            <TopHost />
            <JoinUs />
          </div>
        </div>
      </Container>

      <div className="border-2 border-solid">
        <Container>hello world</Container>
      </div>
    </>
  );
}
