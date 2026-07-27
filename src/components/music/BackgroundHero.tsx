import React from 'react';

export default function BackgroundHero() {
  return (
    <div className="absolute top-0 left-0 right-0 z-0 h-[70vh] w-full overflow-hidden pointer-events-none">
      <div 
        className="absolute inset-0 bg-cover bg-top bg-no-repeat opacity-60"
        style={{ backgroundImage: "url('/music/MeGuitar.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950" />
    </div>
  );
}
