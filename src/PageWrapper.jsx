import { motion } from 'framer-motion';

const pageVariant = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
}

export default function PageWrapper({ children }) {
  return (
    <motion.div
      variants={pageVariant}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.2 }}
      className="page-wrapper"
    >
      {children}
    </motion.div>
  );
}
