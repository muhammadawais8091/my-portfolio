export const EXPERIENCE = {
  icon: "",
  title: "My experience",
  description:
    "React & TypeScript specialist with ownership of frontend architecture, shared design systems, and production apps serving 1000+ enterprise sites — plus mentoring, code reviews, and cross-functional delivery.",
  items: [
    {
      company: "Kwanso, Lahore, Pakistan",
      position: "Senior Frontend Engineer",
      duration: "Mar 2022 – Apr 2026",
      responsibilities: [
        "Architected the frontend and shared component design system for ChexPass and Chex365, two production React applications serving 1000+ enterprise sites, converting UI/UX designs into responsive, accessible, cross-browser interfaces.",
        "Reduced new-feature development time by 30% by architecting a centralized, reusable UI component library (React, MUI, Tailwind, Yup) shared across 3 products via a monorepo, standardizing forms, layouts, and validation logic.",
        "Improved rendering performance and reduced unnecessary re-renders by migrating global state to Zustand and consolidating repeated GraphQL calls into reusable custom hooks, directly improving Core Web Vitals.",
        "Fixed a useEffect dependency issue causing the auth API to fire 3x on load reduced it to a single call, cutting redundant requests by ~66%.",
        "Delivered a Next.js 13 + TypeScript marketing site with SSR, lazy-loaded viewport-aware video, and Cloudinary-optimized media to cut load time and improve SEO.",
        "Worked in a Docker-based environment for consistent development and deployment workflows.",
        "Reviewed code and mentored 2 developers on React and component architecture, raising code quality and review turnaround across the team.",
        "Collaborated on API contracts with backend engineers and participated in Agile ceremonies, code reviews, and debugging sessions alongside UI/UX designers.",
      ],
    },
    {
      company: "Kalon Couture, Remote — Hong Kong",
      position: "Frontend Engineer",
      duration: "Mar 2021 – Feb 2022",
      responsibilities: [
        "Led frontend development of ShirtStylist, a production e-commerce React application, converting UI/UX wireframes into responsive, cross-device shopping experiences.",
        "Optimized REST API integration and checkout flows for speed and reliability, refactoring legacy UI architecture to improve component reusability and reduce reported UI defects.",
        "Delivered a fully accessible public site using HTML5, CSS3, and Tailwind CSS, achieving WCAG accessibility compliance on schedule.",
      ],
    },
    {
      company: "Maqware Solutions, Lahore, Pakistan",
      position: "Frontend UI Engineer",
      duration: "May 2019 – Feb 2021",
      responsibilities: [
        "Developed reusable React.js UI components for a multi-service consultancy platform, implementing complex multi-step forms with React Hook Form, Redux, and REST API integration.",
        "Designed responsive, cross-browser layouts (HTML5, CSS3, Bootstrap, SASS, Tailwind) verified across Chrome, Firefox, Safari, and Edge.",
      ],
    },
    {
      company: "Central College, Lahore, Pakistan",
      position: "Computer Science Lecturer",
      duration: "Oct 2016 – Mar 2019",
      responsibilities: [
        "Taught Intermediate Computer Science and communicated technical concepts clearly to students of varying skill levels.",
      ],
    },
  ],
};
