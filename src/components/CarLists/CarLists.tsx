'use client';

import { DataInterface } from '@/interfaces/post.interface';
import { Grid2, useMediaQuery } from '@mui/material';
import { FC } from 'react';
import Card from '../Card/Card';
import SearchForm from '../SearchForm/SearchForm';

interface FilteredCardInterface {
  data: DataInterface[];
}

const CarLists: FC<FilteredCardInterface> = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 978px)'); // md breakpoint in Material UI

  return (
    <>
      <div className="flex w-full flex-col gap-4 px-4 py-4">
        {!isMobile && <SearchForm className="p-4 shadow-lg" />}

        <Grid2
          container
          spacing={1}
          sx={{ width: '100%' }}
        >
          {data.map((elem) => (
            <Grid2
              size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
              key={elem.name}
            >
              <Card elem={elem} />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </>
  );
};

export default CarLists;
