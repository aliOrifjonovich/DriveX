import { LeftRowIcon } from '@/Icons/NotificationIcon';
import Banner from '@/components/Banner/Banner';
import PopularCard from '@/components/PopularCard/PopularCard';
import RecommendedCard from '@/components/RecommendedCard/RecommendedCard';
import { marqueData } from '@/data/StaticDatas';
import { DataInterface } from '@/interfaces/post.interface';
import { Button, Container } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import CarImage from '../../assets/car.png';
import Blogs from '../Blogs/Blogs';
import JoinUs from '../JoinUs/JoinUs';
import SearchForm from '../SearchForm/SearchForm';
import TopHost from '../TopHosts/TopHost';

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

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <Container>
      <div className="relative flex flex-col gap-10 py-5">
        <div className="flex flex-col gap-4 md:relative">
          <Banner />
          <SearchForm  className={"md:absolute md:bottom-[-32px] md:left-1/2 md:w-[95%] md:-translate-x-1/2 md:py-2"}/>
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-4 rounded-md p-2">
          <Marquee
            pauseOnHover={true}
            speed={30}
            direction="left"
            gradientWidth={100}
          >
            {marqueData?.carbrands?.map((el, index) => (
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
            <h2 className="max-md:text-2xl">{t('popular_cars')}</h2>
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
                '@media (max-width: 768px)': {
                  fontSize: '12px',
                },
              }}
            >
              {t('view_all')}
              <LeftRowIcon />
            </Button>
          </div>
          <PopularCard data={data} />
        </div>

        <div className="max-md:g-[14px] flex w-full items-center justify-evenly gap-4 p-2 max-lg:overflow-x-auto max-md:overflow-x-auto">
          {marqueData?.carTypes?.map((el, index) => (
            <div
              className="flex cursor-pointer flex-col-reverse items-center gap-2 rounded-lg bg-white p-2 shadow-md max-md:gap-1"
              key={index}
            >
              <h2>{el.name}</h2>
              <div className="h-[100px] w-max max-md:h-[80px]">
                <Image
                  src={el.img}
                  height="1000"
                  width="1000"
                  className="h-full w-full rounded-xl object-cover"
                  alt={el.name}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex justify-between px-2">
            <h2 className="max-md:text-xl">{t('recommended_cars')}</h2>
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
                width: 'max-content',
                '@media (max-width: 768px)': {
                  fontSize: '12px',
                },
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
        <Blogs numbersofposts={3} />
      </div>
    </Container>
  );
}
