
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Layers,
  Linkedin,
  Mail,
} from "lucide-react";

import {
  expertise,
  profileBio,
  profileName,
  profileRole,
  socialLinks,
} from "../data/profile";

import type { ExpertiseItem, SocialLink } from "../types";

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Behance: ExternalLink,
  Dribbble: Layers,
  Email: Mail,
};

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-full max-w-[420px] shrink-0 px-6 py-0 md:flex md:flex-col xl:pl-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex h-full flex-col "
      >
        <div>
          <h1 className="text-[42px] font-semibold leading-[1.05] tracking-[-0.04em] text-[#111]">
            {profileName}
          </h1>

          <p className="mt-5 max-w-[280px] text-[16px] leading-8 text-neutral-500">
            {profileRole}
          </p>

          <p className="mt-8 max-w-[340px] text-[16px] leading-8 text-neutral-500">
            {profileBio}
          </p>

          <div className="mt-10 flex flex-col gap-4">
            {expertise.map((item: ExpertiseItem) => (
              <div
                key={item.label}
                className="flex items-center gap-3 text-[15px] text-neutral-600"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#E85D2A]" />
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 flex gap-6">
          {socialLinks.map((link: SocialLink) => {
            const Icon =
              iconMap[link.icon as keyof typeof iconMap];

            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={link.label}
                className="text-neutral-400 transition hover:text-[#E85D2A]"
              >
                <Icon size={20} strokeWidth={1.7} />
              </a>
            );
          })}
        </div>
      </motion.div>
    </aside>
  );
}
