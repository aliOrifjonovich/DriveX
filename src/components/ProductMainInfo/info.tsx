import { BalloonIcon, LikeIcon } from '@/Icons';
import { CartIcon, DoorsIcon, FuelIcon, PersonIcon, SeatsIcon } from '@/Icons/NotificationIcon';
import { Divider, Grid2 } from '@mui/material';
import { useTranslations } from 'next-intl';

const productFeatures = [
  {
    title: '4 doors',
    icon: <DoorsIcon />,
  },
  {
    title: '5 seats',
    icon: <SeatsIcon />,
  },
  {
    title: 'Gasoline, Benzine',
    icon: <FuelIcon />,
  },
  {
    title: 'Minimum age: 25',
    icon: <PersonIcon />,
  },
  {
    title: 'Automation',
    icon: <BalloonIcon />,
  },
  {
    title: 'Deposit: 5000$',
    icon: <CartIcon />,
  },
];

const Info = () => {
  const t = useTranslations('HomePage');

//   const group1 = productFeatures.slice(0, 2);
//   const group2 = productFeatures.slice(2, 4);
//   const group3 = productFeatures.slice(4);

  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h1 className="font-sans text-[20px] md:text-[30px]">Nissan GT - R</h1>
          <h3 className="font-sans text-[16px] font-medium text-[#596780] md:text-[20px]">
            Premium Car
          </h3>
        </div>
        <span className="cursor-pointer pt-2">
          <LikeIcon />
        </span>
      </div>
      <Divider />

      <div className="flex flex-col gap-4">
        <h4>Main Features</h4>

        <div className="flex items-center justify-around gap-4">
          <Grid2
            container
            spacing={1}
            sx={{ width: '100%' }}
          >
            {productFeatures.map((feature, index) => (
              <Grid2
                size={{ xs: 12, sm: 6, md: 4 }}
                key={index}
                style={{ padding: '5px 0' }}
              >
                <div
                  key={index}
                  className="flex items-center gap-2"
                >
                  {feature.icon}
                  <p className="text-[#596780]">{feature.title}</p>
                </div>
              </Grid2>
            ))}
          </Grid2>

          {/* <div className="flex flex-col gap-4">
            {group1.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                {feature.icon}
                <p className="text-[#596780]">{feature.title}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {group2.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                {feature.icon}
                <p className="text-[#596780]">{feature.title}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {group3.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-2"
              >
                {feature.icon}
                <p className="text-[#596780]">{feature.title}</p>
              </div>
            ))}
          </div> */}
        </div>
      </div>
      <Divider />

      <div className="flex flex-col gap-2">
        <h4 className="font-sans text-[18px] font-normal text-[#596780]">Hosted by</h4>
        <div className="flex items-center gap-3">
          <div className="h-[70px] w-[70px]">
            <img
              src="https://images.turo.com/media/driver/tWtBeCH1Tnq3hnB7Y5M8MA.220x220.jpg"
              alt="car_owner"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-1">
            <h3 className="text-[20px]">Orient Rent Car</h3>
            <p className="text-[14px] text-[#596780]">Joined March 2025</p>
          </div>
        </div>
      </div>
      <Divider />
      <div className="flex items-center justify-between px-4">
        <div className="text-2xl font-normal">
          <div className="font-semibold text-black">
            {'$80'}/ <span className="text-xl font-medium text-secondary">day</span>
          </div>
          <p className="text- text-sm text-secondary">{'$100'}</p>
        </div>

        <button className="cursor-pointer rounded-md bg-black px-5 py-3 text-xs font-bold text-white hover:bg-white hover:text-black">
          {t('rent_now')}
        </button>
      </div>
    </div>
  );
};

export default Info;
