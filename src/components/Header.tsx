
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      className="sticky top-0 z-30 bg-[rgba(255,255,255,0.72)] backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 xl:px-8">
        <h1 className="text-[32px] font-bold tracking-[-0.03em] text-[#111]">
          Manar S
          <span className="text-[#E85D2A]">.</span>
        </h1>
      </div>
    </motion.header>
  );
}
