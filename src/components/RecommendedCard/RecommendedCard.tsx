'use client';

import { Grid2 } from '@mui/material';
import { FC } from 'react';
import Card from '../Card/Card';
import { DataInterface } from '../Home/Home';

interface RecommendedCardInterface {
  data: DataInterface[];
}
const RecommendedCard: FC<RecommendedCardInterface> = (props) => {
  const { data } = props;

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
