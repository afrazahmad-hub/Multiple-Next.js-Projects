import CoreTrackers from "@/components/widgets/CoreTrackers";
import Hero from "@/components/widgets/Hero";
import SpecializedTrack from "@/components/widgets/SpecializedTrack";
import ProgramOutcomes from "@/components/widgets/ProgramOutcomes";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />

      {/* Core Tracker Section */}
      <CoreTrackers />

      {/* Specialized Track */}
      <SpecializedTrack />

      {/* Outcome page */}
      <ProgramOutcomes />
    </main>
  );
}
