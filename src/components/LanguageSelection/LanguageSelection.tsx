import { currencies, langs } from '@/data/StaticDatas';
import { useMediaQuery } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Cookies from 'js-cookie';
import * as React from 'react';
import MobileModel from '../MobileModel/MobileModel';

export default function LanguageSelection() {
  const mobileview = useMediaQuery('(max-width:768px)');
  const [openModel, setOpenModel] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);

  const [selectedLang, setSelectedLang] = React.useState<{
    label: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
  } | null>(null);

  const [selectedCurrency, setSelectedCurrency] = React.useState<{
    label: string;
    symbol: string;
  } | null>(null);

  React.useEffect(() => {
    const localeCookie = Cookies.get('locale') || 'en';
    const currencyCookie = Cookies.get('currency') || 'usd';

    const lang = langs.find((item) => item.label === localeCookie);
    const currency = currencies.find((item) => item.label === currencyCookie);

    setSelectedLang(lang || langs[2]);
    setSelectedCurrency(currency || currencies[1]);
  }, []);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    setOpenModel(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setOpenModel(false);
  };

  const handleChangeLang = (lang: string) => {
    Cookies.set('locale', lang);
    window.location.reload();
  };

  return (
    <>
      <div>
        <button
          onClick={handleOpen}
          className="text-md flex cursor-pointer items-center gap-1 rounded-md border-2 border-solid border-[#C3D4E9] bg-transparent p-1"
        >
          <div className="flex items-center gap-1 text-lg">
            <span className="flex items-center justify-center pb-[2px]">
              {selectedLang?.icon && <selectedLang.icon />} {mobileview && '|'}
            </span>
            {!mobileview && <span>{selectedLang?.label.toUpperCase()} | </span>}
          </div>
          <p className="text-sm leading-none md:text-lg">{selectedCurrency?.symbol}</p>
        </button>

        {mobileview ? (
          <MobileModel
            open={openModel}
            setOpen={setOpenModel}
            height="30vh"
          >
            <div className="flex w-full flex-col gap-3">
              <Typography
                variant="subtitle1"
                className="mb-2 font-semibold"
              >
                Language
              </Typography>
              <div className="flex w-full gap-2">
                {langs.map((lang) => (
                  <div
                    key={lang.label}
                    className="flex w-full cursor-pointer items-center justify-center gap-2 rounded border border-solid border-gray-400 p-2 hover:bg-gray-100"
                    onClick={() => handleChangeLang(lang.label)}
                  >
                    <lang.icon />
                    <span className="text-md font-medium uppercase">{lang.label}</span>
                  </div>
                ))}
              </div>

              <Typography
                variant="subtitle1"
                className="mb-2 mt-3 font-semibold"
              >
                Currency
              </Typography>
              <div className="flex w-full flex-wrap gap-2">
                {currencies.map((currency) => (
                  <div
                    key={currency.label}
                    className="flex flex-grow cursor-pointer items-center justify-center gap-2 rounded border border-solid border-gray-400 p-2 hover:bg-gray-100"
                  >
                    <span className="text-md text-center font-medium">{currency.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          </MobileModel>
        ) : (
          <Popover
            id="language-currency-popover"
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <div className="w-48 p-3">
              <Typography
                variant="subtitle1"
                className="mb-2 font-semibold"
              >
                Language
              </Typography>
              {langs.map((lang) => (
                <div
                  key={lang.label}
                  className="flex cursor-pointer items-center gap-2 rounded p-2 hover:bg-gray-100"
                  onClick={() => handleChangeLang(lang.label)}
                >
                  <lang.icon />
                  <span className="text-md font-medium uppercase">{lang.label}</span>
                </div>
              ))}

              <Typography
                variant="subtitle1"
                className="mb-2 mt-3 font-semibold"
              >
                Currency
              </Typography>
              <div className="flex w-full flex-wrap gap-2">
                {currencies.map((currency) => (
                  <div
                    key={currency.label}
                    className="flex flex-grow cursor-pointer items-center justify-center gap-2 rounded border border-solid border-gray-400 p-2 hover:bg-gray-100"
                  >
                    <span className="text-md text-center font-medium">{currency.symbol}</span>
                  </div>
                ))}
              </div>
            </div>
          </Popover>
        )}
      </div>
    </>
  );
}
