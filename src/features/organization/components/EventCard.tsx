import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Edit,
  MoreHorizontal,
  Trash,
  Users,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export interface OrgEvent {
  id: number;
  title: string;
  date: string;
  time: string;
  guestsRegistered: number;
  capacity: number;
  volunteersNeeded: number;
  volunteersConfirmed: number;
  status: "active" | "upcoming" | "completed" | "cancelled";
}

interface OrgEventCardProps {
  event: OrgEvent;
}

export default function OrgEventCard({ event }: OrgEventCardProps) {
  return (
    <Card className="p-4 shadow-soft transition-all hover:shadow-medium border-l-4 border-l-primary dark:border-l-primary/80">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="md:w-1/4 flex-shrink-0">
          <div className="aspect-video rounded-md bg-muted flex items-center justify-center overflow-hidden">
            <img
              src="/placeholder.svg?height=120&width=200"
              alt={event.title}
              className="object-cover w-full h-full rounded-md transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
        <div className="md:w-3/4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h3 className="text-lg font-medium">{event.title}</h3>
            <div className="flex items-center gap-2">
              <Badge
                variant="outline"
                className={
                  event.status === "active"
                    ? "bg-success-foreground text-success border-success-foreground dark:bg-success-foreground/20 dark:text-success dark:border-success"
                    : event.status === "upcoming"
                      ? "bg-info-foreground text-info border-info-foreground dark:bg-info-foreground/20 dark:text-info dark:border-info"
                      : event.status === "completed"
                        ? "bg-muted-foreground text-muted border-muted-foreground dark:bg-muted-foreground/20 dark:text-muted dark:border-muted"
                        : "bg-destructive-foreground text-destructive border-destructive-foreground dark:bg-destructive-foreground/20 dark:text-destructive dark:border-destructive"
                }
              >
                {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
              </Badge>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4" />
                    <span className="sr-only">More options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem className="flex items-center">
                    <Edit className="mr-2 h-4 w-4" />
                    <span>Edit Event</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center">
                    <Users className="mr-2 h-4 w-4" />
                    <span>Manage Volunteers</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="flex items-center text-destructive">
                    <Trash className="mr-2 h-4 w-4" />
                    <span>Cancel Event</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-primary" />
              {event.date}
            </div>
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4 text-primary" />
              {event.time}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3">
            <div className="flex items-center justify-between rounded-md border p-2 bg-card shadow-soft">
              <div className="flex items-center text-sm">
                <Users className="mr-1 h-4 w-4 text-primary" />
                <span>Guests</span>
              </div>
              <Badge
                variant="outline"
                className={
                  event.guestsRegistered >= event.capacity * 0.9
                    ? "bg-destructive-foreground text-destructive border-destructive-foreground dark:bg-destructive-foreground/20 dark:text-destructive dark:border-destructive"
                    : event.guestsRegistered >= event.capacity * 0.7
                      ? "bg-warning-foreground text-warning border-warning-foreground dark:bg-warning-foreground/20 dark:text-warning dark:border-warning"
                      : "bg-success-foreground text-success border-success-foreground dark:bg-success-foreground/20 dark:text-success dark:border-success"
                }
              >
                {event.guestsRegistered}/{event.capacity}
              </Badge>
            </div>
            <div className="flex items-center justify-between rounded-md border p-2 bg-card shadow-soft">
              <div className="flex items-center text-sm">
                <Users className="mr-1 h-4 w-4 text-primary" />
                <span>Volunteers</span>
              </div>
              <Badge
                variant="outline"
                className={
                  event.volunteersConfirmed < event.volunteersNeeded
                    ? "bg-warning-foreground text-warning border-warning-foreground dark:bg-warning-foreground/20 dark:text-warning dark:border-warning"
                    : "bg-success-foreground text-success border-success-foreground dark:bg-success-foreground/20 dark:text-success dark:border-success"
                }
              >
                {event.volunteersConfirmed}/{event.volunteersNeeded}
              </Badge>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-2 mt-4">
            <Button>Manage Event</Button>
            <Button variant="outline">View Details</Button>
          </div>
        </div>
      </div>
    </Card>
  );
}
