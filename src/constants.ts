import SeymorrImage from './assets/SEYMORR.avif';
import RadioMateImage from './assets/RadioMate.avif';
import AirBeatsImage from './assets/AirBeats.avif';
import DriveZeroImage from './assets/DriveZero.avif';
import FuseSystemsImage from './assets/FuseSystems.avif';
import MusistImage from './assets/Musist.avif';
import DigiBotImage from './assets/DigiBot.avif';

export interface Project {
  title: string;
  role: string;
  description: string;
  problem?: string;
  features?: string[];
  tech: string[];
  impact: string;
  webLink?: string;
  mobileLink?: string;
  image: string;
  category: 'Broadcasting' | 'Environment' | 'Social Media' | 'E-Commerce' | 'AI Assistant' | 'Academic' | 'Hospitality';
}

export interface Experience {
  company: string;
  role: string;
  duration: string;
  location: string;
  impact: string[];
}

export interface Education {
  degree: string;
  institution: string;
  score: string;
  core: string[];
  minorProject: string;
  majorProject: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const CONTACT_EMAILS = [
  "connect.gurpreet@outlook.com",
  "guri085208@gmail.com"
];

export const PROJECTS: Project[] = [
  {
    title: "SEYMORR – Premium Café & Restaurant Website",
    role: "Full Stack Developer (Laravel)",
    category: "Hospitality",
    description: "SEYMORR is a modern, promotional single-page website designed for a café/restaurant brand. The goal was to create a visually appealing and conversion-focused digital presence that reflects the ambiance, quality, and premium feel of the café while keeping the user experience simple and engaging.",
    impact: "Showcasing the brand, menu highlights, atmosphere, and key information in a clean and elegant way.",
    tech: ["Laravel", "PHP", "Tailwind CSS", "Alpine.js"],
    image: SeymorrImage
  },
  {
    title: "RadioMate",
    role: "Lead Backend Developer",
    category: "Broadcasting",
    description: "Architected the complete backend & API suite for a digital radio platform.",
    impact: "Powering seamless broadcasting for thousands of daily listeners with 99.9% uptime.",
    webLink: "https://radiomate.com.au/",
    mobileLink: "https://play.google.com/store/apps/details?id=com.radiomate.australia",
    tech: ["Laravel", "PHP", "MySQL", "REST API"],
    image: RadioMateImage
  },
  {
    title: "AirBeats",
    role: "Lead Backend Developer",
    category: "Broadcasting",
    description: "Unified backend system for digital radio management and listener interaction.",
    impact: "Streamlined show scheduling and real-time listener requests across platforms.",
    webLink: "https://airbeats.com.au/",
    mobileLink: "https://play.google.com/store/apps/details?id=com.airbeats.android&pcampaignid=web_share",
    tech: ["Laravel", "PHP", "MySQL", "REST API"],
    image: AirBeatsImage
  },
  {
    title: "DriveZero",
    role: "API & Systems Architect",
    category: "Environment",
    description: "Engineered a unified real-time data-sharing system for vehicle CO2 emission tracking.",
    impact: "Enabled companies to reduce their carbon footprint by providing actionable real-time insights.",
    mobileLink: "https://play.google.com/store/apps/details?id=com.drivezero.app&pcampaignid=web_share",
    tech: ["Laravel", "MySQL", "REST API", "Mobile Sync"],
    image: DriveZeroImage
  },
  {
    title: "Fuse Systems",
    role: "Performance Specialist & Full Stack",
    category: "E-Commerce",
    description: "A full-fledged e-commerce platform with advanced product management and cart systems.",
    impact: "Improved page load speeds by 40% and handled 3x more concurrent users.",
    webLink: "https://fuse.systems/",
    tech: ["Laravel", "MySQL", "Bootstrap", "SCSS"],
    image: FuseSystemsImage
  },
  {
    title: "Musist",
    role: "API Developer",
    category: "Social Media",
    description: "A social media platform centered on music and self-expression.",
    impact: "Built a robust API that supports high-frequency social interactions and media processing.",
    mobileLink: "https://play.google.com/store/apps/details?id=com.musist.app&pcampaignid=web_share",
    tech: ["Laravel", "PHP", "MySQL", "Firebase"],
    image: MusistImage
  },
  {
    title: "DigiBot",
    role: "Backend Developer",
    category: "AI Assistant",
    description: "At DigiBot, we believe that managing your schedule, tasks, and wellness should be effortless. That’s why we’ve created an AI-powered assistant that takes personal organization to the next level. Whether you’re keeping track of appointments, optimizing your workflow, or focusing on your health, DigiBot is designed to simplify your life with intelligent automation and seamless integration.",
    impact: "Smart Task & Appointment Prioritization, Seamless Contact Integration, and AI-Powered Productivity Tools.",
    mobileLink: "https://apps.apple.com/in/app/digibot/id6670211701",
    tech: ["Laravel", "PHP", "REST API", "Mobile"],
    image: DigiBotImage
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Freelance Full Stack Developer",
    role: "Self-Employed",
    duration: "Nov 2025 – Present",
    location: "Mukerian",
    impact: [
      "Building a modern e-commerce platform (Laravel + React + TypeScript via Inertia.js) for a local SME, from DB schema to Linux deployment.",
      "Delivering custom REST APIs, admin panels, and Sanctum-authenticated endpoints tailored to specific business workflows.",
      "Using Cursor AI and GitHub Copilot to reduce boilerplate and accelerate feature delivery."
    ]
  },
  {
    company: "Mind2Web",
    role: "Software Engineer",
    duration: "Mar 2025 – Oct 2025",
    location: "On-site",
    impact: [
      "Built and maintained complex RESTful APIs for high-speed data communication across web & mobile platforms.",
      "Optimized MySQL and PostgreSQL queries, reducing response times and improving application scalability.",
      "Resolved critical production issues to maintain high uptime for live client systems."
    ]
  },
  {
    company: "Dharmani Apps and Software",
    role: "Web Developer",
    duration: "Oct 2021 – Oct 2024",
    location: "On-site",
    impact: [
      "Led frontend development for 10+ client projects — responsive, pixel-perfect UI using Bootstrap 5 & SCSS.",
      "Built Laravel API infrastructure for iOS/Android mobile apps, ensuring seamless data synchronization.",
      "Integrated Firebase for real-time features; managed cross-platform data architecture."
    ]
  },
  {
    company: "Hilt Web Solutions Pvt. Ltd.",
    role: "PHP Developer Intern",
    duration: "Nov 2020 – Aug 2021",
    location: "On-site",
    impact: [
      "Built dynamic PHP/MySQL websites; implemented responsive, cross-browser-compatible frontend designs."
    ]
  }
];

export const EDUCATION: Education = {
  degree: "Bachelor of Computer Applications (BCA)",
  institution: "Modern Group of Colleges",
  score: "CGPA 7.5/10",
  core: ["Data Structures", "DBMS", "Operating Systems", "Computer Networks", "Software Engineering", "Web Technologies", "OOP with C++/Java"],
  minorProject: "Digital Publication Platform in Django.",
  majorProject: "Digital Publication Platform in Flask."
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend Architecture",
    skills: ["Laravel", "PHP 8+", "RESTful APIs", "Middleware", "Sanctum / Passport Auth"]
  },
  {
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Inertia.js", "ES6+", "SCSS/SASS", "Tailwind CSS"]
  },
  {
    title: "Data Management",
    skills: ["MySQL", "PostgreSQL", "Query Optimization", "DB Normalization", "Firebase"]
  },
  {
    title: "AI & Tools",
    skills: ["Cursor AI", "GitHub Copilot", "ChatGPT", "Git/GitHub", "Postman", "Figma"]
  }
];
