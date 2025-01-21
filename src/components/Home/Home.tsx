import { Button } from '@mui/material';
import { StaticImageData } from 'next/image';

import Banner from '@/components/Banner/Banner';
import PopularCard from '@/components/PopularCard/PopularCard';
import RecommendedCard from '@/components/RecommendedCard/RecommendedCard';
import { useTranslations } from 'next-intl';
import CarImage from '../../assets/car.png';
import SearchForm from '../SearchForm/SearchForm';

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

export default function Home() {
  const t = useTranslations('HomePage');
  return (
    <div className="relative flex flex-col gap-10 py-5">
      <div className="flex flex-col gap-4 md:relative">
        <Banner />
        <SearchForm />
      </div>

      <div className="flex flex-col gap-1">
        <div className="flex justify-between">
          <h2>Popular Car</h2>
          <Button
            variant="text"
            size="small"
            sx={{ textTransform: 'none' }}
          >
            {t('view_all')}
          </Button>
        </div>
        <PopularCard data={data} />
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <h2>Recommended Car</h2>
          <Button
            variant="text"
            size="small"
            sx={{ textTransform: 'none' }}
          >
            {t('view_all')}
          </Button>
        </div>

        <RecommendedCard data={data} />
      </div>
    </div>
  );
}
