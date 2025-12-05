export const TEXT_STYLE =
  'font-inter font-normal text-xs leading-[140%] text-[#6A6A6A]';
export const DROPDOWN_MENU =
  'absolute top-full left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg z-50 max-h-60 overflow-y-auto';
export const MENU_ITEM = 'px-4 py-2 hover:bg-gray-100 cursor-pointer';

export const NAV_LINKS = [
  {label: 'Events Calendar', href: '/events'},
  {label: 'Blog', href: '/blog'},
  {label: 'Limelight', href: '/limelight'},
] as const;

export const ACTION_LINKS = [
  {
    label: 'Sign In | Up',
    href: '/signin',
    className: 'font-inter font-normal text-xs leading-[140%] text-[#3C3C3C]',
  },
  {
    label: 'Business',
    href: '/business',
    className:
      'font-inter font-medium text-[13px] leading-[120%] text-[#AE6F28]',
  },
] as const;

export const MAIN_NAV_ITEMS = [
  'Explore',
  'Services',
  'Nightlife',
  'Travel',
  'Accommodation',
  'Spaces',
  'Subscriptions',
  'Vouchers',
  'Rentals',
  'Voting',
  'Shop',
  'Essentials',
  'Healthcare',
  'Jobs',
  'Marketplace',
] as const;

export const SUB_NAV_ITEMS = [
  'Home',
  'Events',
  'Tours',
  'Activities',
  'Indulge',
  'Places',
  'Movies',
  'Sports',
  'Restaurants',
  'Find a table',
  'Conferences',
  'Workshops',
  'Auditions',
  'People',
  'World Famous',
  'Social Buddies',
  'Virtual Experiences',
] as const;
