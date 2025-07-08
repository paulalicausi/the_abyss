import { useRef, useEffect } from 'react';

export default function Colors({}) {
  
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
  
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
  
      // Create particles
      const particles = [];
      const particlesQuant = 100;
  
      // Add random properties to particles
      for (let i = 0; i < particlesQuant; i++) {
        particles.push({
          angle: Math.random() * Math.PI * 2,
          radius: 50 + Math.random() * 200,
          speed: 0.001 + Math.random() * 0.002,
          size: 1 + Math.random() * 2,
          hue: Math.random() * 360,
        });
      }
  
      const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 1)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
  
        // Main animation loop
        particles.forEach(p => {
          const x = centerX + Math.cos(p.angle) * p.radius;
          const y = centerY + Math.sin(p.angle) * p.radius;
  
          ctx.beginPath();
          ctx.arc(x, y, p.size, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${p.hue}, 100%, 70%)`;
          ctx.shadowBlur = 10;
          ctx.shadowColor = `hsl(${p.hue}, 100%, 70%)`;
          ctx.fill();
  
          p.angle += p.speed;
          p.hue = (p.hue + 0.5) % 360;
        });
  
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
