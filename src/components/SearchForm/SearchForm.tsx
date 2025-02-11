'use client';

import { Divider } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs, { Dayjs } from 'dayjs';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import Button from '../ui/button';

interface SearchFormInterface {
  className: string;
  redirectPage?: string;
}
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

const SearchForm: FC<SearchFormInterface> = ({ className, redirectPage }) => {
  const t = useTranslations('HomePage');
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<SearchFormValues>({
    defaultValues: {
      location: '',
      fromDate: dayjs(),
      fromTime: '10:00 AM',
      untilDate: dayjs(),
      untilTime: '10:00 AM',
    },
  });

  const onSubmit: SubmitHandler<SearchFormValues> = () => {
    if (redirectPage) {
      router.push(redirectPage);
    }
  };

  return (
    <div className={`"z-20 py-4" rounded-lg bg-white px-6 ${className}`}>
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
            {t('pickup')}
          </label>
          <input
            id="location"
            type="text"
            placeholder={t('location_placeholder')}
            {...register('location', { required: 'Location is required' })}
            className="w-full rounded-md border-[1px] border-solid border-gray-300 p-2 text-sm text-gray-700 outline-none hover:border-black focus:border-blue-500 focus:outline-none"
          />
          {errors.location && <p className="text-red-500">{errors.location.message}</p>}
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
                <label className="mb-1 text-sm font-medium text-gray-600 md:text-lg">
                  {t('from')}
                </label>
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
                  htmlFor="taking-Time"
                  className="mb-1 text-xs font-medium text-gray-600 md:text-lg"
                >
                  {t('time')}
                </label>

                <select
                  name="taking-Time"
                  id="taking-Time"
                  className="rounded-md border border-gray-300 p-3 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
                >
                  {TIME_OPTIONS.map((time) => (
                    <option
                      key={time}
                      value={time}
                      className="p-2"
                    >
                      {time}
                    </option>
                  ))}
                </select>
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
                  {t('until')}
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
                  htmlFor="until-time"
                  className="mb-1 text-xs font-medium text-gray-600 md:text-lg"
                >
                  {t('time')}
                </label>

                <select
                  name="untill-Time"
                  id="untill-Time"
                  className="rounded-md border border-gray-300 p-3 text-sm text-gray-700 focus:border-blue-500 focus:outline-none"
                >
                  {TIME_OPTIONS.map((time) => (
                    <option
                      key={time}
                      value={time}
                      className="p-2"
                    >
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
        />

        {/* Submit Button */}
        <div className="flex items-center gap-2 max-md:w-full">
          <Button
            type="submit"
            className="flex h-[45px] w-1/2 cursor-pointer items-center justify-center rounded-lg border-solid border-blue-600 bg-blue-600 text-lg text-white hover:bg-blue-800 md:h-[45px] md:w-28 md:w-[100px]"
          >
            {t('search')}
          </Button>

          <Button
            type="button"
            onClick={() => setValue('location', '')}
            className="flex h-[45px] w-1/2 w-full items-center justify-center rounded-lg bg-white text-lg text-black hover:bg-black hover:text-white md:h-[45px] md:w-28 md:w-[100px]"
          >
            {t('map')}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
