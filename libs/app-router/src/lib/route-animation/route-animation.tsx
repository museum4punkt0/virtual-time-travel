import { ReactNode } from "react";
import { motion } from "framer-motion";

export interface RouteAnimationProps {
  children: ReactNode;
}

export const RouteAnimation = ({ children }: RouteAnimationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-full flex justify-center relative"
    >
      {children}
    </motion.div>
  );
};