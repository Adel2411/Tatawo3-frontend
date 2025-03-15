import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AIInsightsCard } from "@/features/ai/components/AIInsightsCard";
import { Calendar, Clock, Users, Utensils } from "lucide-react";

export default function OrgAnalyticsPage() {
  return (
    <div className="space-y-6">
      <AIInsightsCard
        title="AI-Powered Analytics"
        description="Predictive insights to help optimize your Iftar events"
      />

      <Card className="shadow-soft">
        <CardHeader className="pb-2">
          <CardTitle>Event Performance</CardTitle>
          <CardDescription>
            Track attendance, volunteer participation, and guest satisfaction
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="attendance">
            <TabsList className="mb-4">
              <TabsTrigger value="attendance">Attendance</TabsTrigger>
              <TabsTrigger value="volunteers">Volunteers</TabsTrigger>
              <TabsTrigger value="satisfaction">Satisfaction</TabsTrigger>
            </TabsList>

            <TabsContent value="attendance">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Guests
                      </p>
                      <p className="text-2xl font-bold">1,240</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    ↑ 15% from last week
                  </p>
                </div>

                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Calendar className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Events Hosted
                      </p>
                      <p className="text-2xl font-bold">14</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    ↑ 2 more than last month
                  </p>
                </div>

                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Clock className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Avg. Stay Duration
                      </p>
                      <p className="text-2xl font-bold">45 min</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    ↑ 5 min from last week
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">Attendance Trends</h3>
                <div className="h-64 bg-muted/20 rounded flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Attendance chart visualization would appear here
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Fridays consistently show the highest attendance, with an
                  average of 120 guests.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="volunteers">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Total Volunteers
                      </p>
                      <p className="text-2xl font-bold">45</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    ↑ 8 new volunteers this month
                  </p>
                </div>

                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Clock className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Volunteer Hours
                      </p>
                      <p className="text-2xl font-bold">320</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    ↑ 12% from last month
                  </p>
                </div>

                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Utensils className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Most Popular Role
                      </p>
                      <p className="text-2xl font-bold">Serving</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    42% of volunteer applications
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">
                  Volunteer Distribution
                </h3>
                <div className="h-64 bg-muted/20 rounded flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Volunteer distribution chart would appear here
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Food serving and preparation are the most popular volunteer
                  activities.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="satisfaction">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Guest Satisfaction
                      </p>
                      <p className="text-2xl font-bold">4.8/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    ↑ 0.2 from last month
                  </p>
                </div>

                <div className="rounded-lg border p-4 bg-card shadow-soft">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
                      <Users className="h-5 w-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Volunteer Satisfaction
                      </p>
                      <p className="text-2xl font-bold">4.6/5</p>
                    </div>
                  </div>
                  <p className="text-xs text-emerald-600 mt-2">
                    ↑ 0.1 from last month
                  </p>
                </div>
              </div>

              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">Feedback Analysis</h3>
                <div className="h-64 bg-muted/20 rounded flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Feedback analysis visualization would appear here
                  </p>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Food quality and volunteer friendliness are the most
                  positively mentioned aspects in feedback.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
