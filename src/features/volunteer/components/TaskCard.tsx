import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import Link from "next/link";

export interface Task {
  id: number;
  title: string;
  location: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "completed" | "cancelled";
}

interface VolunteerTaskCardProps {
  task: Task;
}

export function VolunteerTaskCard({ task }: VolunteerTaskCardProps) {
  return (
    <Card className="p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-soft transition-all hover:shadow-medium">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
          <Calendar className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="font-medium">{task.title}</h3>
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 mt-1 text-sm text-muted-foreground">
            <div className="flex items-center">
              <MapPin className="mr-1 h-3 w-3" />
              {task.location}
            </div>
            <div className="hidden sm:block text-muted-foreground">•</div>
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              {task.date}
            </div>
            <div className="hidden sm:block text-muted-foreground">•</div>
            <div className="flex items-center">
              <Clock className="mr-1 h-3 w-3" />
              {task.time}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-2 md:mt-0">
        <Badge
          variant="outline"
          className={
            task.status === "confirmed"
              ? "bg-green-500/10 text-green-500 border-green-500/20"
              : task.status === "pending"
                ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                : task.status === "completed"
                  ? "bg-blue-500/10 text-blue-500 border-blue-500/20"
                  : "bg-destructive/10 text-destructive border-destructive/20"
          }
        >
          {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
        </Badge>
        <Button variant="outline" size="sm" asChild>
          <Link href={`/volunteer/tasks/${task.id}`}>Details</Link>
        </Button>
      </div>
    </Card>
  );
}
