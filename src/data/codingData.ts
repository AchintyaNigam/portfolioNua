export const certifications = [
  {
    title: "AWS Cloud Practitioner",
    description:
      "The AWS Cloud Practitioner certification deals with understanding the AWS Cloud ecosystem",
    pdfSrc: "/Certifications/pdfs/AWSCP.pdf",
    certBadgeImgSrc: "/Certifications/AWSCP.png",
  },
  {
    title: "AWS Solutions Architect Associate",
    description:
      "The holder of an AWS Solution Architect Associate certificate is proficient in designing scalable and secure cloud architectures using AWS services.",
    pdfSrc: "/Certifications/pdfs/AWSSAA.pdf",
    certBadgeImgSrc: "/Certifications/AWSSAA.png",
  },
];

export const educationData = [
  {
    "degree": "MSc Cybersecurity",
    "institution": "Munster Technological University",
    "location": "Cork, Ireland",
    "duration": "2026 - 2027",
    "description": "Specializing in cybersecurity, cloud security, and defensive operations."
  },
  {
    "degree": "BTech Computer Science and Engineering",
    "institution": "Vellore Institute of Technology",
    "location": "Vellore, India",
    "duration": "2022 - 2026",
    "grade": "CGPA: 9.02",
    "description": "Published research in IEEE Access and presented work on post-quantum cryptography."
  }
];

export const experiences = [
  {
    id: "exp1",
    title: "Junior Software Developer",
    company: "Xlancr",
    date: "December, 2024 - March, 2025",
    description: "Built and deployed a cross-platform Android app using React Native and Kotlin, achieving 100% client satisfaction. Developed responsive web apps using React.js, Next.js, and Tailwind CSS, reducing page load time by 30%"
  },
  {
    id: "exp2",
    title: "Frontend Developer Intern",
    company: "Xlancr",
    date: "August, 2024 - November, 2024",
    description: "Developed dynamic and visually engaging frontend web pages using React.js, Next.js, and Tailwind CSS, improving user engagement by 30% through enhanced UI/UX. Utilized Framer Motion to implement smooth animations, resulting in a 25% increase in user interaction and overall satisfaction, while reducing page load time by 15% through optimized animations performance.experience"
  },
  {
    id: "exp3",
    title: "Software Engineer Intern Trainee",
    company: "Alumnus Software",
    date: "January, 2024 - June, 2024",
    description: "Built and deployed a cross-platform Android app using React Native and Kotlin, achieving 100% client satisfaction. Developed responsive web apps using React.js,Next.js, and Tailwind CSS, reducing page load time by 30%"
  }
];

export const projects = [
  {
    id: "proj1",
    title: "Dilithium on RP2350A",
    description: "This work demonstrates the feasibility of deploying CRYSTALS-Dilithium on resource-constrained dual-core microcontrollers using a lightweight multicore strategy on the RP2350A, achieving consistent speedups of up to 1.15× across operations while maintaining deterministic execution and strong security guarantees. Despite modest gains, the results validate coarse-grained parallelism under tight constraints, with secure zeroization adding no measurable overhead, and energy savings of ~5–13% driven purely by reduced runtime.",
    details: "This project was made as part of my final year project for my bachelors,",
    mediaType: "video",
    mediaSrc: "https://www.youtube.com/embed/mkNXWcg6hvk?si=H86NRIkKjlxulpSh",
    link: "https://github.com/AchintyaNigam/DilithiumMulticore/tree/master/Version2"
  },
  {
    id: "proj2",
    title: "Kyber on RP2350A",
    description: "This project implements and evaluates single-core and multicore variants of Kyber on the Raspberry Pi Pico 2 W (RP2350A), with emphasis on runtime and energy efficiency. Across parameter sets, multicore key generation reduces runtime by approximately 26-28%, while encapsulation and decapsulation exhibit more modest improvements of up to 3-4%, with minor variance across security levels and sampling sizes. Power measurements indicate that total energy per operation decreases by 8.9-10.9%, despite a 1.3× increase in transient peak current, resulting in an overall energy-efficiency improvement of approximately 17% when normalized per unit time.",
    details: "This project was made as part of the final year project for my bachelors.",
    mediaType: "image",
    mediaSrc: "/ProjectPhotos/KyberFlow.png",
    link: "https://ieeexplore.ieee.org/document/11456492"
  },
  {
    id: "proj3",
    title: "BotaniQ",
    description: "botaniQ is an AI-powered, IoT-driven plant monitoring system designed for real-time tracking of soil health, temperature, humidity, and light exposure. Whether you're an urban gardener, a farmer, or a tech enthusiast, botaniQ ensures your plants thrive with automated insights and remote monitoring.",
    details: "This project was made for DEVSOC'25, the largest hacakthon in VIT. The team won the Environment and Sustainbility track prize.",
    mediaType: "image",
    mediaSrc: "/ProjectPhotos/BotaniQ.png",
    link: "https://github.com/SoumilB7/botaniQ"
  },
];
