export type Project = {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  category: string;
  liveUrl?: string;
  clientGithubUrl?: string;
  features: string[];
  challenges: string[];
  futureImprovements: string[];
  purpose?: string;
  frontendTechnologies?: string[];
  backendTechnologies?: string[];
  libraries?: string[];
  serverApiUrl?: string;
  overview?: string;
  deployment?: string[];
};

export const projectsData: Project[] = [
  {
    id: "keenkeeper",
    slug: "keenkeeper",
    name: "KeenKeeper",
    shortDescription: "A modern personal relationship management application designed to help users build and maintain meaningful connections with friends. Track interactions, organize friendships, and gain AI-powered insights to strengthen relationships.",
    fullDescription: "KeenKeeper is a modern personal relationship management application designed to help users build and maintain meaningful connections with friends. It allows users to manage friendships, track interactions, view relationship insights, and receive AI-powered suggestions.",
    image: "/keenkeeper.png",
    technologies: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "React Router DOM",
      "Framer Motion",
      "Lucide React",
      "Sonner",
      "Google Gemini API"
    ],
    category: "Personal Relationship Management / Web Application",
    liveUrl: "https://keenkeeper-umber-nine.vercel.app/",
    clientGithubUrl: "https://github.com/asmaraf/KEENKEEPER",
    features: [
      "Friend Management — Add, edit, and organize friends with detailed profiles.",
      "Interaction Tracking — Keep a timeline of conversations, meetings, and memorable moments.",
      "Relationship Insights — View statistics and status indicators to identify relationships that need more attention.",
      "AI-Powered Assistance — Get intelligent suggestions using the Google Gemini API.",
      "Modern UI — Clean, responsive interface with smooth animations.",
      "Fast Performance — Built with Vite for an optimized development experience."
    ],
    challenges: [
      "Information will be added later."
    ],
    futureImprovements: [
      "Information will be added later."
    ]
  },
  {
    id: "skillsphere",
    slug: "skillsphere",
    name: "SkillSphere",
    shortDescription: "SkillSphere is a modern online learning platform designed to help students and professionals enhance their skills through high-quality, industry-expert courses. The platform offers secure authentication, intuitive course discovery, personalized user profiles, and a premium learning experience.",
    fullDescription: "SkillSphere is a secure, responsive, and engaging online learning platform where users can discover, explore, and enroll in expert-led courses. The platform aims to bridge the gap between industry professionals and learners through a modern user experience.",
    purpose: "The goal of SkillSphere is to provide a secure, responsive, and engaging online learning platform where users can discover, explore, and enroll in expert-led courses. It aims to bridge the gap between industry professionals and learners through a modern user experience.",
    image: "/skillsphere.png",
    technologies: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "DaisyUI", "Better Auth", "MongoDB", "Framer Motion", "Lucide React", "React Toastify"],
    frontendTechnologies: ["Next.js 16 (App Router)", "TypeScript", "Tailwind CSS v4", "DaisyUI"],
    backendTechnologies: ["Better Auth", "MongoDB"],
    libraries: ["Framer Motion", "Lucide React", "React Toastify"],
    category: "Full Stack Web Application / Online Learning Platform",
    liveUrl: "https://skill-sphere-lyart.vercel.app/",
    clientGithubUrl: "https://github.com/asmaraf/SkillSphere",
    features: [
      "Secure Authentication using Better Auth",
      "Email & Password Authentication",
      "Google Social Login",
      "Browse and search available courses",
      "Detailed course information with curriculum",
      "Instructor profiles and learning objectives",
      "Personalized user profile management",
      "Responsive and modern UI",
      "Smooth page transitions with Framer Motion",
      "Real-time notifications using React Toastify"
    ],
    challenges: ["Information will be added later."],
    futureImprovements: ["Information will be added later."]
  },
  {
    id: "docappoint",
    slug: "docappoint",
    name: "Doctor Appointment Manager (DocAppoint)",
    shortDescription: "DocAppoint is a full-stack Doctor Appointment Booking System that enables patients to browse doctors, book appointments, and manage their bookings through a secure and user-friendly interface. Built with modern web technologies, it delivers a fast, responsive, and seamless healthcare experience.",
    fullDescription: "DocAppoint simplifies the appointment booking process by allowing users to search doctors, filter specialists, securely authenticate, and manage appointments through a personalized dashboard.\n\nThe application follows a modern client-server architecture with JWT-based authentication and MongoDB as the database.",
    overview: "DocAppoint simplifies the appointment booking process by allowing users to search doctors, filter specialists, securely authenticate, and manage appointments through a personalized dashboard. The application follows a modern client-server architecture with JWT-based authentication and MongoDB as the database.",
    image: "/docappoint.png",
    technologies: [
      "Next.js 14", "React 18", "Tailwind CSS", "Lucide React", "React Hot Toast", "Axios",
      "Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT", "BcryptJS", "Vercel", "Render"
    ],
    frontendTechnologies: ["Next.js 14 (App Router)", "React 18", "Tailwind CSS"],
    backendTechnologies: ["Node.js", "Express.js", "MongoDB Atlas", "Mongoose", "JWT Authentication", "BcryptJS", "Cors", "Dotenv"],
    libraries: ["Lucide React", "React Hot Toast", "Axios"],
    deployment: ["Vercel (Client)", "Render (Server)"],
    category: "Full Stack Web Application / Doctor Appointment Booking System",
    liveUrl: "https://doc-appoint-client-nu.vercel.app",
    clientGithubUrl: "https://github.com/asmaraf/DocAppoint",
    serverApiUrl: "https://docappoint-server-mvur.onrender.com",
    features: [
      "Browse doctors by specialty, ratings, experience, and consultation fees.",
      "Search doctors by name, specialty, or hospital.",
      "Sort doctors by consultation fee and rating.",
      "Secure JWT Authentication with Email/Password.",
      "Google & GitHub Social Login.",
      "Private dashboard for managing appointments.",
      "Update appointments using controlled forms.",
      "Cancel appointments instantly.",
      "Dark & Light Mode.",
      "Fully responsive design for desktop, tablet, and mobile.",
      "Fast loading experience with custom animations."
    ],
    challenges: ["Information will be added later."],
    futureImprovements: ["Information will be added later."]
  }
];
