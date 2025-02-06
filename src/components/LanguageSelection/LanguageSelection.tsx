import { EnLangIcon } from '@/Icons/EnLangIcon';
import { RuLangIcon } from '@/Icons/RuLangIcon';
import { UzLangIcon } from '@/Icons/UzLangIcon';
import Cookies from 'js-cookie';
import { FC, useEffect, useMemo, useState } from 'react';

const LanguageSelection: FC = () => {
  const langs = useMemo(
    () => [
      {
        label: 'ru',
        icon: <RuLangIcon />,
      },
      {
        label: 'uz',
        icon: <UzLangIcon />,
      },
      {
        label: 'en',
        icon: <EnLangIcon />,
      },
    ],
    []
  );

  // eslint-disable-next-line no-undef
  const [selectedLang, setSelectedLang] = useState<{ label: string; icon: JSX.Element } | null>(
    null
  );

  useEffect(() => {
    const localeCookie = Cookies.get('locale') || 'en';
    const lang = langs.find((item) => item.label === localeCookie);
    setSelectedLang(lang || langs[2]);
  }, [langs]);

  const handleChangeLang = (lang: string) => {
    Cookies.set('locale', lang);
    window.location.reload();
  };

  return (
    <div className="group relative">
      <div className="flex cursor-pointer items-center justify-center gap-1 rounded-md border-2 border-solid border-[#C3D4E9] p-1">
        <span className="pt-1">{selectedLang?.icon}</span>
        <span className="text-lg font-medium uppercase">{selectedLang?.label}</span>
      </div>

      <div className="absolute z-30 mt-2 flex-col rounded border-2 border-solid border-[#C3D4E9] bg-white p-2 opacity-0 transition-opacity duration-300 ease-in-out group-hover:flex group-hover:opacity-100">
        {langs.map((lang) => (
          <div
            key={lang.label}
            className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100"
            onClick={() => handleChangeLang(lang.label)}
          >
            <span>{lang.icon}</span> {/* Display the language icon */}
            <span className="text-md font-medium uppercase">{lang.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguageSelection;
