import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star, Utensils } from "lucide-react";

interface IftarEvent {
  id: number;
  name: string;
  address: string;
  distance: string;
  time: string;
  menu: string[];
  capacity: string;
  dietaryOptions: string[];
  isFavorite: boolean;
}

interface IftarEventCardProps {
  event: IftarEvent;
}

export function IftarEventCard({ event }: IftarEventCardProps) {
  return (
    <Card className="p-4 shadow-soft transition-all hover:shadow-medium">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 flex-shrink-0">
          <div className="aspect-square rounded-md bg-muted flex items-center justify-center overflow-hidden">
            <img
              src="/placeholder.svg?height=150&width=150"
              alt={event.name}
              className="object-cover w-full h-full rounded-md transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-medium">{event.name}</h3>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className="bg-primary/5 text-primary border-primary/20"
              >
                {event.capacity}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                className={
                  event.isFavorite ? "text-yellow-500" : "text-muted-foreground"
                }
              >
                <Star className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="mr-1 h-4 w-4" />
              {event.address}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              {event.time}
            </div>
          </div>

          <div className="mt-3">
            <div className="flex items-center gap-1 text-sm font-medium">
              <Utensils className="h-4 w-4" />
              <span>Menu:</span>
            </div>
            <div className="flex flex-wrap gap-1 mt-1">
              {event.menu.map((item, index) => (
                <Badge key={index} variant="outline" className="bg-muted">
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <div className="mt-3">
            <div className="text-sm font-medium">Dietary Options:</div>
            <div className="flex flex-wrap gap-1 mt-1">
              {event.dietaryOptions.map((option, index) => (
                <Badge key={index} variant="outline">
                  {option}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button>Reserve a Spot</Button>
            <Button variant="outline">View Details</Button>
            <div className="text-sm text-muted-foreground flex items-center ml-auto mt-2 sm:mt-0">
              <MapPin className="mr-1 h-3 w-3" />
              {event.distance} away
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
