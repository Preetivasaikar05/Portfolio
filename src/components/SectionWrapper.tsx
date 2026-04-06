import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
};

const SectionWrapper = ({
  children,
  className = "",
}: SectionWrapperProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;