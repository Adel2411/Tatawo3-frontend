"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Filter, Plus, Search } from "lucide-react";
import OrgEventCard, {
  OrgEvent,
} from "@/features/organization/components/EventCard";
import { CreateEventModal } from "@/features/organization/components/CreateEventModal";

export default function ManageEventsPage() {
  // Mock data - would come from your backend
  const activeEvents: OrgEvent[] = [
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
      status: "active",
    },
  ];

  const upcomingEvents: OrgEvent[] = [
    {
      id: 3,
      title: "Community Iftar",
      date: "March 20, 2025",
      time: "Sunset - 9:00 PM",
      guestsRegistered: 25,
      capacity: 120,
      volunteersNeeded: 10,
      volunteersConfirmed: 3,
      status: "upcoming",
    },
    {
      id: 4,
      title: "Family Iftar Night",
      date: "March 22, 2025",
      time: "Sunset - 9:00 PM",
      guestsRegistered: 15,
      capacity: 80,
      volunteersNeeded: 6,
      volunteersConfirmed: 2,
      status: "upcoming",
    },
  ];

  const pastEvents: OrgEvent[] = [
    {
      id: 5,
      title: "First Day of Ramadan",
      date: "March 10, 2025",
      time: "Sunset - 9:00 PM",
      guestsRegistered: 95,
      capacity: 100,
      volunteersNeeded: 10,
      volunteersConfirmed: 10,
      status: "completed",
    },
    {
      id: 6,
      title: "Weekend Iftar",
      date: "March 12, 2025",
      time: "Sunset - 9:00 PM",
      guestsRegistered: 65,
      capacity: 100,
      volunteersNeeded: 8,
      volunteersConfirmed: 8,
      status: "completed",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-soft border-t-4 border-t-primary dark:border-t-primary/80">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Manage Events
              </CardTitle>
              <CardDescription>
                Create and manage your Iftar events
              </CardDescription>
            </div>
            <CreateEventModal
              trigger={
                <Button className="bg-primary hover:bg-primary/90">
                  <Plus className="mr-2 h-4 w-4" />
                  New Event
                </Button>
              }
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search events..."
                className="pl-8 transition-all focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="active">
            <TabsList className="mb-4">
              <TabsTrigger value="active">Active</TabsTrigger>
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="past">Past</TabsTrigger>
            </TabsList>

            <TabsContent value="active" className="space-y-4">
              {activeEvents.length > 0 ? (
                activeEvents.map((event) => (
                  <OrgEventCard key={event.id} event={event} />
                ))
              ) : (
                <div className="text-center py-8">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                  <h3 className="mt-4 text-lg font-medium">No active events</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any active Iftar events
                  </p>
                  <CreateEventModal
                    trigger={
                      <Button className="mt-4 bg-primary hover:bg-primary/90">
                        Create Your First Event
                      </Button>
                    }
                  />
                </div>
              )}
            </TabsContent>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <OrgEventCard key={event.id} event={event} />
                ))
              ) : (
                <div className="text-center py-8">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                  <h3 className="mt-4 text-lg font-medium">
                    No upcoming events
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any upcoming Iftar events scheduled
                  </p>
                  <CreateEventModal
                    trigger={
                      <Button className="mt-4 bg-primary hover:bg-primary/90">
                        Schedule an Event
                      </Button>
                    }
                  />
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              {pastEvents.length > 0 ? (
                pastEvents.map((event) => (
                  <OrgEventCard key={event.id} event={event} />
                ))
              ) : (
                <div className="text-center py-8">
                  <Calendar className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                  <h3 className="mt-4 text-lg font-medium">No past events</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You haven't hosted any Iftar events yet
                  </p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
