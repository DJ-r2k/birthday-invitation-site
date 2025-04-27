import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface CountdownProps {
  targetDate: Date;
}

export default function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);
  
  return (
    <div className="w-full max-w-lg mx-auto mt-8">
      <h3 className="text-center text-xl font-semibold mb-3">До праздника осталось:</h3>
      <div className="grid grid-cols-4 gap-2">
        {[
          { label: 'дней', value: timeLeft.days },
          { label: 'часов', value: timeLeft.hours },
          { label: 'минут', value: timeLeft.minutes },
          { label: 'секунд', value: timeLeft.seconds }
        ].map((item, index) => (
          <Card key={index} className="flex flex-col items-center justify-center p-3 bg-primary/10 border-primary/20">
            <span className="text-2xl font-bold text-primary">{item.value}</span>
            <span className="text-xs text-muted-foreground">{item.label}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}