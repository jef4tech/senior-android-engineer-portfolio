import { KeyMetric, DomainContribution, ProjectDetail, CareerMilestone, CapabilityGroup, CoreValue } from "./types";

export const PERSONAL_METARGETS = {
  name: "Jeffin Johny",
  title: "Senior Android Architect",
  subTitle: "Senior Android Engineer Building Reliable Android Products From Idea to Production",
  experienceYears: "6+",
  downloadsContributed: "500K+",
  productionApps: "12+",
  playStoreReleases: "100+",
  email: "contact@jeffinjohny.com",
  linkedinUrl: "https://linkedin.com/in/jeffinjohny",
  githubUrl: "https://github.com/jeffinjohny",
  resumeUrl: "#",
};

export const INSTANT_HIGHLIGHTS = [
  { iconId: "Calendar", label: "6+ Years Experience" },
  { iconId: "Download", label: "500K+ Downloads" },
  { iconId: "Cpu", label: "Real-Time Systems" },
  { iconId: "Rocket", label: "Play Store Releases" },
];

export const IMPACT_METRICS: KeyMetric[] = [
  { value: "6+", label: "YEARS EXPERIENCE" },
  { value: "500K+", label: "DOWNLOADS CONTRIBUTED" },
  { value: "12+", label: "PRODUCTION APPS" },
  { value: "RTC", label: "REAL-TIME EXPERT" },
  { value: "100+", label: "PLAY STORE RELEASES" },
  { value: "Agile", label: "X-FUNCTIONAL TEAMS" },
];

export const DOMAIN_CONTRIBUTIONS: DomainContribution[] = [
  {
    iconId: "Activity",
    title: "Healthcare & CRM Solutions",
    description: "Contributed to multiple Android applications designed for medical representatives and field teams.",
    achievements: ["Stock Management", "Route Planning"],
    tag: "HEALTHCARE",
  },
  {
    iconId: "ShoppingCart",
    title: "E-Commerce Applications",
    description: "Built and maintained Android commerce experiences focused on user engagement and product discovery.",
    achievements: ["Product Discovery", "User Engagement"],
    tag: "E-COMMERCE",
  },
  {
    iconId: "Wrench",
    title: "Service Booking Platforms",
    description: "Contributed to service-oriented Android applications connecting customers, workers, and administrators.",
    achievements: ["Worker Management", "Admin Dashboards"],
    tag: "SERVICE BOOKING",
  },
];

export const PROJECTS: ProjectDetail[] = [
  {
    id: "flashat",
    title: "Flashat: Real-Time Social Communication",
    company: "Appadore Private Limited",
    role: "Senior Android Engineer",
    duration: "August 2023 – March 2026",
    downloads: "500K+",
    category: "REAL-TIME COMMUNICATION",
    description: "Owned the development of high-performance video communication systems and immersive daily media modules for Flashat, serving half a million active users.",
    challenge: "Solved complex Android audio routing issues across OEM-customized devices while maintaining stable RTC connections and ultra-low lag video feed frames on mid-to-low end devices.",
    impact: [
      "Developed Video Calling Module using Agora & custom native layout layers.",
      "Built interactive high-performance Feed Module with cached scrolling lists.",
      "Integrated real-time socket orchestration and presence trackers.",
      "Shipped 20+ major production releases onto Google Play.",
      "Reduced calling latency by 22% and battery consumption by 15%.",
    ],
    techStack: ["Socket.io", "Agora SDK", "Jetpack Compose", "MVVM"],
    imageUrl: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000",
  },
];

export const AUXILIARY_PROJECTS = [
  {
    title: "Interview Tracker",
    category: "PERSONAL PRODUCTIVITY",
    isComingSoon: true,
    description: "Enterprise-grade pipeline tracking system for engineers managing technical interview cycles.",
    techStack: ["MVVM", "Clean Architecture", "Room DB"],
  },
  {
    title: "Sky Tracker",
    category: "WEATHER APPLICATION",
    isComingSoon: false,
    description: "Precision weather and atmospheric index tracker integrated with RESTful atmospheric API services.",
    techStack: ["Retrofit", "MVVM", "Flow API"],
  },
];

export const CORE_CAPABILITIES: CapabilityGroup[] = [
  {
    iconId: "Smartphone",
    title: "Modern Android Development",
    description: "Building scalable Android applications using modern Android frameworks and development practices.",
    skills: ["Kotlin", "Jetpack Compose", "Android SDK", "Coroutines", "WorkManager"],
  },
  {
    iconId: "GitMerge",
    title: "Mobile Architecture",
    description: "Designing maintainable Android applications with clear separation of concerns and scalable architecture patterns.",
    skills: ["MVVM", "Clean Architecture", "Navigation Component", "Feature-Based Development"],
  },
  {
    iconId: "Radio",
    title: "Real-Time Communication",
    description: "Developing communication features that require low latency, reliability, and seamless user interaction.",
    skills: ["Socket.io", "Agora SDK", "Messaging Systems", "Video Calling"],
  },
  {
    iconId: "Database",
    title: "Data & Offline Experience",
    description: "Creating reliable local-first mobile experiences with efficient data management and persistence strategies.",
    skills: ["Room Database", "SQLite", "Firebase Firestore", "Offline Data Handling"],
  },
  {
    iconId: "Rocket",
    title: "Product Delivery",
    description: "Shipping Android applications from development to production while monitoring quality and user experience.",
    skills: ["Google Play Console", "Release Management", "Crashlytics", "Analytics", "Agile Development"],
  },
];

export const TIMELINE_EXPERIENCE: CareerMilestone[] = [
  {
    role: "Senior Android Engineer",
    company: "Appadore Private Limited",
    period: "August 2023 – March 2026",
    isFeatured: true,
    description: "Owned the architecture and deployment of video-conferencing modules, optimizing system-level processes to decrease dropped frame counts.",
    achievements: [
      "Developed Video Calling Module & Feed integrations.",
      "Reduced system memory allocations via strict object profiling.",
      "Integrated secure WebRTC and Agora systems for low-latency calls.",
      "Collaborated with dev teams to streamline Play Store releases.",
    ],
    challenge: "Resolving inconsistent audio ducking and speakerphone redirection across varied OEM implementations of Android 12 through 14.",
    collaborators: "Android Developers, Backend Engineers, UI Designers, QA Teams",
    skills: ["Real-Time Communication", "Feature Ownership", "Performance Optimization", "Product Development"],
  },
  {
    role: "Android Developer",
    company: "Catsys Technologies",
    period: "2023",
    description: "Built scalable retail e-commerce applications integrating secure Firebase-driven authentications and sync loops.",
    skills: ["Firebase Firestore", "REST APIs", "Jetpack Compose"],
  },
  {
    role: "Freelance Android Developer",
    period: "2022 – 2023",
    company: "Self-Employed",
    description: "Crafted multi-industry custom utility apps focusing on modular MVVM structures, Retrofit API handlers, and unit-tested components.",
    skills: ["MVVM", "Retrofit", "Unit Testing"],
  },
  {
    role: "Android Developer",
    company: "Kraftlabs Technologies",
    period: "2019 – 2021",
    description: "Programmed corporate service CRM frameworks enabling field engineers to synch activity reports with Firebase Cloud Messaging pipelines.",
    skills: ["CRM Integrations", "FCM Push", "SQLite"],
  },
  {
    role: "Android Developer",
    company: "Grapes Technologies",
    period: "2019",
    description: "Collaborated on debugging core navigation packages, UI flow components, and socket-level networking connections.",
    skills: ["Java/Kotlin", "SDK Development", "Git Flow"],
  },
];

export const CORE_VALUES: CoreValue[] = [
  {
    iconId: "Lightbulb",
    title: "Product Thinking",
    description: "I don't just write code; I analyze retention, conversion, and business metrics to ensure technical decisions align perfectly with real user needs.",
  },
  {
    iconId: "ShieldCheck",
    title: "Absolute Ownership",
    description: "From layout prototypes up to Google Console pipelines and post-release Crashlytics, I manage the continuous integrity of features with rigorous care.",
  },
  {
    iconId: "Users",
    title: "Fluid Collaboration",
    description: "Bridging communication between designers, cloud developers, and product managers to guarantee clean contract interfaces and high iteration speeds.",
  },
];
