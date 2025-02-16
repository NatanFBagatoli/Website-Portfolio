import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    // Full-screen container for the loading screen
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      {/* Animated container for loading elements */}
      <motion.div
        // Initial animation state
        initial={{ opacity: 0, scale: 0.5 }}
        // Animation target state
        animate={{ opacity: 1, scale: 1 }}
        // Animation duration
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {/* Spinning loading indicator */}
        <div className="w-24 h-24 border-4 border-red-700 border-t-transparent rounded-full animate-spin mb-4" />
        {/* Animated "Loading..." text */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-red-700"
        >
          Loading...
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;