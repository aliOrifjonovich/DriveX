import { SocailMedia } from '@/data/StaticDatas';
import { Container } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import logo from '../assets/fontbolt.png';

const Footer = () => {
  const t = useTranslations('Footer');

  const FooterPages = [
    {
      name: t('about'),
      pages: [
        { page: t('about'), href: '/about' },
        { page: t('news'), href: '/blog' },
        { page: t('contact_us'), href: '/contact' },
        { page: t('privacy_policy'), href: '/privacy-policy' },
        { page: t('terms_and_conditions'), href: '/terms-and-conditions' },
      ],
    },
    {
      name: t('partner_with_priceline'),
      pages: [
        { page: t('add_your_cars'), href: '/' },
        { page: t('drivex_partner_solutions'), href: '/' },
        { page: t('advertisement'), href: '/' },
      ],
    },
    {
      name: t('connect_with_drivex'),
      pages: [
        { page: t('drivex_for_ios'), href: '/' },
        { page: t('drivex_for_android'), href: '/' },
      ],
    },
  ];

  return (
    <Container>
      <footer className="w-full bg-white dark:bg-gray-900">
        <div className="p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 flex flex-col gap-3 md:mb-0">
              <a
                href="/"
                className="h-auto w-60"
              >
                <Image
                  src={logo}
                  className="h-full w-full object-contain"
                  alt="FlowBite Logo"
                />
              </a>
              <p className="w-[200px] text-wrap break-words text-sm md:w-[300px] lg:w-[400px]">
                {t('footer_text')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
              {FooterPages.map((item, index) => (
                <div
                  key={index}
                  className="px-4"
                >
                  <h2 className="mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                    {item.name}
                  </h2>
                  <ul className="font-medium text-gray-500 dark:text-gray-400">
                    {item.pages.map((page, index) => (
                      <li
                        className="mb-4 list-none"
                        key={index}
                      >
                        <a
                          href={page.href}
                          className="capitalize text-gray-500 no-underline transition-all hover:text-black"
                        >
                          {page.page}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
              © 2023{' '}
              <a
                href="/"
                className="text-gray-500 no-underline"
              >
                DriveX™
              </a>
              {t('all_rights_reserved')}
            </span>
            <div className="mt-4 flex gap-4 sm:mt-0 sm:justify-center">
              {SocailMedia.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="p-1 text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                  <item.icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </Container>
  );
};

export default Footer;
