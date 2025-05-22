// components/OutletWrapper.jsx
import { useOutlet } from "react-router-dom";
import { motion } from "framer-motion";

export default function OutletWrapper() {
  const element = useOutlet();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-100"
    >
      {element}
    </motion.div>
  );
}
