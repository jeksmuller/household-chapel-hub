
import { PlayCircle, Clock, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface SermonCardProps {
  id: string;
  title: string;
  preacher: string;
  date: string;
  duration: string;
  image: string;
  description: string;
}

const SermonCard = ({
  id,
  title,
  preacher,
  date,
  duration,
  image,
  description,
}: SermonCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-video relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayCircle size={60} className="text-white" />
        </div>
      </div>
      <CardContent className="p-5">
        <h3 className="text-xl font-bold mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-church-purple font-medium mb-3">{preacher}</p>
        <div className="flex items-center gap-4 text-gray-600 text-sm mb-3">
          <div className="flex items-center">
            <Calendar size={16} className="mr-1" />
            <span>{new Date(date).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{duration}</span>
          </div>
        </div>
        <p className="text-gray-700 mb-4 line-clamp-2">{description}</p>
        <Button asChild className="bg-church-purple hover:bg-church-dark text-white w-full">
          <Link to={`/sermons/${id}`}>Watch Sermon</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SermonCard;
