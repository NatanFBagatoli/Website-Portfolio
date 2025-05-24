import { useEffect, useRef } from 'react';

const NUM_STARS = 800;
const MAX_Z = 1000;
const SPEED = 0.2;

const StarryBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<{ x: number; y: number; z: number; radius: number }[]>([]);
  const animationRef = useRef<number>();

  // Função para inicializar as estrelas
  const createStars = (width: number, height: number) => {
    const centerX = width / 2;
    const centerY = height / 2;
    const stars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: Math.random() * width - centerX,
        y: Math.random() * height - centerY,
        z: Math.random() * MAX_Z,
        radius: Math.random() * 1.5,
      });
    }
    starsRef.current = stars;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars(canvas.width, canvas.height);
    };

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    const animate = () => {
      const { width, height } = canvas;
      const centerX = width / 2;
      const centerY = height / 2;

      // Preenche o fundo de preto
      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, width, height);

      starsRef.current.forEach((star) => {
        star.z -= SPEED;
        if (star.z <= 0) {
          star.z = MAX_Z;
          star.x = Math.random() * width - centerX;
          star.y = Math.random() * height - centerY;
        }
        const k = MAX_Z / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const size = (1 - star.z / MAX_Z) * 3;
          const opacity = 1 - star.z / MAX_Z;
          ctx.beginPath();
          ctx.fillStyle = `rgba(255,255,255,${opacity})`;
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', setCanvasSize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
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