import React from 'react';
import Hero from './components/Hero';
import MissionBriefing from './components/MissionBriefing';
import TacticalSystems from './components/TacticalSystems';
import IntelFeed from './components/IntelFeed';

function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0E] text-white">
      {/* Hero with Spline cover and primary CTAs */}
      <Hero />

      {/* Mission Briefing section with decrypted-style reveals */}
      <MissionBriefing />

      {/* Gameplay & Features presented as command console panels */}
      <TacticalSystems />

      {/* Media hub with trailer and social links + footer */}
      <IntelFeed />
    </div>
  );
}

export default App;
