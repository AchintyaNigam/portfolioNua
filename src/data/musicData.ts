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
  typeOf: string;
  year: string;
  color: string;
  coverSrc: string | null;
  tracks: Track[];
}

export const albums: Album[] = [
  {
    id: 1, title: "Shunchan Ka Dost", typeOf: "Single", year: "2022", color: "from-green-200 to-red-600", coverSrc: "/music/albumArt/ShunchanKaDost.png",
    tracks: [
      {
        id: 101, title: "Shunchan Ka Dost", artist: "Achintya Nigam", albumId: 1, audioSrc: "music/audioTracks/ShunchanKaDost.mp3", duration: "1:00", coverSrc: "/music/albumArt/ShunchanKaDost.png"
      }
    ]
  },
  {
    id: 2, title: "The 925", typeOf: "EP", year: "2022", color: "from-amber-300 to-green-400", coverSrc: "/music/albumArt/The925.png",
    tracks: [
      {
        id: 201, title: "The 925", artist: "Achintya Nigam", albumId: 2, audioSrc: "/music/audioTracks/The925/The925.mp3", duration: "8:00", coverSrc: "/music/albumArt/The925.png"},
      {
        id: 202, title: "Same Struggle Different Level", artist: "Achintya Nigam", albumId: 2, audioSrc: "/music/audioTracks/The925/SameStruggleDifferentLevel.mp3", duration: "2:40", coverSrc: "/music/albumArt/The925.png"
      }
    ]
  },
  { 
    id: 3, title: "Jupiter on brink", typeOf: "Single", year: "2023", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/JupiterOnBrink.png",
    tracks: [
      { id: 301, title: "Jupiter on brink", artist: "Achintya Nigam", albumId: 3, audioSrc: "/music/audioTracks/Jupiter on brink.mp3", duration: "4:21", coverSrc: "/music/albumArt/JupiterOnBrink.png" },
    ]
  },
  {
    id: 4, title: "Experimental Obessions", typeOf: "Album", year: "2024", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/ExperimentalObsessions.png",
    tracks: [
      {
        id: 401, title: "Unstable", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/Unstable.mp3", duration: "2:12", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 402, title: "Humanity", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/Humanity.mp3", duration: "2:10", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 403, title: "Rebels", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/Rebels.mp3", duration: "3:00", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 404, title: "The Stars Come Out", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/The Stars Come Out.mp3", duration: "2:20", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 405, title: "Digging To Outer Space", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/Digging To Outer Space.mp3", duration: "3:12", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 406, title: "Another War", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/Another War.mp3", duration: "3:17", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 407, title: "The Final Battle", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/The Final Battle.mp3", duration: "2:22", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 408, title: "End Of The World", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/End Of The World.mp3", duration: "2:51", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 409, title: "The Beginning", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/The Beginning.mp3", duration: "5:42", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      },
      {
        id: 410, title: "Weird Flowers", artist: "Achintya Nigam", albumId: 4, audioSrc: "/music/audioTracks/ExperimentalObsessions/Weird Flowers.mp3", duration: "5:42", coverSrc: "/music/albumArt/ExperimentalObsessions.png"
      }
    ]
  },
  {
    id: 5, title: "7PM", typeOf: "Single", year: "2026", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/7pm.png",
    tracks: 
    [
      {
          id: 501, title: "7PM", artist: "AM$H, Achintya Nigam", albumId: 5, audioSrc: "/music/audioTracks/7PM.mp3", duration: "1:46", coverSrc: "/music/albumArt/7pm.png"

      }
    ]
  },
  {
    id: 6, title: "Not Anymore", typeOf: "Single", year: "2026", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/NotAnymore.png",
    tracks: 
    [
      {
          id: 601, title: "7PM", artist: "AM$H, Achintya Nigam", albumId: 6, audioSrc: "/music/audioTracks/Not Anymore.mp3", duration: "3:13", coverSrc: "/music/albumArt/NotAnymore.png"

      }
    ]
  },
  {
    id: 7, title: "Payload", typeOf: "Single", year: "2026", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/Payload.png",
    tracks: 
    [
      {
          id: 701, title: "Payload", artist: "AM$H, Achintya Nigam", albumId: 7, audioSrc: "/music/audioTracks/Payload.mp3", duration: "2:31", coverSrc: "/music/albumArt/Payload.png"

      }
    ]
  },
  {
    id: 8, title: "Dilruba", typeOf: "Single", year: "2026", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/Dilruba.png",
    tracks: 
    [
      {
          id: 801, title: "Dilruba", artist: "AM$H, RIYA, Achintya Nigam", albumId: 8, audioSrc: "/music/audioTracks/Dilruba.mp3", duration: "2:57", coverSrc: "/music/albumArt/Dilruba.png"
      }
    ]
  },
  {
    id: 9, title: "Dilruba", typeOf: "Single", year: "2026", color: "from-purple-500 to-indigo-600", coverSrc: "/music/albumArt/Doomsday.png",
    tracks: 
    [
      {
          id: 901, title: "Dilruba", artist: "AM$H, Achintya Nigam", albumId: 9, audioSrc: "/music/audioTracks/Doomsday.mp3", duration: "2:50", coverSrc: "/music/albumArt/Doomsday.png"
      }
    ]
  },
];

export const tracks: Track[] = albums.flatMap(a => a.tracks);

export const platforms = [
  { id: 1, name: "Spotify", icon: "spotify", url: "https://open.spotify.com/artist/56pgF9P3XK02tVi8TUfBgd?si=fPzUTVEdT32M9e5UPY5zNw" },
  { id: 2, name: "Apple Music", icon: "applemusic", url: "https://music.apple.com/us/artist/achintya-nigam/1436772859" },
  { id: 3, name: "YouTube", icon: "youtubemusic", url: "https://music.youtube.com/channel/UC7H1brOVp7NN80pfbVQ5oVQ" },
];
