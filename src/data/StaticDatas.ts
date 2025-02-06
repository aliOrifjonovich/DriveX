import { FacebookIcon, InstagramIcon, TwitterIcon } from '@/Icons/NotificationIcon';
import bmw from '../assets/bmw.png';
import byd from '../assets/byd.png';

import { Posts } from '@/interfaces/post.interface';
import chevrolet from '../assets/chevrolet.webp';
import crossovers from '../assets/crossovers.png';
import isuzu from '../assets/isuzu.png';
import kiya from '../assets/kiya.png';
import lexus from '../assets/lexus.png';
import lisang from '../assets/lisang.png';
import mercedes from '../assets/mercedes.png';
import minivans from '../assets/minivans.png';
import pickup from '../assets/pickups.png';
import porse from '../assets/porse.png';
import premium from '../assets/premium.png';
import sport from '../assets/sport.png';
import standart from '../assets/standart.png';
import tesla from '../assets/tesla.webp';
import toyota from '../assets/toyota.png';

export const marqueData = {
  carbrands: [
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
  ],
  carTypes: [
    {
      name: 'Standart',
      img: standart,
    },
    {
      name: 'Premium',
      img: premium,
    },
    {
      name: 'Crossovers',
      img: crossovers,
    },
    {
      name: 'Sport Cars',
      img: sport,
    },
    {
      name: 'Minivans',
      img: minivans,
    },
    {
      name: 'Pickups',
      img: pickup,
    },
  ],

  capasity: [
    {
      value: 2,
    },
    {
      value: 4,
    },
    {
      value: 6,
    },
    {
      value: 8,
    },
  ],
  fuel: [
    {
      value: 'Petrol',
    },
    {
      value: 'Diesel',
    },
    {
      value: 'Hybrid',
    },
    {
      value: 'Electric',
    },
  ],
  transmission: [
    {
      value: 'Automatic',
    },
    {
      value: 'Manual',
    },
  ],
};

export const SocailMedia = [
  {
    icon: FacebookIcon,
    href: '/',
  },
  {
    icon: TwitterIcon,
    href: '/',
  },
  {
    icon: InstagramIcon,
    href: '/',
  },
];

export const posts: Posts[] = [
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    bannerImage: premium,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    bannerImage: premium,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    bannerImage: premium,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    bannerImage: premium,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
  {
    id: 1,
    title: 'Boost your conversion rate',
    href: '#',
    bannerImage: premium,
    description:
      'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    category: { title: 'Marketing', href: '#' },
  },
];
