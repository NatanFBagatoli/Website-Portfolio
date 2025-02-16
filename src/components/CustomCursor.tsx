import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    // Enhanced check for interactive elements including text
    const handleHoverCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName.toLowerCase() === 'button' ||
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'input' ||
        target.tagName.toLowerCase() === 'p' ||
        target.tagName.toLowerCase() === 'span' ||
        target.tagName.toLowerCase() === 'h1' ||
        target.tagName.toLowerCase() === 'h2' ||
        target.tagName.toLowerCase() === 'h3' ||
        target.tagName.toLowerCase() === 'h4' ||
        target.tagName.toLowerCase() === 'h5' ||
        target.tagName.toLowerCase() === 'h6' ||
        target.onclick !== null ||
        getComputedStyle(target).cursor === 'pointer';
      
      setIsHovering(isInteractive);
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mousemove', handleHoverCheck);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mousemove', handleHoverCheck);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  const variants = {
    default: {
      scale: 1.4,
      rotate: 360,
      opacity: isVisible ? 1 : 0,
    },
    hover: {
      scale: 1.7,
      rotate: 360,
      opacity: isVisible ? 1 : 0,
    }
  };

  return (
    <motion.div
      className="fixed pointer-events-none z-[9999]"
      animate={{
        x: mousePosition.x - 24,
        y: mousePosition.y - 24,
      }}
      transition={{
        type: "tween",
        duration: 0,
      }}
    >
      <motion.svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        animate={isHovering ? "hover" : "default"}
        variants={variants}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          rotate: {
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }
        }}
      >
        {/* Base circle */}
        <circle
          cx="24"
          cy="24"
          r="18"
          stroke="#FF0000"
          strokeWidth="1.5"
          fill="none"
          opacity={isHovering ? 0 : 1}
        />
        
        {/* Center dot */}
        <circle
          cx="24"
          cy="24"
          r="3"
          fill="#FF0000"
          opacity={isHovering ? 0 : 1}
        />

        {/* Shuriken points */}
        <motion.g
          initial={{ scale: 0 }}
          animate={{ scale: isHovering ? 1 : 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {/* North point */}
          <path
            d="M24 6L28.5 18L24 24L19.5 18L24 6Z"
            fill="#FF0000"
          />
          {/* East point */}
          <path
            d="M42 24L30 28.5L24 24L30 19.5L42 24Z"
            fill="#FF0000"
          />
          {/* South point */}
          <path
            d="M24 42L19.5 30L24 24L28.5 30L24 42Z"
            fill="#FF0000"
          />
          {/* West point */}
          <path
            d="M6 24L18 19.5L24 24L18 28.5L6 24Z"
            fill="#FF0000"
          />
        </motion.g>
      </motion.svg>
    </motion.div>
  );
};

export default CustomCursor;