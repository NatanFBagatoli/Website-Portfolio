import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  // Reference to the canvas element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Function to set canvas size based on window dimensions
    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    // Add resize listener to update canvas size when window resizes
    window.addEventListener('resize', setCanvasSize);

    // Star configuration
    const stars: { x: number; y: number; z: number; radius: number }[] = [];
    const numStars = 800; // Number of stars to render
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 0.2; // Speed of star movement

    // Initialize stars with random positions
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - centerX,
        y: Math.random() * canvas.height - centerY,
        z: Math.random() * 1000,
        radius: Math.random() * 1.5,
      });
    }

    // Animation loop for star movement
    const animate = () => {
      // Create fade effect by adding semi-transparent black layer
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw each star
      stars.forEach((star) => {
        // Move stars closer (z gets smaller)
        star.z -= speed;

        // Reset star position when it gets too close
        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }

        // Project 3D position to 2D screen coordinates
        const k = 1000 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        // Draw star if it's within canvas bounds
        if (
          px >= 0 &&
          px <= canvas.width &&
          py >= 0 &&
          py <= canvas.height
        ) {
          // Calculate star size and opacity based on distance
          const size = (1 - star.z / 1000) * 3;
          const opacity = 1 - star.z / 1000;

          // Draw the star
          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Continue animation loop
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup: remove resize listener when component unmounts
    return () => {
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
    />
  );
};

export default StarryBackground;