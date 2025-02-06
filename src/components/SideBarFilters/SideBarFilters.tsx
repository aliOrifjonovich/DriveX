'use client';
import { marqueData } from '@/data/StaticDatas';
import { Checkbox, Divider, FormControlLabel, MenuItem, Select, Slider } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

export default function SideBarFilters() {
  const { control, watch } = useForm({
    defaultValues: {
      selectedBrand: '',
      priceRange: [10, 500],
      yearRange: [1990, 2026],
      ageRange: 19,
      fuelType: '',
      transmission: [],
      carType: [],
    },
  });

  const formValues = watch();

  return (
    <div className="overflow-none sticky top-0 z-10 flex h-screen w-full flex-col gap-5 bg-white px-5 py-4 md:overflow-x-hidden md:overflow-y-scroll">
      {/* Types Filter */}
      <div>
        <h4 className="text-lg font-semibold text-[#90A3BF]">Types</h4>
        {marqueData.carTypes.map((type, index) => (
          <Controller
            key={index}
            name="carType"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    value={type.name}
                  />
                }
                label={type.name}
                style={{ display: 'block', height: '30px' }}
                componentsProps={{
                  typography: { fontSize: '16px', color: '#596780', fontWeight: '600' },
                }}
              />
            )}
          />
        ))}
      </div>

      <Divider />

      {/* Brands Filter */}
      <div>
        <h4 className="text-lg font-semibold text-[#90A3BF]">Brands</h4>
        <Controller
          name="selectedBrand"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              sx={{
                width: '100%',
                '& .MuiSelect-select': {
                  padding: '8px',
                  color: '#596780',
                  fontSize: '16px',
                  fontWeight: '500',
                },
              }}
            >
              <MenuItem
                value=""
                disabled
              >
                Select Brand
              </MenuItem>
              {marqueData?.carbrands?.map((brand, index) => (
                <MenuItem
                  key={index}
                  value={brand.name}
                  style={{ color: '#596780' }}
                >
                  {brand.name}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </div>

      <Divider />

      {/* Price Range Selector */}
      <div>
        <h4 className="text-lg font-semibold text-[#90A3BF]">Price Range</h4>
        <Controller
          name="priceRange"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              value={field.value}
              onChange={(_, newValue) => field.onChange(newValue)}
              valueLabelDisplay="auto"
              min={10}
              max={500}
              sx={{
                color: '#3563E9',
                '& .MuiSlider-thumb': { backgroundColor: '#3563E9', border: '2px solid #ffffff' },
              }}
            />
          )}
        />
        <div className="text-sm font-medium text-[#596780]">
          ${formValues.priceRange[0]} - ${formValues.priceRange[1]}
        </div>
      </div>

      <Divider />

      {/* Fuel Type Selector */}
      <div>
        <h4 className="text-lg font-semibold text-[#90A3BF]">Fuel Type</h4>
        <Controller
          name="fuelType"
          control={control}
          render={({ field }) => (
            <Select
              {...field}
              displayEmpty
              sx={{
                width: '100%',
                '& .MuiSelect-select': {
                  padding: '8px',
                  color: '#596780',
                  fontSize: '16px',
                  fontWeight: '500',
                },
              }}
            >
              <MenuItem
                value=""
                disabled
              >
                Choose Fuel Type
              </MenuItem>
              {marqueData?.fuel?.map((type, index) => (
                <MenuItem
                  key={index}
                  value={type.value}
                >
                  {type.value}
                </MenuItem>
              ))}
            </Select>
          )}
        />
      </div>

      <Divider />

      {/* Car Year Selector */}
      <div>
        <h4 className="text-lg font-semibold text-[#90A3BF]">Car Year</h4>
        <Controller
          name="yearRange"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              value={field.value}
              onChange={(_, newValue) => field.onChange(newValue)}
              valueLabelDisplay="auto"
              min={1990}
              max={2026}
              sx={{
                color: '#3563E9',
                '& .MuiSlider-thumb': { backgroundColor: '#3563E9', border: '2px solid #ffffff' },
              }}
            />
          )}
        />
        <div className="text-sm font-medium text-[#596780]">
          {formValues.yearRange[0]} - {formValues.yearRange[1]}
        </div>
      </div>

      <Divider />

      {/* Transmission Filter */}
      <div>
        <h4 className="text-lg font-semibold text-[#90A3BF]">Transmission</h4>
        {marqueData.transmission.map((type, index) => (
          <Controller
            key={index}
            name="transmission"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                control={
                  <Checkbox
                    {...field}
                    value={type.value}
                  />
                }
                label={type.value}
                style={{ display: 'block', height: '30px' }}
                componentsProps={{
                  typography: { fontSize: '16px', color: '#596780', fontWeight: '600' },
                }}
              />
            )}
          />
        ))}
      </div>

      <Divider />

      {/* Age Filter */}
      <div>
        <h4 className="text-lg font-semibold text-[#90A3BF]">Age Filter</h4>
        <Controller
          name="ageRange"
          control={control}
          render={({ field }) => (
            <Slider
              {...field}
              value={field.value} // Ensure it's a single value
              onChange={(_, newValue) => field.onChange(newValue)}
              min={19} // Starts at 19
              max={100} // Set max limit if needed
              valueLabelDisplay="auto"
              sx={{ color: '#3563E9' }}
            />
          )}
        />
        <div className="text-sm font-medium text-[#596780]">{formValues.ageRange} years</div>
      </div>
    </div>
  );
}
