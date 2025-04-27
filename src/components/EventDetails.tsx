import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon, Clock3Icon, MapPinIcon, MusicIcon, CakeIcon, GlassWaterIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface EventDetailsProps {
  name: string;
  age: number;
  date: string;
  time: string;
  venue: string;
  address: string;
  dress?: string;
}

export default function EventDetails({
  name,
  age,
  date,
  time,
  venue,
  address,
  dress = "Нарядная",
}: EventDetailsProps) {
  return (
    <Card className="w-full max-w-lg mx-auto bg-card/60 backdrop-blur-sm border-primary/20 shadow-lg">
      <CardHeader className="text-center pb-2">
        <CardTitle className="text-3xl font-bold tracking-tight text-primary">
          День рождения
        </CardTitle>
        <CardDescription className="text-xl mt-1">
          {name} исполняется {age}!
        </CardDescription>
      </CardHeader>
      <Separator className="mx-auto w-2/3 bg-primary/30" />
      <CardContent className="pt-6 space-y-4">
        <div className="flex items-center gap-3">
          <CalendarIcon className="h-5 w-5 text-primary" />
          <span className="font-medium">{date}</span>
        </div>
        
        <div className="flex items-center gap-3">
          <Clock3Icon className="h-5 w-5 text-primary" />
          <span className="font-medium">{time}</span>
        </div>
        
        <div className="flex items-start gap-3">
          <MapPinIcon className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <p className="font-medium">{venue}</p>
            <p className="text-muted-foreground text-sm">{address}</p>
          </div>
        </div>
        
        <Separator className="my-2" />
        
        <div className="grid grid-cols-3 gap-2 pt-2">
          <div className="flex flex-col items-center text-center p-2">
            <CakeIcon className="h-6 w-6 text-primary mb-1" />
            <span className="text-xs">Вкусные угощения</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-2">
            <MusicIcon className="h-6 w-6 text-primary mb-1" />
            <span className="text-xs">Музыка и танцы</span>
          </div>
          
          <div className="flex flex-col items-center text-center p-2">
            <GlassWaterIcon className="h-6 w-6 text-primary mb-1" />
            <span className="text-xs">Напитки</span>
          </div>
        </div>

        {dress && (
          <div className="text-center mt-4 pt-2 border-t border-border">
            <p className="text-sm text-muted-foreground">Дресс-код: {dress}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}