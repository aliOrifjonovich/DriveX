'use client';

import { FilterIcon, MapIcon, SearchIcon } from '@/Icons/NotificationIcon';
import { DataInterface } from '@/interfaces/post.interface';
import { useMediaQuery } from '@mui/material';
import { FC, useState } from 'react';
import CarLists from '../CarLists/CarLists';
import MobileModel from '../MobileModel/MobileModel';
import SearchForm from '../SearchForm/SearchForm';
import SideBarFilters from '../SideBarFilters/SideBarFilters';

interface FilterPageInterface {
  data: DataInterface[];
}
const FilterPage: FC<FilterPageInterface> = ({ data }) => {
  const isMobile = useMediaQuery('(max-width: 978px)');
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  return (
    <>
      <div className="max-md:g-4 flex flex-row max-md:flex max-md:flex-col">
        <div className="w-full md:w-1/5">
          {isMobile ? (
            <div className="flex w-full items-center p-2">
              <div
                className="flex w-2/3 cursor-pointer flex-row items-center gap-3 rounded-md border border-solid border-gray-400 p-3"
                onClick={() => setOpenSearchBar(true)}
              >
                <SearchIcon />
                <div className="flex max-w-[373px] flex-col gap-1 overflow-hidden text-xs">
                  <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                    Islom Karimov Airport, Tashkent, Uzbekistan
                  </span>
                  <span className="block overflow-hidden text-ellipsis whitespace-nowrap">
                    Feb 7, 10:30 AM - Feb 14, 10:30 AM
                  </span>
                </div>
              </div>

              <div className="flex w-1/3 flex-row gap-1">
                <button className="flex w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-none bg-transparent">
                  <MapIcon />
                  Map
                </button>
                <button
                  onClick={() => setOpenSideBar(true)}
                  className="flex w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border-none bg-transparent"
                >
                  <FilterIcon />
                  Filter
                </button>
              </div>
            </div>
          ) : (
            <SideBarFilters />
          )}
        </div>
        <div className="w-full md:w-4/5">
          <CarLists data={data} />
        </div>
      </div>

      <MobileModel
        open={openSearchBar}
        setOpen={setOpenSearchBar}
      >
        <SearchForm className="p-4" />
      </MobileModel>

      <MobileModel
        open={openSideBar}
        setOpen={setOpenSideBar}
      >
        <div className="mb-4 px-2 py-4">
          <SideBarFilters />
        </div>
      </MobileModel>
    </>
  );
};

export default FilterPage;
