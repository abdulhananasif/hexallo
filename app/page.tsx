import Navbar from '@/components/Navbar';
import EventSection from '@/components/EventSection';
import {
  TONIGHTS_SPOTLIGHT,
  HOT_THIS_WEEK,
  UNMISSABLE,
} from '@/constants/events';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-8 py-12 space-y-16">
        <EventSection title="Tonight's Spotlight" events={TONIGHTS_SPOTLIGHT} />
        <EventSection title="Hot This Week" events={HOT_THIS_WEEK} />
        <EventSection title="Unmissable" events={UNMISSABLE} />
      </div>
    </div>
  );
}
