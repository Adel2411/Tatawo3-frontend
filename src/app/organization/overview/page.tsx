import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Star, Users, Utensils } from "lucide-react";
import Link from "next/link";
import OrgStatsCard from "@/features/organization/components/StatsCard";
import OrgEventCard, {
  OrgEvent,
} from "@/features/organization/components/EventCard";

export default function OrgOverview() {
  // Mock data - would come from your backend
  const upcomingEvents: OrgEvent[] = [
    {
      id: 1,
      title: "Daily Iftar",
      date: "March 15, 2025",
      time: "Sunset - 9:00 PM",
      guestsRegistered: 42,
      capacity: 100,
      volunteersNeeded: 8,
      volunteersConfirmed: 5,
      status: "active",
    },
    {
      id: 2,
      title: "Special Weekend Iftar",
      date: "March 17, 2025",
      time: "Sunset - 9:00 PM",
      guestsRegistered: 78,
      capacity: 150,
      volunteersNeeded: 12,
      volunteersConfirmed: 10,
      status: "upcoming",
    },
  ];

  const stats = {
    totalEvents: 14,
    guestsServed: 1240,
    volunteersEngaged: 45,
    averageRating: 4.8,
  };

  const volunteerRequests = [
    {
      id: 1,
      name: "Ahmed Khan",
      role: "Food Server",
      date: "March 15, 2025",
      status: "pending",
    },
    {
      id: 2,
      name: "Fatima Ali",
      role: "Food Preparation",
      date: "March 15, 2025",
      status: "pending",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Restaurant Dashboard</CardTitle>
              <CardDescription>
                Manage your Iftar events and volunteer coordination
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <OrgStatsCard
                  title="Total Events"
                  value={stats.totalEvents}
                  icon={<Calendar className="h-5 w-5 text-primary" />}
                />
                <OrgStatsCard
                  title="Guests Served"
                  value={stats.guestsServed}
                  icon={<Utensils className="h-5 w-5 text-primary" />}
                />
                <OrgStatsCard
                  title="Volunteers Engaged"
                  value={stats.volunteersEngaged}
                  icon={<Users className="h-5 w-5 text-primary" />}
                />
                <OrgStatsCard
                  title="Average Rating"
                  value={stats.averageRating}
                  icon={<Star className="h-5 w-5 text-primary" />}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Events</CardTitle>
                <CardDescription>Your scheduled Iftar events</CardDescription>
              </div>
              <Link href="/organization/events/create">
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  New Event
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <OrgEventCard key={event.id} event={event} />
                ))}
                <Link
                  href="/organization/events"
                  className="block text-center text-sm text-primary hover:text-primary/80 transition-colors mt-2"
                >
                  View all events
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Volunteer Requests</CardTitle>
              <CardDescription>Pending volunteer applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {volunteerRequests.length > 0 ? (
                  volunteerRequests.map((request) => (
                    <div
                      key={request.id}
                      className="flex items-start gap-3 rounded-md border p-3 bg-card shadow-soft transition-all hover:shadow-medium"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <Users className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h4 className="font-medium">{request.name}</h4>
                          <Badge
                            variant="outline"
                            className="bg-yellow-50 text-yellow-700 border-yellow-200"
                          >
                            {request.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {request.role}
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          <Calendar className="inline mr-1 h-3 w-3" />
                          {request.date}
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button
                            size="sm"
                            variant="outline"
                            className="flex-1"
                          >
                            Decline
                          </Button>
                          <Button
                            size="sm"
                            className="flex-1 bg-primary hover:bg-primary/90"
                          >
                            Approve
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <Users className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                    <h3 className="mt-4 text-lg font-medium">
                      No pending requests
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      All volunteer requests have been processed
                    </p>
                  </div>
                )}
                <Link
                  href="/organization/volunteers"
                  className="block text-center text-sm text-primary hover:text-primary/80 transition-colors mt-2"
                >
                  Manage all volunteers
                </Link>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Today's Schedule</CardTitle>
              <CardDescription>Overview of today's Iftar event</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-lg border p-4 bg-card shadow-soft transition-all hover:shadow-medium">
                <h3 className="font-medium">Daily Iftar</h3>
                <div className="mt-2 space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="mr-2 h-4 w-4" />
                    Sunset - 9:00 PM
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      Guests
                    </div>
                    <Badge variant="outline">42/100</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-muted-foreground">
                      <Users className="mr-2 h-4 w-4" />
                      Volunteers
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        5 < 8
                          ? "bg-yellow-50 text-yellow-700 border-yellow-200"
                          : "bg-green-50 text-green-700 border-green-200"
                      }
                    >
                      5/8
                    </Badge>
                  </div>
                </div>
                <div className="mt-4">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Manage Event
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
