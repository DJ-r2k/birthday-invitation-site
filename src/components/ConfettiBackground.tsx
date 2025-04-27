import { useEffect, useState } from 'react';

interface Confetti {
  id: number;
  x: number;
  y: number;
  color: string;
  duration: number;
  size: number;
  shape: 'circle' | 'square' | 'triangle';
}

export default function ConfettiBackground() {
  const [confetti, setConfetti] = useState<Confetti[]>([]);
  
  useEffect(() => {
    const colors = ['#9b87f5', '#D6BCFA', '#E5DEFF', '#FFDEE2', '#FDE1D3'];
    const shapes = ['circle', 'square', 'triangle'];
    
    // Create initial confetti
    const initialConfetti: Confetti[] = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: -10 - Math.random() * 100,
      color: colors[Math.floor(Math.random() * colors.length)],
      duration: 3 + Math.random() * 5,
      size: 5 + Math.random() * 10,
      shape: shapes[Math.floor(Math.random() * shapes.length)] as 'circle' | 'square' | 'triangle',
    }));
    
    setConfetti(initialConfetti);
    
    // Add new confetti periodically
    const interval = setInterval(() => {
      setConfetti(prev => {
        // Remove confetti that have reached bottom of screen
        const filtered = prev.filter(c => c.y < 110);
        
        // Add new confetti at the top
        const newConfetti: Confetti[] = Array.from({ length: 2 }).map((_, i) => ({
          id: Date.now() + i,
          x: Math.random() * 100,
          y: -10,
          color: colors[Math.floor(Math.random() * colors.length)],
          duration: 3 + Math.random() * 5,
          size: 5 + Math.random() * 10,
          shape: shapes[Math.floor(Math.random() * shapes.length)] as 'circle' | 'square' | 'triangle',
        }));
        
        return [...filtered, ...newConfetti];
      });
    }, 300);
    
    // Animate confetti
    const animation = setInterval(() => {
      setConfetti(prev => 
        prev.map(c => ({
          ...c,
          y: c.y + 0.5,
          x: c.x + (Math.random() - 0.5) * 0.3, // Add some horizontal movement
        }))
      );
    }, 50);
    
    return () => {
      clearInterval(interval);
      clearInterval(animation);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[-1]">
      {confetti.map((c) => (
        <div
          key={c.id}
          className="absolute"
          style={{
            left: `${c.x}%`,
            top: `${c.y}%`,
            width: `${c.size}px`,
            height: `${c.size}px`,
            backgroundColor: c.shape === 'circle' || c.shape === 'square' ? c.color : 'transparent',
            borderRadius: c.shape === 'circle' ? '50%' : '0',
            clipPath: c.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : 'none',
            opacity: 0.8,
            transform: `rotate(${Math.random() * 360}deg)`,
            transition: `top ${c.duration}s linear, left ${c.duration}s ease-in-out`,
            boxShadow: c.shape === 'triangle' ? `0 0 0 ${c.size/2}px ${c.color}` : 'none',
          }}
        />
      ))}
    </div>
  );
}