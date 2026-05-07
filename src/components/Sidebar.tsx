import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Layers, Linkedin, Mail, Sparkles, Terminal, Zap } from 'lucide-react';
import {
  expertise,
  profileBio,
  profileName,
  profileRole,
  socialLinks,
} from "../data/profile";

import type { ExpertiseItem, SocialLink } from "../types";
import { link } from 'framer-motion/m';

const iconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  Behance: ExternalLink,
  Dribbble: Layers,
  Email: Mail,
};

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-screen w-full max-w-[420px] shrink-0 border-r border-border bg-surface/80 px-6 py-10 shadow-soft backdrop-blur-xl md:flex md:flex-col xl:px-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="flex h-full flex-col justify-between gap-10"
      >
        <div>
          <h6 className="mt-5 text-5xl font-semibold leading-tight text-text md:text-6xl">{profileName}</h6>
          <p className="mt-6 max-w-sm text-base leading-8 text-muted">{profileRole}</p>
          <p className="mt-8 max-w-lg text-base leading-8 text-muted">{profileBio}</p>

          <div className="mt-10 space-y-3">
            {expertise.map((item: ExpertiseItem) => (
              <div key={item.label} className="flex items-center gap-3 text-sm text-muted">
                <span className="h-2.5 w-2.5 rounded-full bg-accent"></span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto space-y-4 text-sm text-muted">
          <div className="flex gap-4">
            {socialLinks.map(((link: SocialLink) => {
              const Icon = iconMap[link.icon as keyof typeof iconMap];
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-3xl border border-border bg-white/85 text-text transition hover:-translate-y-1 hover:border-accent hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
                >
                  <Icon size={18} />
                </a>
              );
            }))}
          </div>
        </div>
      </motion.div>
    </aside>
  );
}
