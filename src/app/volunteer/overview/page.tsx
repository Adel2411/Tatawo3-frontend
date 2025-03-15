import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Star, Users, Utensils } from "lucide-react";
import Link from "next/link";
import { VolunteerStatsCard } from "@/features/volunteer/components/VolunteerStats";
import {
  Task,
  VolunteerTaskCard,
} from "@/features/volunteer/components/TaskCard";
import { NearbyOpportunitiesCard } from "@/features/volunteer/components/OpportunitiesCard";

// Keep your page component as the default export
export default function VolunteerDashboard() {
  // Mock data - would come from your backend
  const upcomingTasks: Task[] = [
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
    {
      id: 3,
      title: "Cleanup Crew",
      location: "Community Center",
      date: "March 20, 2025",
      time: "8:00 PM - 9:30 PM",
      status: "confirmed",
    },
  ];

  const stats = {
    tasksCompleted: 12,
    hoursVolunteered: 36,
    peopleServed: 240,
    reputationPoints: 450,
  };

  const badges = [
    { name: "First Timer", icon: Star, earned: true },
    { name: "Helping Hand", icon: Users, earned: true },
    { name: "Food Server", icon: Utensils, earned: true },
    { name: "Community Leader", icon: Users, earned: false },
  ];

  const nearbyOpportunities = [
    {
      id: 1,
      name: "Al-Noor Mosque",
      description: "Needs 5 volunteers for food preparation",
      distance: "0.8 miles",
      date: "March 15, 2025",
      time: "3:00 PM - 9:00 PM",
      volunteersNeeded: 5,
    },
    {
      id: 2,
      name: "Community Center",
      description: "Needs 3 volunteers for serving",
      distance: "1.2 miles",
      date: "March 16, 2025",
      time: "4:00 PM - 8:30 PM",
      volunteersNeeded: 3,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Welcome back, John!</CardTitle>
              <CardDescription>
                Thank you for volunteering this Ramadan. Here's your volunteer
                dashboard.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <VolunteerStatsCard
                  title="Tasks Completed"
                  value={stats.tasksCompleted}
                  icon={<Calendar className="h-5 w-5 text-primary" />}
                />
                <VolunteerStatsCard
                  title="Hours Volunteered"
                  value={stats.hoursVolunteered}
                  icon={<Clock className="h-5 w-5 text-primary" />}
                />
                <VolunteerStatsCard
                  title="People Served"
                  value={stats.peopleServed}
                  icon={<Users className="h-5 w-5 text-primary" />}
                />
                <VolunteerStatsCard
                  title="Reputation Points"
                  value={stats.reputationPoints}
                  icon={<Star className="h-5 w-5 text-primary" />}
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2 flex flex-row items-center justify-between">
              <div>
                <CardTitle>Upcoming Tasks</CardTitle>
                <CardDescription>
                  Your scheduled volunteer activities
                </CardDescription>
              </div>
              <Link href="/volunteer/tasks">
                <Button variant="outline" size="sm">
                  View All
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task) => (
                  <VolunteerTaskCard key={task.id} task={task} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3 space-y-6">
          <NearbyOpportunitiesCard opportunities={nearbyOpportunities} />

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Earned Badges</CardTitle>
              <CardDescription>Rewards for your contributions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {badges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
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
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium mt-2">
                        {badge.name}
                      </span>
                      {badge.earned ? (
                        <Badge
                          variant="outline"
                          className="mt-1 text-[10px] bg-primary/5 text-primary border-primary/20"
                        >
                          Earned
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="mt-1 text-[10px]">
                          Locked
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
              <Link
                href="/volunteer/rewards"
                className="block text-center text-sm text-primary hover:text-primary/80 transition-colors mt-4"
              >
                View all badges
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
