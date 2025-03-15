import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import {
  Task,
  VolunteerTaskCard,
} from "@/features/volunteer/components/TaskCard";

export default function VolunteerTasksPage() {
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

  const completedTasks: Task[] = [
    {
      id: 4,
      title: "Food Preparation",
      location: "Downtown Mosque",
      date: "March 10, 2025",
      time: "3:00 PM - 5:30 PM",
      status: "completed",
    },
    {
      id: 5,
      title: "Serving Food",
      location: "Al-Noor Mosque",
      date: "March 12, 2025",
      time: "5:30 PM - 8:00 PM",
      status: "completed",
    },
  ];

  const cancelledTasks: Task[] = [
    {
      id: 6,
      title: "Cleanup Crew",
      location: "Islamic Center",
      date: "March 8, 2025",
      time: "8:00 PM - 9:30 PM",
      status: "cancelled",
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-soft">
        <CardHeader className="pb-2">
          <CardTitle>My Volunteer Tasks</CardTitle>
          <CardDescription>Manage your volunteer activities</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="upcoming">
            <TabsList className="mb-4">
              <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
              <TabsTrigger value="cancelled">Cancelled</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming" className="space-y-4">
              {upcomingTasks.length > 0 ? (
                upcomingTasks.map((task) => (
                  <VolunteerTaskCard key={task.id} task={task} />
                ))
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium">No upcoming tasks</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any upcoming volunteer tasks scheduled
                  </p>
                  <Button
                    className="mt-4 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <Link href="/volunteer/opportunities">
                      Find Opportunities
                    </Link>
                  </Button>
                </div>
              )}
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              {completedTasks.length > 0 ? (
                completedTasks.map((task) => (
                  <VolunteerTaskCard key={task.id} task={task} />
                ))
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium">No completed tasks</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You haven't completed any volunteer tasks yet
                  </p>
                </div>
              )}
            </TabsContent>

            <TabsContent value="cancelled" className="space-y-4">
              {cancelledTasks.length > 0 ? (
                cancelledTasks.map((task) => (
                  <VolunteerTaskCard key={task.id} task={task} />
                ))
              ) : (
                <div className="text-center py-8">
                  <h3 className="text-lg font-medium">No cancelled tasks</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    You don't have any cancelled volunteer tasks
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
