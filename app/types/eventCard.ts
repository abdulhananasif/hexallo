export type EventCardProps = {
  image: string;
  category: string;
  eventName: string;
  date: string;
  time: string;
  location: string;
  price: string;
  rating?: number;
  variant?: 'default' | 'forYou';
};

