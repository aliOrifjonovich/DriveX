'use client';

import { DataInterface } from '@/app/page';
import { Grid2 } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';
import CardSkeleton from '../Skeleton/CardSkeleton';
import Button from '../ui/button';

interface RecommendedCardInterface {
  data: DataInterface[];
}
const RecommendedCard: FC<RecommendedCardInterface> = (props) => {
  const { data } = props;

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

  if (!load) {
    return (
      <Grid2
        container
        spacing={2}
      >
        {[1, 2, 3, 4].map((el) => {
          return (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={el}
            >
              <CardSkeleton />
            </Grid2>
          );
        })}
      </Grid2>
    );
  }

  return (
    <Grid2
      container
      spacing={1}
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
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            key={elem.name}
          >
            <Card elem={elem} />
          </Grid2>
        );
      })}
      <Button
        type="submit"
        className="flex h-[45px] w-max cursor-pointer items-center justify-center rounded-lg border-solid border-black bg-white text-base text-black hover:bg-black hover:text-white md:h-[35px]"
      >
        See More
      </Button>
    </Grid2>
  );
};

export default RecommendedCard;
