import Navbar from '@/components/Navbar';
import EventSection from '@/components/EventSection';
import ExclusivesSection from '@/components/ExclusivesSection';
import {
  TONIGHTS_SPOTLIGHT,
  HOT_THIS_WEEK,
  UNMISSABLE,
  FOR_YOU_CARDS,
  GHANAS_TOP_10S,
} from '@/constants/events';
import {EXCLUSIVES_CARDS} from '@/constants/exclusives';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-8 py-12 space-y-16">
        <EventSection title="Tonight's Spotlight" events={TONIGHTS_SPOTLIGHT} />
        <EventSection title="Hot This Week" events={HOT_THIS_WEEK} />
        <EventSection title="Unmissable" events={UNMISSABLE} />
        <ExclusivesSection title="Exclusives" cards={EXCLUSIVES_CARDS} />
        <EventSection title="For you" events={FOR_YOU_CARDS} />
        <EventSection title="Ghana's Top 10s" events={GHANAS_TOP_10S} />
      </div>
    </div>
  );
}
