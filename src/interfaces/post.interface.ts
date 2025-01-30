import { StaticImageData } from 'next/image';

export interface PostInterface {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface PostCreateInterface {
  title: string;
  content: string;
}

export interface PostUpdateInterface {
  title?: string;
  content?: string;
}

export interface Posts {
  id: number;
  title: string;
  href: string;
  bannerImage: StaticImageData;
  description: string;
  date: string;
  datetime: string;
  category: { title: string; href: string };
}

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
