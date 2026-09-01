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
  serverGithubUrl?: string;
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
      "GSAP",
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
      "Modern UI & Animations — Clean, responsive interface with smooth transitions powered by Framer Motion and GSAP.",
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
    clientGithubUrl: "https://github.com/asmaraf/DocAppoint-Client",
    serverGithubUrl: "https://github.com/asmaraf/DocAppoint-Server",
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
    challenges: [
      "Preventing double-booking and slot conflicts during simultaneous user appointment requests with database-level validation.",
      "Implementing secure JWT authentication, session persistence, and social login across client routes and protected API endpoints.",
      "Designing multi-parameter doctor search, specialty filtering, and dynamic rating-based sorting with efficient MongoDB queries.",
      "Handling Render backend cold-start delays on free hosting through responsive loading indicators and graceful client error handling.",
      "Managing controlled form state for real-time appointment rescheduling and instant cancellation with feedback via React Hot Toast."
    ],
    futureImprovements: [
      "Automated SMS and email notifications/reminders for upcoming appointments using Twilio and Nodemailer.",
      "Integrated online payment gateway (Stripe / SSLCommerz) for advance consultation fee payments.",
      "Telemedicine & video consultation feature using WebRTC for remote patient checkups.",
      "Doctor dashboard for managing personal schedules, working hours, and time slot availability.",
      "Patient medical record and past prescription upload capability during booking."
    ]
  },
  {
    id: "bloodlife",
    slug: "bloodlife",
    name: "BloodLife",
    shortDescription: "A modern blood donation management platform designed to connect voluntary blood donors with individuals and hospitals in need of blood across Bangladesh.",
    fullDescription: "BloodLife is a modern full-stack blood donation management platform designed to connect voluntary blood donors with individuals and hospitals in need of blood across Bangladesh. The platform streamlines medical emergencies through location-based donor search (district and upazila level), role-based dashboards (Donor, Volunteer, Admin), donation request tracking, transparent funding with Stripe, and downloadable PDF reports.",
    overview: "BloodLife connects voluntary blood donors with individuals and hospitals in critical need across Bangladesh. Built with React 18, Vite, and Tailwind CSS, it offers a seamless experience with role-based dashboards, real-time donation requests, location-based donor search with PDF export, and Stripe donation funding.",
    image: "/bloodlife.png",
    technologies: [
      "React 18", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Vite 5",
      "JWT Authentication", "Stripe", "Framer Motion", "GSAP", "Spline 3D", "Recharts", "jsPDF"
    ],
    frontendTechnologies: ["React 18", "Vite 5", "Tailwind CSS", "React Router DOM", "Framer Motion", "GSAP", "Spline 3D", "Lucide React"],
    backendTechnologies: ["Node.js", "Express.js", "MongoDB", "JWT Authentication"],
    libraries: ["Framer Motion", "GSAP", "Lucide React", "Spline 3D", "Stripe", "Recharts", "jsPDF", "html2canvas", "Axios"],
    deployment: ["Vercel (Client)", "Render (Server)"],
    category: "Full Stack Web Application / Blood Donation Management System",
    liveUrl: "https://blodd-donation-client.vercel.app/",
    clientGithubUrl: "https://github.com/asmaraf/blodd-donation-client",
    serverGithubUrl: "https://github.com/asmaraf/blodd-donation-server",
    serverApiUrl: "https://blodd-donation-server.onrender.com",
    features: [
      "Blood donor search by blood group",
      "District and Upazila filtering",
      "Location-based donor discovery",
      "Donation request management",
      "Donation request status tracking",
      "JWT authentication",
      "Protected routes",
      "Role-based access control",
      "Donor, Volunteer and Admin dashboards",
      "User profile management",
      "Stripe funding/payment integration",
      "Donation and funding analytics",
      "Dark and Light mode",
      "Responsive UI",
      "Glassmorphism UI",
      "Smooth animations",
      "Interactive 3D elements"
    ],
    challenges: [
      "Implementing role-based access control for Donor, Volunteer and Admin users",
      "Managing protected routes and JWT authentication",
      "Building location-based donor filtering using district and upazila data",
      "Integrating Stripe payment functionality",
      "Managing donation request status and role-specific workflows",
      "Maintaining a responsive interface across desktop, tablet and mobile"
    ],
    futureImprovements: [
      "Real-time notifications for urgent blood requests",
      "Improved donor availability tracking",
      "More advanced analytics and reporting",
      "SMS/email notifications for donation requests",
      "Better hospital integration",
      "Improved location-based donor matching"
    ]
  },
  {
    id: "ignitefund",
    slug: "ignitefund",
    name: "IgniteFund",
    shortDescription: "A modern crowdfunding platform that connects supporters with creators through campaign discovery, credit-based pledging, role-based dashboards, campaign management, and secure contribution workflows.",
    fullDescription: "IgniteFund is a modern responsive Single Page Application (SPA) frontend for a crowdfunding ecosystem. It provides role-tailored experiences for Supporters, Creators, and Administrators.\n\nThe platform connects supporters with creators through campaign discovery, credit-based pledging, role-based dashboards, campaign management, and secure contribution workflows. Designed with modern glassmorphism aesthetics and hardware-accelerated animations, IgniteFund facilitates community-driven project funding with full transparency.",
    overview: "IgniteFund is a modern responsive Single Page Application (SPA) frontend for a crowdfunding ecosystem. It provides role-tailored experiences for Supporters, Creators, and Administrators.",
    image: "/ignitefund.png",
    technologies: [
      "React 18.3.1",
      "Vite 6.0.7",
      "React Router DOM",
      "Framer Motion",
      "GSAP",
      "Lenis",
      "Swiper",
      "Lucide React",
      "Spline 3D",
      "Canvas Confetti",
      "Google OAuth 2.0",
      "Axios",
      "Vanilla CSS"
    ],
    frontendTechnologies: [
      "React 18.3.1",
      "Vite 6.0.7",
      "React Router DOM",
      "Vanilla CSS"
    ],
    backendTechnologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT & Google OAuth 2.0"
    ],
    libraries: [
      "Framer Motion",
      "GSAP",
      "Lenis",
      "Swiper",
      "Lucide React",
      "Spline 3D",
      "Canvas Confetti",
      "Axios"
    ],
    deployment: ["Vercel (Client)", "Render (Server)"],
    category: "Full Stack Web Application / Crowdfunding Platform",
    liveUrl: "https://ignite-fund-client.vercel.app/",
    clientGithubUrl: "https://github.com/asmaraf/IgniteFund-Client",
    serverGithubUrl: "https://github.com/asmaraf/IgniteFund-Server",
    serverApiUrl: "https://ignitefund-server.onrender.com",
    features: [
      "Crowdfunding campaign discovery with live search, category filtering, and sorting.",
      "Detailed campaign pages with funding progress, pledge tiers, and backer engagement.",
      "Supporter dashboard to browse campaigns, search/filter, pledge credits, purchase credits, track contributions, view payment history, and report suspicious campaigns.",
      "Creator dashboard to create campaigns, upload campaign images, manage campaigns, monitor funding progress, review pledges, approve/reject pending pledges, request withdrawals, and view withdrawal history.",
      "Admin dashboard to view platform statistics, approve/reject campaigns, manage users, manage user roles, manage campaigns, review reports, and review creator withdrawal requests.",
      "Role-based protected routes and session persistence / rehydration after page refresh.",
      "Google OAuth 2.0 authentication alongside protected route management.",
      "Pledge management and credit purchasing workflows with payment history tracking.",
      "Suspicious campaign reporting and administrator moderation pipeline.",
      "Real-time in-app notifications and animated platform statistics.",
      "Interactive 3D hero scene powered by Spline 3D and smooth scrolling with Lenis.",
      "Swiper carousels and celebration confetti interactions.",
      "Responsive modern glassmorphism UI built with Vanilla CSS."
    ],
    challenges: [
      "Implementing multiple role-based dashboard experiences",
      "Protecting routes based on user roles",
      "Maintaining session state after page refresh",
      "Managing campaign discovery with search, filtering and sorting",
      "Building pledge and credit workflows",
      "Handling creator withdrawal workflows",
      "Integrating Google OAuth authentication",
      "Creating smooth animations and interactive 3D elements without hurting usability"
    ],
    futureImprovements: [
      "More advanced campaign recommendation",
      "Real-time campaign updates",
      "Improved notification delivery",
      "Enhanced payment and payout workflows",
      "More detailed campaign analytics",
      "Improved fraud and suspicious-campaign detection",
      "Mobile-focused dashboard improvements"
    ]
  }
];
