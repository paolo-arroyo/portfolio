'use client';

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";

type PageTransitionProps = {
  children: React.ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ 
            opacity: 0, 
            transition: { duration: 0.4, ease: "easeInOut", delay: 1 },
          }}
          className="h-screen w-scereen fixed top-0 bg-primary pointer-events-none"
        />
          {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition;