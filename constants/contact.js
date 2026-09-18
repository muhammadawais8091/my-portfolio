import { SITE } from "./site";

export const CONTACT_INFO = [
  {
    icon: "phone",
    title: "Phone",
    description: SITE.phone,
    href: SITE.phoneHref,
  },
  {
    icon: "email",
    title: "Email",
    description: SITE.email,
    href: `mailto:${SITE.email}`,
  },
  {
    icon: "location",
    title: "Location",
    description: SITE.location,
    href: null,
  },
];

export const CONTACT_SOCIALS = [
  {
    icon: "linkedin",
    label: "LinkedIn",
    href: SITE.linkedin,
  },
  {
    icon: "github",
    label: "GitHub",
    href: SITE.github,
  },
];

export const CONTACT_FORM = {
  title: "Let's work together",
  description:
    "Have a project, role, or collaboration in mind? Drop a message and I'll get back to you.",
  submitLabel: "Send message",
  emailTo: SITE.email,
  fieldStyles:
    "h-[52px] bg-[#1c1c22] border-white/10 text-white placeholder:text-white/40 focus-visible:ring-accent focus-visible:ring-offset-0 focus-visible:border-accent",
  rightTitle: "Prefer another channel?",
  rightEyebrow: "Contact",
  rightDescription:
    "Reach me directly by phone, email, or social — I usually reply within a day.",
  socialLabel: "Find me online",
};
