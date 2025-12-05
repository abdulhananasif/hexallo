'use client';

import {useState, useMemo, useEffect, useCallback} from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import countries from 'i18n-iso-countries';
import iso6391 from 'iso-639-1';
import ReactCountryFlag from 'react-country-flag';
import {State} from 'country-state-city';
import Dropdown from '@/components/ui/Dropdown';
import Button from '@/components/ui/Button';
import {
  TEXT_STYLE,
  MENU_ITEM,
  NAV_LINKS,
  ACTION_LINKS,
} from '@/constants/navbar';
import {DropdownType} from '@/types/navbar';

countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

type DropdownConfig = {
  type: DropdownType;
  trigger: React.ReactNode;
  menuContent: React.ReactNode;
  minWidth?: string;
};

export default function TopNavbar() {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);

  const languages = useMemo(
    () =>
      iso6391.getAllNames().map((name) => ({
        name,
        code: iso6391.getCode(name),
      })),
    []
  );

  const countryList = useMemo(
    () =>
      Object.entries(countries.getNames('en', {select: 'official'}))
        .filter(([code]) => code.length === 2)
        .map(([code, name]) => ({
          code: code.toUpperCase(),
          name: name as string,
        }))
        .sort((a, b) => a.name.localeCompare(b.name)),
    []
  );

  const regions = useMemo(() => {
    const states = State.getStatesOfCountry(selectedCountry);
    return states.map((state) => ({
      name: state.name,
      code: state.isoCode,
    }));
  }, [selectedCountry]);

  const currentLanguage = useMemo(
    () => languages.find((lang) => lang.code === selectedLanguage),
    [languages, selectedLanguage]
  );

  const currentCountry = useMemo(
    () => countryList.find((country) => country.code === selectedCountry),
    [countryList, selectedCountry]
  );

  const currentRegion = useMemo(
    () => regions.find((region) => region.name === selectedRegion),
    [regions, selectedRegion]
  );

  useEffect(() => {
    if (regions.length > 0 && !selectedRegion) {
      setSelectedRegion(regions[0].name);
    } else if (regions.length === 0) {
      setSelectedRegion('');
    } else if (!regions.find((r) => r.name === selectedRegion)) {
      setSelectedRegion(regions[0]?.name || '');
    }
  }, [selectedCountry, regions, selectedRegion]);

  const toggleDropdown = useCallback((type: DropdownType) => {
    setOpenDropdown((prev: DropdownType) => (prev === type ? null : type));
  }, []);

  const handleCountryChange = useCallback((code: string) => {
    setSelectedCountry(code);
    setSelectedRegion('');
    setOpenDropdown(null);
  }, []);

  const dropdowns: DropdownConfig[] = useMemo(
    () => [
      {
        type: 'language',
        trigger: (
          <>
            <Image
              src="/language.svg"
              alt="Language"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span className={TEXT_STYLE}>
              {currentLanguage?.code.toUpperCase() ??
                selectedLanguage.toUpperCase()}
            </span>
          </>
        ),
        menuContent: (
          <>
            {languages.slice(0, 50).map((lang) => (
              <div
                key={lang.code}
                className={MENU_ITEM}
                onClick={() => {
                  setSelectedLanguage(lang.code);
                  setOpenDropdown(null);
                }}
              >
                <span className={TEXT_STYLE}>
                  {lang.name} ({lang.code.toUpperCase()})
                </span>
              </div>
            ))}
          </>
        ),
      },
      {
        type: 'country',
        trigger: (
          <>
            <ReactCountryFlag
              countryCode={selectedCountry}
              svg
              className="w-5 h-4 rounded-sm object-cover"
            />
            <span className={TEXT_STYLE}>
              {currentCountry?.name || 'United States'}
            </span>
          </>
        ),
        menuContent: (
          <>
            {countryList.map((country) => (
              <div
                key={country.code}
                className={clsx(MENU_ITEM, 'flex items-center space-x-2')}
                onClick={() => handleCountryChange(country.code)}
              >
                <ReactCountryFlag
                  countryCode={country.code}
                  svg
                  className="w-5 h-4 rounded-sm object-cover shrink-0"
                />
                <span className="font-inter font-normal text-[11px] leading-[140%] text-[#999999] mr-2 shrink-0">
                  {country.code}
                </span>
                <span className={TEXT_STYLE}>{country.name}</span>
              </div>
            ))}
          </>
        ),
      },
      ...(regions.length > 0
        ? [
            {
              type: 'region' as DropdownType,
              trigger: (
                <span className={TEXT_STYLE}>
                  {currentRegion?.name || selectedRegion || 'Select Region'}
                </span>
              ),
              menuContent: (
                <>
                  {regions.map((region) => (
                    <div
                      key={region.code}
                      className={MENU_ITEM}
                      onClick={() => {
                        setSelectedRegion(region.name);
                        setOpenDropdown(null);
                      }}
                    >
                      <span className={TEXT_STYLE}>{region.name}</span>
                    </div>
                  ))}
                </>
              ),
              minWidth: 'min-w-[150px]',
            },
          ]
        : []),
    ],
    [
      languages,
      currentLanguage,
      selectedLanguage,
      selectedCountry,
      currentCountry,
      countryList,
      handleCountryChange,
      regions,
      currentRegion,
      selectedRegion,
    ]
  );

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-10 text-sm">
          <div className="flex items-center space-x-6">
            {NAV_LINKS.map((link: {label: string; href: string}) => (
              <Link key={link.label} href={link.href} className={TEXT_STYLE}>
                {link.label}
              </Link>
            ))}

            {dropdowns.map((dropdown) => (
              <Dropdown
                key={dropdown.type}
                isOpen={openDropdown === dropdown.type}
                onToggle={() => toggleDropdown(dropdown.type)}
                minWidth={dropdown.minWidth}
                menuContent={dropdown.menuContent}
              >
                {dropdown.trigger}
              </Dropdown>
            ))}

            {ACTION_LINKS.map(
              (link: {label: string; href: string; className: string}) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={link.className}
                >
                  {link.label}
                </Link>
              )
            )}
            <Button>Create Event</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
