import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  CheckCircle,
  XCircle,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

interface TaskDetailPageProps {
  params: {
    id: string;
  };
}

export default function TaskDetailPage({ params }: TaskDetailPageProps) {
  const task = {
    id: Number.parseInt(params.id),
    title: "Food Preparation",
    location: "Al-Noor Mosque",
    address: "123 Main St, City",
    date: "March 15, 2025",
    time: "3:00 PM - 5:30 PM",
    status: "confirmed",
    description:
      "Help prepare food for the daily Iftar meal. Tasks include chopping vegetables, preparing rice, and setting up serving stations.",
    instructions:
      "Please arrive 15 minutes early. Wear comfortable clothes and closed-toe shoes. Aprons will be provided.",
    contactPerson: {
      name: "Mohammed Rahman",
      role: "Event Coordinator",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    menu: [
      "Rice Pilaf",
      "Chicken Curry",
      "Vegetable Stew",
      "Lentil Soup",
      "Dates",
      "Fresh Fruit",
    ],
    otherVolunteers: [
      {
        name: "Sarah Johnson",
        role: "Food Server",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Ahmed Khan",
        role: "Food Preparation",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        name: "Fatima Ali",
        role: "Food Preparation",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <Link
        href="/volunteer/tasks"
        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Tasks
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-6">
          <Card className="shadow-soft border-t-4 border-t-primary dark:border-t-primary/80">
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">{task.title}</CardTitle>
                  <CardDescription className="text-base">
                    {task.location}
                  </CardDescription>
                </div>
                <Badge
                  className={
                    task.status === "confirmed"
                      ? "bg-green-500/10 text-green-500 border-green-500/20 dark:bg-green-500/20"
                      : task.status === "pending"
                        ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20 dark:bg-yellow-500/20"
                        : task.status === "completed"
                          ? "bg-blue-500/10 text-blue-500 border-blue-500/20 dark:bg-blue-500/20"
                          : "bg-destructive/10 text-destructive border-destructive/20"
                  }
                >
                  {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-x-6 gap-y-3 mb-6 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  <span>{task.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>{task.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  <span>{task.address}</span>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">{task.description}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Instructions</h3>
                  <div className="bg-muted/30 p-4 rounded-md border">
                    <p className="text-muted-foreground">{task.instructions}</p>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Menu Items</h3>
                  <div className="flex flex-wrap gap-2">
                    {task.menu.map((item, index) => (
                      <Badge key={index} variant="outline" className="bg-muted">
                        {item}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <Button className="bg-primary hover:bg-primary/90">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Confirm Attendance
                </Button>
                <Button
                  variant="outline"
                  className="border-destructive text-destructive hover:bg-destructive/10"
                >
                  <XCircle className="mr-2 h-4 w-4" />
                  Cancel Participation
                </Button>
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message Coordinator
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Contact Person</CardTitle>
              <CardDescription>
                Reach out if you have any questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={task.contactPerson.avatar}
                    alt={task.contactPerson.name}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {task.contactPerson.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">{task.contactPerson.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {task.contactPerson.role}
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Other Volunteers</CardTitle>
              <CardDescription>People you'll be working with</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {task.otherVolunteers.map((volunteer, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage
                        src={volunteer.avatar}
                        alt={volunteer.name}
                      />
                      <AvatarFallback className="bg-blue-500/10 text-blue-500">
                        {volunteer.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-medium">{volunteer.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {volunteer.role}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Location</CardTitle>
              <CardDescription>Al-Noor Mosque</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-md bg-muted flex items-center justify-center overflow-hidden mb-4">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Map would be displayed here
                  </p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
