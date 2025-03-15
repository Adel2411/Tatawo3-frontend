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
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Filter,
  MessageSquare,
  Search,
  Star,
  User,
  Users,
} from "lucide-react";

export default function VolunteersManagementPage() {
  // Mock data - would come from your backend
  const pendingVolunteers = [
    {
      id: 1,
      name: "Ahmed Khan",
      email: "ahmed@example.com",
      role: "Food Server",
      event: "Daily Iftar",
      date: "March 15, 2025",
      status: "pending",
      rating: null,
      experience: "2 years",
      availability: "Evenings and weekends",
    },
    {
      id: 2,
      name: "Fatima Ali",
      email: "fatima@example.com",
      role: "Food Preparation",
      event: "Daily Iftar",
      date: "March 15, 2025",
      status: "pending",
      rating: null,
      experience: "1 year",
      availability: "Weekends only",
    },
  ];

  const confirmedVolunteers = [
    {
      id: 3,
      name: "Mohammed Rahman",
      email: "mohammed@example.com",
      role: "Food Server",
      event: "Daily Iftar",
      date: "March 15, 2025",
      status: "confirmed",
      rating: 4.8,
      experience: "3 years",
      availability: "Evenings",
    },
    {
      id: 4,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      role: "Greeter",
      event: "Daily Iftar",
      date: "March 15, 2025",
      status: "confirmed",
      rating: 4.5,
      experience: "New volunteer",
      availability: "Flexible",
    },
    {
      id: 5,
      name: "Yusuf Ahmed",
      email: "yusuf@example.com",
      role: "Cleanup",
      event: "Daily Iftar",
      date: "March 15, 2025",
      status: "confirmed",
      rating: 4.9,
      experience: "5 years",
      availability: "After 7 PM",
    },
  ];

  const pastVolunteers = [
    {
      id: 6,
      name: "Aisha Khan",
      email: "aisha@example.com",
      role: "Food Server",
      event: "Weekend Iftar",
      date: "March 12, 2025",
      status: "completed",
      rating: 5.0,
      experience: "4 years",
      availability: "Evenings and weekends",
    },
    {
      id: 7,
      name: "Omar Ali",
      email: "omar@example.com",
      role: "Food Preparation",
      event: "First Day of Ramadan",
      date: "March 10, 2025",
      status: "completed",
      rating: 4.7,
      experience: "2 years",
      availability: "Mornings and evenings",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-soft border-t-4 border-t-primary dark:border-t-primary/80">
        <CardHeader className="pb-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                Volunteer Management
              </CardTitle>
              <CardDescription>
                Manage volunteer applications and assignments
              </CardDescription>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              Send Group Message
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search volunteers..."
                className="pl-8 transition-all focus:ring-2 focus:ring-emerald-500/50"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
          </div>

          <Tabs defaultValue="pending">
            <TabsList className="mb-4">
              <TabsTrigger value="pending" className="relative">
                Pending
                {pendingVolunteers.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-600 text-[10px] text-white">
                    {pendingVolunteers.length}
                  </span>
                )}
              </TabsTrigger>
              <TabsTrigger value="confirmed">Confirmed</TabsTrigger>
              <TabsTrigger value="past">Past Volunteers</TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="space-y-4">
              {pendingVolunteers.length > 0 ? (
                pendingVolunteers.map((volunteer) => (
                  <Card
                    key={volunteer.id}
                    className="p-4 shadow-soft transition-all hover:shadow-medium border-l-4 border-l-yellow-500 dark:border-l-yellow-500/80"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                              <User className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <h3 className="font-medium">{volunteer.name}</h3>
                              <p className="text-xs text-muted-foreground">
                                {volunteer.email}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 space-y-1 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="mr-2 h-4 w-4 text-primary" />
                              {volunteer.date}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Users className="mr-2 h-4 w-4 text-primary" />
                              {volunteer.role}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/4">
                        <h4 className="text-sm font-medium mb-2">
                          Application Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">Event:</span>
                            <span>{volunteer.event}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">
                              Experience:
                            </span>
                            <span>{volunteer.experience}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">
                              Availability:
                            </span>
                            <span>{volunteer.availability}</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/4 flex flex-col justify-between">
                        <div className="flex items-center justify-end">
                          <Badge
                            variant="outline"
                            className="bg-yellow-50 text-yellow-700 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800"
                          >
                            Pending
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                          >
                            Approve
                          </Button>
                          <Button size="sm" variant="outline">
                            Decline
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex items-center justify-center"
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                  <h3 className="mt-4 text-lg font-medium">
                    No pending applications
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    All volunteer applications have been processed
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="confirmed" className="space-y-4">
              {confirmedVolunteers.length > 0 ? (
                confirmedVolunteers.map((volunteer) => (
                  <Card
                    key={volunteer.id}
                    className="p-4 shadow-soft transition-all hover:shadow-medium border-l-4 border-l-green-500 dark:border-l-green-500/80"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                              <User className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <h3 className="font-medium">{volunteer.name}</h3>
                              <p className="text-xs text-muted-foreground">
                                {volunteer.email}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 space-y-1 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="mr-2 h-4 w-4 text-primary" />
                              {volunteer.date}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Users className="mr-2 h-4 w-4 text-primary" />
                              {volunteer.role}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Star className="mr-2 h-4 w-4 text-yellow-500" />
                              {volunteer.rating} / 5.0
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/4">
                        <h4 className="text-sm font-medium mb-2">
                          Volunteer Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">Event:</span>
                            <span>{volunteer.event}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">
                              Experience:
                            </span>
                            <span>{volunteer.experience}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">
                              Availability:
                            </span>
                            <span>{volunteer.availability}</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/4 flex flex-col justify-between">
                        <div className="flex items-center justify-end">
                          <Badge
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                          >
                            Confirmed
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                          >
                            View Details
                          </Button>
                          <Button size="sm" variant="outline">
                            Reassign Role
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex items-center justify-center"
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                  <h3 className="mt-4 text-lg font-medium">
                    No confirmed volunteers
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any confirmed volunteers yet
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="past" className="space-y-4">
              {pastVolunteers.length > 0 ? (
                pastVolunteers.map((volunteer) => (
                  <Card
                    key={volunteer.id}
                    className="p-4 shadow-soft transition-all hover:shadow-medium border-l-4 border-l-muted-foreground dark:border-l-muted-foreground/80"
                  >
                    <div className="flex flex-col md:flex-row gap-4">
                      <div className="md:w-1/4 flex-shrink-0">
                        <div className="flex flex-col gap-2">
                          <div className="flex items-center gap-3">
                            <div className="h-12 w-12 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                              <User className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <div>
                              <h3 className="font-medium">{volunteer.name}</h3>
                              <p className="text-xs text-muted-foreground">
                                {volunteer.email}
                              </p>
                            </div>
                          </div>
                          <div className="mt-2 space-y-1 text-sm">
                            <div className="flex items-center text-muted-foreground">
                              <Calendar className="mr-2 h-4 w-4 text-primary" />
                              {volunteer.date}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Users className="mr-2 h-4 w-4 text-primary" />
                              {volunteer.role}
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Star className="mr-2 h-4 w-4 text-yellow-500" />
                              {volunteer.rating} / 5.0
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-2/4">
                        <h4 className="text-sm font-medium mb-2">
                          Volunteer Details
                        </h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">Event:</span>
                            <span>{volunteer.event}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">
                              Experience:
                            </span>
                            <span>{volunteer.experience}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="font-medium min-w-24">
                              Availability:
                            </span>
                            <span>{volunteer.availability}</span>
                          </div>
                        </div>
                      </div>
                      <div className="md:w-1/4 flex flex-col justify-between">
                        <div className="flex items-center justify-end">
                          <Badge
                            variant="outline"
                            className="bg-gray-50 text-gray-700 border-gray-200 dark:bg-gray-900/20 dark:text-gray-400 dark:border-gray-800"
                          >
                            Completed
                          </Badge>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                          <Button
                            size="sm"
                            className="bg-primary hover:bg-primary/90"
                          >
                            View History
                          </Button>
                          <Button size="sm" variant="outline">
                            Invite Again
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            className="flex items-center justify-center"
                          >
                            <MessageSquare className="mr-2 h-4 w-4" />
                            Message
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))
              ) : (
                <div className="text-center py-8">
                  <Users className="mx-auto h-12 w-12 text-muted-foreground opacity-20" />
                  <h3 className="mt-4 text-lg font-medium">
                    No past volunteers
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any past volunteer records
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
