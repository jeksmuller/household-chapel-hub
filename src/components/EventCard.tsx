
import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
}

const EventCard = ({
  id,
  title,
  date,
  time,
  location,
  image,
  description,
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-5">
        <div className="flex items-start gap-4">
          <div className="bg-church-purple/10 p-3 rounded-md text-church-purple flex flex-col items-center justify-center">
            <Calendar size={24} />
            <div className="text-sm font-semibold mt-1">
              {new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 mb-3">
              <span className="font-medium">{time}</span> | {location}
            </p>
            <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
            <Button asChild className="bg-church-purple hover:bg-church-dark text-white w-full mt-2">
              <Link to={`/events/${id}`}>Learn More</Link>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
