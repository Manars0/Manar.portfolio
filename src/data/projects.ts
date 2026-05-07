import type { Project } from "../types";

import tawafuq from "../assets/images/tawafuq.png";
import post from "../assets/images/post.png";
import ms from "../assets/images/ms.png";
import ds from "../assets/images/ds.png";
import ksu from "../assets/images/ksu.png";
import ksuds from "../assets/images/ksuds.png";
import skinCare from "../assets/images/skinCare.gif";
import sc from "../assets/images/sc.png";
import SmartCommunity from "../assets/images/SmartCommunity.gif";
import download from "../assets/images/download.gif";

export const projects: Project[] = [
  {
    id: "twafuq",
    number: 1,
    category: "FRONTEND",
    title: "Twafuq Platform",
    description:
      "A web-based platform developed during a hackathon, focused on simplifying user interactions through clean UI and intuitive flows. The experience was designed to reduce friction, improve accessibility, and deliver a clear, goal-driven journey for users within a limited timeframe.",
    tools: ["Figma", "React", "GitHub", "Vercel"],
    link: "https://twafuq-builathon.vercel.app/",
    imageId: tawafuq,
  },

  {
    id: "social-carousel",
    number: 2,
    category: "DESIGN",
    title: "Social Media Carousel Design",
    description:
      "A series of multi-slide social media posts designed to communicate ideas in a structured and engaging format. The layouts focus on visual hierarchy, clarity, and storytelling across slides to guide users smoothly from introduction to key message.",
    tools: ["Figma", "Photoshop"],
    imageId: post,
  },

  {
    id: "move-smart",
    number: 3,
    category: "UI/UX DESIGN",
    title: "MoveSmart Mobile App",
    description:
      "A mobile app concept designed during Naqlthon, focused on improving transportation experiences through clear navigation, structured flows, and user-friendly interfaces. The design emphasizes usability, accessibility, and smooth interaction across key user journeys.",
    tools: ["Figma", "Photoshop", "Android Studio", "Google Maps API"],
    link: "https://www.figma.com/proto/O99TOw7AwicB6kJetMXHTm/Naqlthon?node-id=36-1458&p=f&t=ENXig5Rq4B0bGZl9-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=75%3A90",
    imageId: ms,

    details: {
      title: "Design System",
      description:
        "A design system built around clarity, movement, and real-time interaction, reflecting the dynamic nature of transportation services.n/The color palette focuses on cool tones such as blue and green to represent trust, safety, and efficiency, while accent colors are used to highlight key actions and live updates.n/The system is designed to support quick decision-making, clear navigation, and a seamless user experience in time-sensitive scenarios.",
      imageId: ds,
    },
  },

  {
    id: "banking-mobile",
    number: 4,
    category: "UI/UX DESIGN",
    title: "Banking Mobile App UI",
    description:
      "A modern banking app interface designed to present financial information in a clear, structured, and accessible way. The UI focuses on simplifying complex data through intuitive layouts, strong hierarchy, and a clean visual system.",
    tools: ["Figma", "Photoshop"],
    imageId: ksu,

    details: {
      title: "Design System",
      description:
        "A structured design system focused on trust, stability, and clarity, aligning with the expectations of financial products.n/A deep green palette was chosen to represent security, growth, and reliability, supported by neutral tones to maintain balance and readability. Accent colors are used carefully to highlight transactions, alerts, and key financial actions without overwhelming the user.n/The system ensures that complex financial data is presented in a clear, accessible, and user-friendly way.",
      imageId: ksuds,
    },
  },

  {
    id: "skincare-store",
    number: 5,
    category: "UI/UX DESIGN",
    title: "Luxury Skincare Store Design",
    description:
      "A clean and modern e-commerce interface focused on showcasing skincare products with a premium feel. The design emphasizes visual clarity, spacing, and hierarchy to enhance product browsing and create a smooth shopping experience.",
    tools: ["Figma", "Photoshop"],
    link: "https://www.figma.com/make/1i3RTgS3M8o2pC21AUCTF1/Luxury-Skincare-Store-Design?t=dWGE8RZY51o7WURQ-0&fullscreen=1",
    imageId: skinCare,

    details: {
      title: "Design System",
      description:
        "A refined design system crafted to reflect a premium and calming skincare experience.n/Soft, neutral tones and light colors were selected to create a sense of cleanliness, elegance, and trust, while subtle accents help guide user attention without disrupting the minimal aesthetic.n/The system focuses on visual balance, whitespace, and product clarity to enhance browsing and create a smooth, luxurious user experience.",
      imageId: sc,
    },
  },

  {
    id: "smart-community",
    number: 6,
    category: "DASHBOARDS",
    title: "Smart Community Dashboard",
    description:
      "A data-driven dashboard designed to provide real-time insights into community operations, including energy usage, maintenance tracking, and resident engagement.The interface focuses on transforming complex data into clear, actionable visuals through structured layouts, intuitive charts, and a consistent design system.Special attention was given to readability, hierarchy, and scalability, ensuring the dashboard remains efficient and easy to navigate across different data scenarios.",
    tools: ["Figma", "SQL", "Supabase"],
    link: "https://www.figma.com/make/yWiPKDFlBvRHSuR2qqvDjf/Smart-Community-Dashboard?p=f&t=Wh6wctijZCoreJAu-0&fullscreen=1",
    imageId: SmartCommunity,
  },

  {
    id: "naqlthon",
    number: 7,
    category: "DASHBOARDS",
    title: "Transportation Dashboard (Naqlthon)",
    description:
      "A dashboard interface designed to monitor and manage transportation-related data efficiently. The layout focuses on clarity, quick data scanning, and structured information display to support better decision-making.",
    tools: ["Figma", "SQL", "Supabase","Google Maps API"],
    link: "https://www.figma.com/proto/O99TOw7AwicB6kJetMXHTm/Naqlthon?node-id=196-3351&p=f&t=ENXig5Rq4B0bGZl9-0&scaling=contain&content-scaling=fixed&page-id=122%3A682&starting-point-node-id=196%3A2872",
    imageId: download,
  },
];
