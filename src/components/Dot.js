import { useRef, useEffect } from 'react';

export default function Dot({}) {
  
  const canvasRef = useRef(null);
  const animationRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    //Set canvas size to full screen
    const setCanvasFullScreen = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasFullScreen();
    window.addEventListener('resize', setCanvasFullScreen);

    // Initial position of the dot
    let x = Math.random() * canvas.width;
    let y = Math.random() * canvas.height;

    // Next random position
    let nextX = Math.random() * canvas.width;
    let nextY = Math.random() * canvas.height;

    const draw = () => {
      const { width, height } = canvas;

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, width, height);

      //Movement
      x += (nextX - x) * 0.01;
      y += (nextY - y) * 0.01;

      if (Math.abs(x - nextX) < 2 && Math.abs(y - nextY) < 2) {
        nextX = Math.random() * width;
        nextY = Math.random() * height;
      }

      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.shadowBlur = 20;
      ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
      ctx.fill();

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    // Cleanup on component unmount
    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', setCanvasFullScreen);
    };
  }, []);

  return (
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
          width: '100vw',
          height: '100vh',
        }}
      />
  );
}
