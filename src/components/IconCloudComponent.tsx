import { IconCloud } from "@/components/magicui/icon-cloud";
import { SpinningText } from "@/components/magicui/spinning-text";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "tailwindcss",
  "reactnative",
  "android",
  "html5",
  "css3",
  "amazonaws",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "figma",
  "spring",
  "springboot",
  "nextdotjs",
  "linux",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <div className="absolute z-0 bg-gradient-to-br from-[#05B2DC] via-[#087CA7] to-[#004385] rounded-full h-72 w-72 opacity-80 shadow-photo-glow"></div>
      {/* Background Spinning Text */}
      <div className="absolute inset-0 z-10 text-white flex items-center justify-center">
        <SpinningText radius={18} fontSize={64}>Hire Me • Hire Me • Hire Me •</SpinningText>
      </div>
  
      {/* Foreground Icon Cloud */}
      <div className="relative z-20">
        <IconCloud images={images} />
      </div>
    </div>
  );
  
}

export default IconCloudDemo;
