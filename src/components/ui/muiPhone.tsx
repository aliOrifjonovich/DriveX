import { InputAdornment, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react';
import {
  CountryIso2,
  FlagImage,
  defaultCountries,
  parseCountry,
  usePhoneInput,
} from 'react-international-phone';
import 'react-international-phone/style.css';

interface MUIPhoneProps {
  value: string;
  onChange: (phone: string) => void;
}

const MuiPhone: React.FC<MUIPhoneProps> = ({ value, onChange, ...restProps }) => {
  const { inputValue, handlePhoneValueChange, inputRef, country, setCountry } = usePhoneInput({
    defaultCountry: 'us',
    value,
    countries: defaultCountries,
    onChange: (data) => onChange(data.phone),
  });

  return (
    <TextField
      variant="outlined"
      placeholder="Phone number"
      value={inputValue}
      onChange={handlePhoneValueChange}
      inputRef={inputRef}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Select
              value={country.iso2}
              onChange={(e) => setCountry(e.target.value as CountryIso2)}
              renderValue={(value) => (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <FlagImage iso2={value} />
                </div>
              )}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minWidth: '50px',
                '.MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  //   padding: '8px',
                  paddingRight: '10px',
                },
                svg: {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
                fieldset: { display: 'none' },
                '&.Mui-focused fieldset': { display: 'block' },
              }}
              MenuProps={{
                PaperProps: { style: { maxHeight: 300, width: 300 } },
              }}
            >
              {defaultCountries.map((c) => {
                const countryData = parseCountry(c);
                return (
                  <MenuItem
                    key={countryData.iso2}
                    value={countryData.iso2}
                  >
                    <FlagImage
                      iso2={countryData.iso2}
                      style={{ marginRight: 8 }}
                    />
                    <Typography>{countryData.name}</Typography>
                    <Typography sx={{ color: 'gray', ml: 'auto' }}>
                      +{countryData.dialCode}
                    </Typography>
                  </MenuItem>
                );
              })}
            </Select>
          </InputAdornment>
        ),
      }}
      sx={{
        width: '100%',
        borderRadius: '0.5rem',
        border: '2px solid #C3D4E9',
        background: 'transparent',
        fontSize: '1rem',
        color: '#000',
        '& input': {
          background: 'transparent',
          borderRadius: '0.5rem',
          fontSize: '1rem',
          color: '#000',
          '&::placeholder': {
            fontWeight: '500',
            color: '#616b74',
          },
        },
        '& .MuiOutlinedInput-notchedOutline': {
          border: 'none',
        },
        '&:focus-within': {
          borderColor: '#000',
          outline: 'none',
        },
      }}
      {...restProps}
    />
  );
};

export default MuiPhone;
