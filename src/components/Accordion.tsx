import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

type AccordionProps = {
  title: string;
  summary?: string;
  children: React.ReactNode;
};

export function Accordion({
  title,
  summary,
  children,
}: AccordionProps) {
  const [open, setOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="w-full">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
        className="group inline-flex items-center gap-2 text-[15px] text-[#E85D2A] transition"
      >
        <span>
          {open ? `Hide ${title}` : `View ${title}`}
        </span>

        <motion.span
          animate={{ x: open ? 4 : 0 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.2,
          }}
          className="transition-transform"
        >
        </motion.span>
      </button>

      {summary ? (
        <p className="mt-3 text-[15px] leading-[1.8] text-neutral-500">
          {summary}
        </p>
      ) : null}

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="overflow-hidden"
          >
            <div className="pt-8">
              {children}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
