'use client';

import { DataInterface } from '@/app/page';
import { Grid2 } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import Card from '../Card/Card';

interface RecommendedCardInterface {
  data: DataInterface[];
}
const RecommendedCard: FC<RecommendedCardInterface> = (props) => {
  const { data } = props;

  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  }, []);

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
    </Grid2>
  );
};

export default RecommendedCard;
