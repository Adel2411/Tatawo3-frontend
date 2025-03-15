import { use } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Calendar,
  Clock,
  MessageSquare,
  Star,
  User,
  Users,
} from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";

export default function VolunteerDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = use(params);
  console.log(id);

  const volunteer = {
    id: 1,
    name: "Ahmed Khan",
    email: "ahmed.khan@example.com",
    phone: "+1 (555) 123-4567",
    role: "Food Server",
    avatar: "/placeholder.svg?height=100&width=100",
    bio: "I'm passionate about giving back to my community during Ramadan. I have experience in food service and enjoy connecting with people from all backgrounds.",
    rating: 4.8,
    tasksCompleted: 12,
    hoursVolunteered: 36,
    availability: [
      "Weekday Evenings",
      "Weekend Afternoons",
      "Weekend Evenings",
    ],
    skills: ["Food Preparation", "Food Service", "Cleanup", "Guest Relations"],
    badges: [
      { name: "First Timer", earned: true },
      { name: "Helping Hand", earned: true },
      { name: "Food Server", earned: true },
      { name: "Community Leader", earned: false },
    ],
    upcomingTasks: [
      {
        id: 1,
        title: "Food Preparation",
        location: "Al-Noor Mosque",
        date: "March 15, 2025",
        time: "3:00 PM - 5:30 PM",
        status: "confirmed",
      },
      {
        id: 2,
        title: "Serving Food",
        location: "Islamic Center",
        date: "March 17, 2025",
        time: "5:30 PM - 8:00 PM",
        status: "pending",
      },
    ],
    pastEvents: [
      {
        id: 101,
        title: "Daily Iftar",
        date: "March 10, 2025",
        location: "Al-Noor Mosque",
        role: "Food Server",
        feedback:
          "Ahmed was punctual and very helpful with serving food to guests.",
      },
      {
        id: 102,
        title: "Weekend Iftar",
        date: "March 8, 2025",
        location: "Islamic Center",
        role: "Cleanup Crew",
        feedback: "Great attitude and thorough with cleanup duties.",
      },
      {
        id: 103,
        title: "Community Iftar",
        date: "March 5, 2025",
        location: "Community Center",
        role: "Food Preparation",
        feedback:
          "Showed initiative and helped with additional tasks when needed.",
      },
    ],
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {volunteer.name}
          </h1>
          <p className="text-muted-foreground">Volunteer profile and history</p>
        </div>
        <div className="flex items-center gap-2">
          <Link href={`/organization/messages`}>
            <Button className="bg-primary hover:bg-primary/90">
              <MessageSquare className="mr-2 h-4 w-4" />
              Message Volunteer
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Volunteer Profile</CardTitle>
              <CardDescription>Personal information and skills</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <Avatar className="h-24 w-24">
                    <AvatarImage src={volunteer.avatar} alt={volunteer.name} />
                    <AvatarFallback className="text-2xl">
                      {volunteer.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                </div>

                <div className="space-y-3 flex-1">
                  <div>
                    <h3 className="text-lg font-medium">{volunteer.name}</h3>
                    <p className="text-muted-foreground">{volunteer.role}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{volunteer.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm">{volunteer.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">{volunteer.rating}</span>
                      <span className="text-muted-foreground text-sm ml-1">
                        rating
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">
                        {volunteer.tasksCompleted}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">
                        tasks
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 text-primary mr-1" />
                      <span className="font-medium">
                        {volunteer.hoursVolunteered}
                      </span>
                      <span className="text-muted-foreground text-sm ml-1">
                        hours
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Bio</h3>
                <p className="text-muted-foreground">{volunteer.bio}</p>
              </div>

              <Separator />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Skills</h3>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.skills.map((skill, index) => (
                      <Badge
                        key={index}
                        variant="outline"
                        className="bg-primary/10 text-primary border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Availability</h3>
                  <div className="flex flex-wrap gap-2">
                    {volunteer.availability.map((time, index) => (
                      <Badge key={index} variant="outline">
                        {time}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Earned Badges</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {volunteer.badges.map((badge, index) => (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center rounded-md border p-3 transition-all ${
                        badge.earned
                          ? "bg-card shadow-soft hover:shadow-medium"
                          : "opacity-50"
                      }`}
                    >
                      <div
                        className={`rounded-full p-2 ${
                          badge.earned
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Star className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium mt-2 text-center">
                        {badge.name}
                      </span>
                      {badge.earned ? (
                        <Badge
                          variant="outline"
                          className="mt-1 text-[10px] bg-success/10 text-success border-success/20"
                        >
                          Earned
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="mt-1 text-[10px]">
                          Locked
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volunteer History</CardTitle>
              <CardDescription>Past events and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="upcoming">
                <TabsList className="mb-4">
                  <TabsTrigger value="upcoming">Upcoming Tasks</TabsTrigger>
                  <TabsTrigger value="past">Past Events</TabsTrigger>
                </TabsList>

                <TabsContent value="upcoming" className="space-y-4">
                  {volunteer.upcomingTasks.length > 0 ? (
                    volunteer.upcomingTasks.map((task) => (
                      <div
                        key={task.id}
                        className="flex items-center justify-between p-3 rounded-md border bg-card"
                      >
                        <div>
                          <h4 className="font-medium">{task.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Calendar className="mr-1 h-3 w-3" />
                              {task.date}
                            </div>
                            <div className="hidden sm:block text-muted-foreground">
                              •
                            </div>
                            <div className="flex items-center">
                              <Clock className="mr-1 h-3 w-3" />
                              {task.time}
                            </div>
                            <div className="hidden sm:block text-muted-foreground">
                              •
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-3 w-3" />
                              {task.location}
                            </div>
                          </div>
                        </div>
                        <Badge
                          variant="outline"
                          className={
                            task.status === "confirmed"
                              ? "bg-success/10 text-success border-success/20"
                              : task.status === "pending"
                                ? "bg-warning/10 text-warning border-warning/20"
                                : "bg-muted text-muted-foreground"
                          }
                        >
                          {task.status.charAt(0).toUpperCase() +
                            task.status.slice(1)}
                        </Badge>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                      <h3 className="mt-4 text-lg font-medium">
                        No upcoming tasks
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        This volunteer doesn't have any scheduled tasks
                      </p>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="past" className="space-y-4">
                  {volunteer.pastEvents.length > 0 ? (
                    volunteer.pastEvents.map((event) => (
                      <div
                        key={event.id}
                        className="p-4 rounded-md border bg-card"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{event.title}</h4>
                          <Badge
                            variant="outline"
                            className="bg-primary/10 text-primary border-primary/20"
                          >
                            {event.role}
                          </Badge>
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                          <div className="flex items-center">
                            <Calendar className="mr-1 h-3 w-3" />
                            {event.date}
                          </div>
                          <div className="hidden sm:block text-muted-foreground">
                            •
                          </div>
                          <div className="flex items-center">
                            <Users className="mr-1 h-3 w-3" />
                            {event.location}
                          </div>
                        </div>
                        <div className="mt-3">
                          <p className="text-sm font-medium">Feedback:</p>
                          <p className="text-sm text-muted-foreground">
                            {event.feedback}
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <Calendar className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                      <h3 className="mt-4 text-lg font-medium">
                        No past events
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        This volunteer hasn't participated in any events yet
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage this volunteer</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href={`/organization/messages`}>
                <Button className="w-full bg-primary hover:bg-primary/90">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </Link>
              <Button variant="outline" className="w-full">
                <Users className="mr-2 h-4 w-4" />
                Assign to Event
              </Button>
              <Button variant="outline" className="w-full">
                <Star className="mr-2 h-4 w-4" />
                Leave Feedback
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Volunteer Stats</CardTitle>
              <CardDescription>Performance metrics</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Reliability Score</p>
                  <p className="text-sm font-medium">92%</p>
                </div>
                <Progress value={92} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Task Completion</p>
                  <p className="text-sm font-medium">100%</p>
                </div>
                <Progress value={100} className="h-2" />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-sm">Punctuality</p>
                  <p className="text-sm font-medium">85%</p>
                </div>
                <Progress value={85} className="h-2" />
              </div>

              <div className="pt-2">
                <p className="text-sm text-muted-foreground">
                  This volunteer has completed {volunteer.tasksCompleted} tasks
                  with an average rating of {volunteer.rating}/5.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Notes</CardTitle>
              <CardDescription>
                Private notes about this volunteer
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border p-3 bg-muted">
                <p className="text-sm text-muted-foreground">
                  Ahmed is very reliable and always arrives on time. He's
                  particularly good with guest interactions and has received
                  positive feedback from guests. Consider him for more
                  customer-facing roles.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  - Added by Manager on March 10, 2025
                </p>
              </div>
              <Button variant="outline" size="sm" className="mt-3 w-full">
                Add Note
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
