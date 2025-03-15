import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  Edit,
  MapPin,
  MessageSquare,
  Trash,
  Users,
  Utensils,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function EventDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Mock data - would come from your backend
  const event = {
    id: Number.parseInt(params.id),
    title: "Daily Iftar",
    description:
      "Join us for our daily Iftar meal during Ramadan. We offer a variety of traditional dishes and welcome everyone in the community.",
    date: "March 15, 2025",
    time: "Sunset - 9:00 PM",
    location: "123 Main Street, City",
    guestsRegistered: 42,
    capacity: 100,
    volunteersNeeded: 8,
    volunteersConfirmed: 5,
    status: "active",
    menu: [
      "Rice Pilaf",
      "Chicken Curry",
      "Lentil Soup",
      "Fresh Salad",
      "Dates",
      "Fruit Platter",
      "Water and Juices",
    ],
    dietaryOptions: ["Vegetarian", "Halal", "Gluten-Free"],
    volunteers: [
      {
        id: 1,
        name: "Ahmed Khan",
        role: "Food Server",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "confirmed",
        rating: 4.8,
        tasksCompleted: 12,
      },
      {
        id: 2,
        name: "Fatima Ali",
        role: "Food Preparation",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "confirmed",
        rating: 4.9,
        tasksCompleted: 8,
      },
      {
        id: 3,
        name: "Mohammed Rahman",
        role: "Cleanup Crew",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "confirmed",
        rating: 4.7,
        tasksCompleted: 15,
      },
      {
        id: 4,
        name: "Aisha Begum",
        role: "Greeter",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "confirmed",
        rating: 5.0,
        tasksCompleted: 20,
      },
      {
        id: 5,
        name: "Omar Farooq",
        role: "Food Server",
        avatar: "/placeholder.svg?height=40&width=40",
        status: "confirmed",
        rating: 4.6,
        tasksCompleted: 7,
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{event.title}</h1>
          <p className="text-muted-foreground">Event details and management</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Edit className="mr-2 h-4 w-4" />
            Edit Event
          </Button>
          <Button variant="destructive" size="sm">
            <Trash className="mr-2 h-4 w-4" />
            Cancel Event
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Event Overview</CardTitle>
              <CardDescription>Details about this Iftar event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="aspect-video rounded-md bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=600"
                  alt={event.title}
                  className="object-cover w-full h-full rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Date</p>
                      <p className="text-sm text-muted-foreground">
                        {event.date}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Time</p>
                      <p className="text-sm text-muted-foreground">
                        {event.time}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Location</p>
                      <p className="text-sm text-muted-foreground">
                        {event.location}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Guests</p>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={
                            (event.guestsRegistered / event.capacity) * 100
                          }
                          className="h-2 w-24"
                        />
                        <p className="text-sm text-muted-foreground">
                          {event.guestsRegistered}/{event.capacity}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <div>
                      <p className="text-sm font-medium">Volunteers</p>
                      <div className="flex items-center gap-2">
                        <Progress
                          value={
                            (event.volunteersConfirmed /
                              event.volunteersNeeded) *
                            100
                          }
                          className="h-2 w-24"
                        />
                        <p className="text-sm text-muted-foreground">
                          {event.volunteersConfirmed}/{event.volunteersNeeded}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="outline"
                      className={
                        event.status === "active"
                          ? "bg-success/10 text-success border-success/20"
                          : event.status === "upcoming"
                            ? "bg-info/10 text-info border-info/20"
                            : event.status === "completed"
                              ? "bg-muted text-muted-foreground border-muted"
                              : "bg-destructive/10 text-destructive border-destructive/20"
                      }
                    >
                      {event.status.charAt(0).toUpperCase() +
                        event.status.slice(1)}
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Description</h3>
                <p className="text-muted-foreground">{event.description}</p>
              </div>

              <Separator />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Menu Items</h3>
                  <ul className="space-y-1">
                    {event.menu.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Utensils className="h-4 w-4 text-primary" />
                        <span className="text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Dietary Options</h3>
                  <div className="flex flex-wrap gap-2">
                    {event.dietaryOptions.map((option, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {option}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volunteer Management</CardTitle>
              <CardDescription>
                Manage volunteers for this event
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">
                    Assigned Volunteers ({event.volunteersConfirmed})
                  </h3>
                  <Button variant="outline" size="sm">
                    <Users className="mr-2 h-4 w-4" />
                    Add Volunteers
                  </Button>
                </div>

                <div className="space-y-3">
                  {event.volunteers.map((volunteer) => (
                    <div
                      key={volunteer.id}
                      className="flex items-center justify-between p-3 rounded-md border bg-card"
                    >
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarImage
                            src={volunteer.avatar}
                            alt={volunteer.name}
                          />
                          <AvatarFallback>
                            {volunteer.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <Link
                            href={`/organization/volunteers/${volunteer.id}`}
                            className="font-medium hover:underline"
                          >
                            {volunteer.name}
                          </Link>
                          <p className="text-sm text-muted-foreground">
                            {volunteer.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge
                          variant="outline"
                          className="bg-success/10 text-success border-success/20"
                        >
                          {volunteer.status.charAt(0).toUpperCase() +
                            volunteer.status.slice(1)}
                        </Badge>
                        <Link href={`/organization/messages`}>
                          <Button variant="ghost" size="icon">
                            <MessageSquare className="h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage this event</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Users className="mr-2 h-4 w-4" />
                Manage Guest List
              </Button>
              <Button variant="outline" className="w-full">
                <Edit className="mr-2 h-4 w-4" />
                Update Menu
              </Button>
              <Button variant="outline" className="w-full">
                <MessageSquare className="mr-2 h-4 w-4" />
                Message All Volunteers
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Event Statistics</CardTitle>
              <CardDescription>Performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Guest Capacity</p>
                  <p className="text-sm font-medium">
                    {event.guestsRegistered}/{event.capacity}
                  </p>
                </div>
                <Progress
                  value={(event.guestsRegistered / event.capacity) * 100}
                  className="h-2"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Volunteer Coverage</p>
                  <p className="text-sm font-medium">
                    {event.volunteersConfirmed}/{event.volunteersNeeded}
                  </p>
                </div>
                <Progress
                  value={
                    (event.volunteersConfirmed / event.volunteersNeeded) * 100
                  }
                  className="h-2"
                />
              </div>

              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  This event is currently at{" "}
                  {Math.round((event.guestsRegistered / event.capacity) * 100)}%
                  capacity with{" "}
                  {Math.round(
                    (event.volunteersConfirmed / event.volunteersNeeded) * 100,
                  )}
                  % volunteer coverage.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Location</CardTitle>
              <CardDescription>Event venue</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-square rounded-md bg-muted flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=300&width=300&text=Map"
                  alt="Event location map"
                  className="object-cover w-full h-full"
                />
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {event.location}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
