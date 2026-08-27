export interface Track {
  id: number;
  title: string;
  artist: string;
  albumId: number;
  audioSrc: string;
  duration: string;
  coverSrc?: string | null;
}

export interface Album {
  id: number;
  title: string;
  year: string;
  color: string;
  coverSrc: string | null;
  tracks: Track[];
}

export const albums: Album[] = [
  { 
    id: 1, title: "Midnight Echoes", year: "2023", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/JupiterOnBrink.png",
    tracks: [
      { id: 101, title: "Jupiter on Brink", artist: "Nua", albumId: 1, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "2:45", coverSrc: "/music/albumArt/JupiterOnBrink.png" },
      { id: 102, title: "Jupiter on Brink (Part 2)", artist: "Nua", albumId: 1, audioSrc: "/music/audioTracks/I Miss Them.mp3", duration: "2:45", coverSrc: "/music/albumArt/JupiterOnBrink.png" },
      { id: 103, title: "Echoes in the Dark", artist: "Nua", albumId: 1, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "3:10", coverSrc: "/music/albumArt/JupiterOnBrink.png" }
    ]
  },
  { 
    id: 2, title: "Solar Drift", year: "2022", color: "from-amber-400 to-orange-600", coverSrc: null,
    tracks: [
      { id: 201, title: "Sunrise", artist: "Nua", albumId: 2, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "4:00" },
      { id: 202, title: "Solar Wind", artist: "Nua", albumId: 2, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "3:45" },
      { id: 203, title: "Drifting", artist: "Nua", albumId: 2, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "2:50" }
    ]
  },
  { 
    id: 3, title: "Neon Nights", year: "2021", color: "from-pink-500 to-rose-600", coverSrc: null,
    tracks: [
      { id: 301, title: "City Lights", artist: "Nua", albumId: 3, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "3:20" },
      { id: 302, title: "Cyber Sunset", artist: "Nua", albumId: 3, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "4:15" }
    ]
  },
  { 
    id: 4, title: "Ocean Breeze", year: "2024", color: "from-teal-400 to-emerald-600", coverSrc: null,
    tracks: [
      { id: 401, title: "Waves", artist: "Nua", albumId: 4, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "3:55" },
      { id: 402, title: "Deep Blue", artist: "Nua", albumId: 4, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "4:30" }
    ]
  },
  { 
    id: 5, title: "Urban Pulse", year: "2020", color: "from-slate-500 to-zinc-700", coverSrc: null,
    tracks: [
      { id: 501, title: "Concrete Jungle", artist: "Nua", albumId: 5, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "2:55" }
    ]
  },
  { 
    id: 6, title: "Celestial Sound", year: "2023", color: "from-sky-400 to-blue-600", coverSrc: null,
    tracks: [
      { id: 601, title: "Starlight", artist: "Nua", albumId: 6, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "5:00" },
      { id: 602, title: "Nebula", artist: "Nua", albumId: 6, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "4:40" }
    ]
  },
];

export const tracks: Track[] = albums.flatMap(a => a.tracks);

export const videos = [
  { id: 1, title: "Midnight Echoes (Official Video)", views: "1.2M views", color: "from-red-500 to-orange-600" },
  { id: 2, title: "Neon Nights (Live at The Roxy)", views: "850K views", color: "from-blue-500 to-cyan-600" },
  { id: 3, title: "Solar Drift (Acoustic Cover)", views: "420K views", color: "from-emerald-500 to-teal-600" },
];

export const platforms = [
  { id: 1, name: "Spotify", icon: "spotify", url: "#" },
  { id: 2, name: "Apple Music", icon: "apple", url: "#" },
  { id: 3, name: "YouTube", icon: "youtube", url: "#" },
  { id: 4, name: "SoundCloud", icon: "soundcloud", url: "#" },
];
