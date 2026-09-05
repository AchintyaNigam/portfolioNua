"use client";
import Image from 'next//image'
import { motion } from 'motion/react';
import { platforms } from '@/data/musicData';
import { Headphones, ExternalLink } from 'lucide-react';
import { AiFillSpotify } from "react-icons/ai";
import { SiApplemusic } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import LogoImage from "../../../public/Logo.png";


export default function GenreSummary() {
  const platformIcons = {
    spotify: AiFillSpotify,
    applemusic: SiApplemusic,
    youtubemusic: SiYoutubemusic,
  };
  
  const displayPlatformLogo = (icon: string) => {
    const Icon = platformIcons[icon as keyof typeof platformIcons] ?? ExternalLink;
  
    return (
      <Icon
        size={16}
        className="opacity-70 group-hover:opacity-100 transition-opacity"
      />
    );
  };
  return (
    <section className="relative z-10 py-12 pt-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 flex items-center gap-4">
          <div className="p-0 image-button bg-black rounded-full w-14 h-14 flex items-center justify-center overflow-hidden">
            <Image src={LogoImage} alt="logo" width={56} height={56} />
          </div>
          Achintya Nigam
        </h2>
        <p className="text-zinc-300 text-lg md:text-xl leading-relaxed mb-8 drop-shadow-md bg-zinc-950/40 p-6 rounded-2xl backdrop-blur-sm border border-zinc-800/50">
          I believe in being versatile with my music, but I majorly make electronic, rap music, orchestral, and sometimes a little mix of everything. I use Flstudio as my DAW and the guitar as the instrument to compose on. 
        </p>
        
        <div className="flex flex-wrap gap-4">
          {platforms.map(platform => (
            <a 
              key={platform.id}
              href={platform.url}
              className="flex items-center gap-2 bg-zinc-800/80 hover:bg-zinc-700 border border-zinc-600 px-5 py-2.5 rounded-full text-zinc-100 hover:text-white transition-all backdrop-blur-md shadow-lg group"
            >
              <span className="font-semibold tracking-wide">{platform.name}</span>

              {displayPlatformLogo(platform.icon)}

            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
