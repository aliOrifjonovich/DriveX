'use client';

import { Divider, MenuItem, Select } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Dayjs } from 'dayjs';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../ui/button';

interface SearchFormValues {
  location: string;
  fromDate: Dayjs | null;
  fromTime: string;
  untilDate: Dayjs | null;
  untilTime: string;
}

const TIME_OPTIONS = Array.from({ length: 48 }, (_, i) => {
  const hours = Math.floor(i / 2);
  const minutes = i % 2 === 0 ? '00' : '30';
  return `${hours % 12 || 12}:${minutes} ${hours < 12 ? 'AM' : 'PM'}`;
});

const SearchForm = () => {
  const { register, handleSubmit, setValue, watch } = useForm<SearchFormValues>({
    defaultValues: {
      fromTime: '10:00 AM',
      untilTime: '10:00 AM',
    },
  });

  const onSubmit: SubmitHandler<SearchFormValues> = () => {};

  return (
    <div className="z-20 rounded-lg bg-white px-6 py-4 md:absolute md:bottom-[-32px] md:left-1/2 md:w-[95%] md:-translate-x-1/2 md:py-1">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-wrap items-center justify-between gap-4 max-md:block"
      >
        {/* Location Input */}
        <div className="flex flex-1 flex-col">
          <label
            htmlFor="location"
            className="mb-1 text-sm font-medium text-gray-600 md:text-lg"
          >
            Pick-up Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="City, airport, address or hotel"
            {...register('location', { required: true })}
            className="w-full rounded-md border-[1px] border-solid border-gray-300 p-2 text-sm text-gray-700 outline-none hover:border-black focus:border-blue-500 focus:outline-none"
          />
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
        />

        {/* From Date and Time */}
        <div className="flex flex-1 flex-col items-center">
          <div className="flex flex-1 flex-col">
            <div className="flex space-x-2">
              <div>
                <label className="mb-1 text-sm font-medium text-gray-600 md:text-lg">From</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={watch('fromDate')}
                    onChange={(date) => setValue('fromDate', date)}
                    sx={{
                      input: {
                        padding: '9px !important',
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>
              <div>
                <label
                  htmlFor="untilTime"
                  className="mb-1 text-xs font-medium text-gray-600 md:text-lg"
                >
                  Time
                </label>
                <Select
                  value={watch('fromTime')}
                  onChange={(e) => setValue('fromTime', e.target.value)}
                  className="rounded-md border border-gray-300 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
                  sx={{
                    '& .MuiSelect-select': {
                      padding: '9px', // Customize padding for the Select
                    },
                  }}
                >
                  {TIME_OPTIONS.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
        />

        {/* Until Date and Time */}
        <div className="flex flex-1 flex-col items-center">
          <div className="flex flex-1 flex-col">
            <div className="flex w-full space-x-2">
              <div>
                <label className="mb-1 w-max text-sm font-medium text-gray-600 md:text-lg">
                  Until
                </label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    value={watch('untilDate')}
                    onChange={(date) => setValue('untilDate', date)}
                    sx={{
                      input: {
                        padding: '9px !important',
                      },
                    }}
                  />
                </LocalizationProvider>
              </div>

              <div>
                <label
                  htmlFor="untilTime"
                  className="mb-1 text-xs font-medium text-gray-600 md:text-lg"
                >
                  Time
                </label>
                <Select
                  value={watch('untilTime')}
                  onChange={(e) => setValue('untilTime', e.target.value)}
                  className="rounded-md border border-gray-300 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
                  sx={{
                    '& .MuiSelect-select': {
                      padding: '9px', // Customize padding for the Select
                    },
                  }}
                >
                  {TIME_OPTIONS.map((time) => (
                    <MenuItem
                      key={time}
                      value={time}
                    >
                      {time}
                    </MenuItem>
                  ))}
                </Select>
              </div>
            </div>
          </div>
        </div>
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          sx={{ height: '70px' }}
        />

        {/* Submit Button */}
        <div className="flex items-center gap-2 max-md:w-full">
          <Button
            type="submit"
            className="flex h-[45px] w-1/2 cursor-pointer items-center justify-center rounded-lg border-solid border-blue-600 bg-blue-600 text-lg text-white hover:bg-blue-800 md:h-[45px] md:w-28 md:w-[100px]"
          >
            Search
          </Button>

          <Button
            type="button"
            onClick={() => setValue('location', '')}
            className="flex h-[45px] w-1/2 w-full items-center justify-center rounded-lg bg-white text-lg text-black hover:bg-black hover:text-white md:h-[45px] md:w-28 md:w-[100px]"
          >
            Map
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
