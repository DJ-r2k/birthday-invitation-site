import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "@/components/ui/use-toast";
import { CheckIcon, PartyPopper } from "lucide-react";

export default function RSVPForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [attendance, setAttendance] = useState("yes");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name.trim()) {
      toast({
        title: "Ошибка",
        description: "Пожалуйста, укажите ваше имя",
        variant: "destructive",
      });
      return;
    }
    
    if (!phone.trim() && !email.trim()) {
      toast({
        title: "Ошибка",
        description: "Укажите номер телефона или email для связи",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, you would send this data to a server
    console.log({ name, phone, email, attendance, message });
    
    // Show success message
    toast({
      title: "Спасибо!",
      description: "Ваш ответ успешно отправлен",
    });
    
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <Card className="w-full max-w-lg mx-auto text-center p-6">
        <div className="flex justify-center mb-4">
          <div className="bg-primary/20 p-3 rounded-full">
            <CheckIcon className="h-8 w-8 text-primary" />
          </div>
        </div>
        <CardTitle className="text-2xl mb-2">Спасибо!</CardTitle>
        <CardDescription className="text-lg">
          Ваш ответ успешно отправлен. До встречи на празднике!
        </CardDescription>
        <div className="mt-6 flex justify-center">
          <PartyPopper className="h-10 w-10 text-primary animate-bounce" />
        </div>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Подтвердите присутствие</CardTitle>
        <CardDescription className="text-center">
          Пожалуйста, сообщите нам о вашем решении до 15 мая
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="name">Ваше имя</Label>
            <Input 
              id="name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              placeholder="Иван Иванов"
            />
          </div>
          
          <div>
            <Label htmlFor="phone">Телефон</Label>
            <Input 
              id="phone" 
              value={phone} 
              onChange={(e) => setPhone(e.target.value)} 
              placeholder="+7 (999) 123-45-67" 
            />
          </div>
          
          <div>
            <Label htmlFor="email">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="ivan@example.com" 
            />
          </div>
          
          <div className="space-y-2">
            <Label>Придёте ли вы?</Label>
            <RadioGroup value={attendance} onValueChange={setAttendance} className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="yes" />
                <Label htmlFor="yes" className="cursor-pointer">Да, буду</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="no" />
                <Label htmlFor="no" className="cursor-pointer">К сожалению, нет</Label>
              </div>
            </RadioGroup>
          </div>
          
          <div>
            <Label htmlFor="message">Сообщение (необязательно)</Label>
            <Textarea 
              id="message" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
              placeholder="Ваши пожелания или вопросы"
              className="min-h-[80px]"
            />
          </div>
          
          <Button type="submit" className="w-full">Отправить</Button>
        </form>
      </CardContent>
    </Card>
  );
}