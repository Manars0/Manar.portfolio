import { motion } from 'framer-motion';
import { LayoutGrid } from 'lucide-react';

export function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-30 border-b border-white/70 bg-white/55 backdrop-blur-soft"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 xl:px-8">
        <div className="flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-muted">
          <span>Manar S.</span>
        </div>
      </div>
    </motion.header>
  );
}
