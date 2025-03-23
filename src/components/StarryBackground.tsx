import { useEffect, useRef } from 'react';

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);
    const stars: { x: number; y: number; z: number; radius: number }[] = [];
    const numStars = 800; 
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const speed = 0.2; 

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width - centerX,
        y: Math.random() * canvas.height - centerY,
        z: Math.random() * 1000,
        radius: Math.random() * 1.5,
      });
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.z = 1000;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }

        const k = 1000 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (
          px >= 0 &&
          px <= canvas.width &&
          py >= 0 &&
          py <= canvas.height
        ) {
          const size = (1 - star.z / 1000) * 3;
          const opacity = 1 - star.z / 1000;

          ctx.beginPath();
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

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