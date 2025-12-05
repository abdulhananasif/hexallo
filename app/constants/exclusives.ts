import {ExclusiveCardProps} from '@/types/exclusiveCard';

export const EXCLUSIVES_CARDS: readonly ExclusiveCardProps[] = [
  {
    image: '/exclusives1.jpg',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    ctaText: 'Explore Now',
  },
  {
    image: '/exclusives2.jpg',
    title: 'Private Tours',
    description:
      'Your guide to the most happening events this weekend — from concerts to pop-ups.',
    ctaText: 'Explore Now',
  },
] as const;
