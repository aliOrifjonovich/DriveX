import { LeftRowIcon } from '@/Icons/NotificationIcon';
import { Button, Grid2 } from '@mui/material';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

const data = [
  {
    name: 'Car Renting Company 1',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    rating: 4.5,
    reviews: 100,
  },
  {
    name: 'Car Renting Company 2',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    rating: 4.5,
    reviews: 100,
  },
  {
    name: 'Car Renting Company 2',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    rating: 4.5,
    reviews: 100,
  },
  {
    name: 'Car Renting Company 2',
    image:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    rating: 4.5,
    reviews: 100,
  },
];
export default function TopHost() {
  const t = useTranslations('HomePage');
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between px-2">
        <h2>{t('top_hosts')}</h2>
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
      <Grid2
        container
        spacing={2}
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {data.map((elem) => {
          return (
            <Grid2
              size={{ xs: 12, sm: 6 }}
              key={elem.name}
            >
              <div className="flex cursor-pointer items-center justify-between rounded-xl bg-white p-3 shadow-md transition duration-300 ease-in-out md:p-4">
                <div>
                  <h3 className="text-base md:text-lg">{elem.name}</h3>
                </div>
                <div className="h-[134px] w-[134px]">
                  <Image
                    src={elem.image}
                    height="1000"
                    width="1000"
                    className="h-60 h-full w-full rounded-xl object-cover group-hover/card:shadow-xl"
                    alt="top-host-image"
                  />
                </div>
              </div>
            </Grid2>
          );
        })}
      </Grid2>
    </div>
  );
}
