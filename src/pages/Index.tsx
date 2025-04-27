import { Button } from "@/components/ui/button";
import EventDetails from "@/components/EventDetails";
import Countdown from "@/components/Countdown";
import RSVPForm from "@/components/RSVPForm";
import ConfettiBackground from "@/components/ConfettiBackground";
import { HeartIcon, MapPinIcon } from "lucide-react";
import { Link } from "react-router-dom";

const birthdayDate = new Date("2025-05-20T18:00:00");

const Index = () => {
  return (
    <div className="min-h-screen py-12 px-4 relative overflow-hidden">
      <ConfettiBackground />
      
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-10">
          <div className="inline-block bg-primary/10 p-2 rounded-full mb-4">
            <HeartIcon className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Приглашение на день рождения
          </h1>
          <p className="text-xl text-muted-foreground">
            С радостью приглашаю вас на празднование моего дня рождения!
          </p>
        </header>

        <EventDetails 
          name="Мария"
          age={25}
          date="20 мая 2025 года"
          time="18:00"
          venue="Ресторан «Панорама»"
          address="ул. Пушкина, д. 10, Москва"
          dress="Нарядно-повседневная"
        />

        <Countdown targetDate={birthdayDate} />

        <div className="my-12 py-8 bg-accent/50 rounded-lg">
          <h2 className="text-2xl font-bold text-center mb-6">Как добраться</h2>
          <div className="aspect-video max-w-xl mx-auto rounded-lg overflow-hidden shadow-lg">
            <div className="relative w-full h-full">
              {/* Placeholder for actual map - in production use a real map component */}
              <div className="absolute inset-0 bg-secondary/50 flex items-center justify-center">
                <div className="text-center">
                  <MapPinIcon className="h-12 w-12 text-primary mx-auto mb-2" />
                  <p className="text-lg font-medium">Ресторан «Панорама»</p>
                  <p className="text-sm text-muted-foreground">ул. Пушкина, д. 10, Москва</p>
                  <Button variant="outline" className="mt-4">
                    Открыть в Google Maps
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6">Ваш ответ</h2>
          <RSVPForm />
        </div>

        <footer className="text-center text-muted-foreground mt-16">
          <p className="mb-2">С нетерпением жду встречи с вами!</p>
          <p className="text-sm">
            Есть вопросы? <Link to="#" className="text-primary hover:underline">Свяжитесь со мной</Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
