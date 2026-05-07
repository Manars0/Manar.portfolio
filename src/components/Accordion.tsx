import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type AccordionProps = {
  title: string;
  summary: string;
  children: React.ReactNode;
};

export function Accordion({ title, summary, children }: AccordionProps) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="rounded-[2rem] border border-border bg-surface/80 p-5 shadow-soft backdrop-blur-xl">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 text-left text-sm font-semibold uppercase tracking-[0.3em] text-text transition hover:text-accent"
      >
        <span>{open ? `Hide ${title}` : `View ${title}`}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: 'easeOut' }}
          className="text-muted"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <p className="mt-3 text-sm leading-7 text-muted">{summary}</p>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-6 space-y-6 text-sm leading-7 text-muted">{children}</div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
