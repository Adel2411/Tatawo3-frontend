"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, BarChart, PieChart } from "lucide-react";
import {
  Bar,
  BarChart as RechartsBarChart,
  Cell,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  Pie,
  PieChart as RechartsPieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AIInsightsCardProps {
  title: string;
  description: string;
}

export function AIInsightsCard({ title, description }: AIInsightsCardProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [insightsGenerated, setInsightsGenerated] = useState(false);

  const handleGenerateInsights = async () => {
    setIsGenerating(true);

    // Simulate AI processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsGenerating(false);
    setInsightsGenerated(true);
  };

  // Attendance data formatted for Recharts
  const attendanceData = [
    { name: "Mon", predicted: 65, previous: 60 },
    { name: "Tue", predicted: 72, previous: 68 },
    { name: "Wed", predicted: 78, previous: 75 },
    { name: "Thu", predicted: 85, previous: 82 },
    { name: "Fri", predicted: 120, previous: 110 },
    { name: "Sat", predicted: 95, previous: 90 },
    { name: "Sun", predicted: 80, previous: 75 },
  ];

  // Volunteer data formatted for Recharts
  const volunteerData = [
    { name: "Food Prep", value: 8 },
    { name: "Serving", value: 12 },
    { name: "Cleanup", value: 6 },
    { name: "Greeting", value: 4 },
    { name: "Logistics", value: 3 },
  ];

  // Dietary data formatted for Recharts
  const dietaryData = [
    { name: "Standard", value: 60 },
    { name: "Vegetarian", value: 25 },
    { name: "Vegan", value: 5 },
    { name: "Gluten-Free", value: 7 },
    { name: "Nut-Free", value: 3 },
  ];

  const COLORS = [
    "rgb(16, 185, 129)",
    "rgb(14, 165, 233)",
    "rgb(168, 85, 247)",
    "rgb(249, 115, 22)",
    "rgb(236, 72, 153)",
  ];

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-2">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        {!insightsGenerated ? (
          <div className="flex flex-col items-center justify-center py-12">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium mb-2">AI-Powered Insights</h3>
              <p className="text-sm text-muted-foreground max-w-md">
                Generate predictions for attendance, volunteer needs, and
                dietary preferences based on historical data and current trends.
              </p>
            </div>
            <Button onClick={handleGenerateInsights} disabled={isGenerating}>
              {isGenerating ? "Generating Insights..." : "Generate Insights"}
            </Button>
          </div>
        ) : (
          <Tabs defaultValue="attendance">
            <TabsList className="mb-4">
              <TabsTrigger
                value="attendance"
                className="flex items-center gap-1"
              >
                <LineChart className="h-4 w-4" />
                <span>Attendance</span>
              </TabsTrigger>
              <TabsTrigger
                value="volunteers"
                className="flex items-center gap-1"
              >
                <BarChart className="h-4 w-4" />
                <span>Volunteers</span>
              </TabsTrigger>
              <TabsTrigger value="dietary" className="flex items-center gap-1">
                <PieChart className="h-4 w-4" />
                <span>Dietary</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="attendance" className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">
                  Predicted Attendance
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsLineChart
                      data={attendanceData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="predicted"
                        name="Predicted Attendance"
                        stroke="#347BF6"
                        activeDot={{ r: 8 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="previous"
                        name="Previous Week"
                        stroke="#121A2B"
                        strokeDasharray="5 5"
                      />
                    </RechartsLineChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Prediction: Expect a 15% increase in attendance on Friday
                  compared to last week.
                </p>
              </div>
              <div className="rounded-lg border p-4 bg-primary/20">
                <h3 className="text-sm font-medium mb-1">AI Recommendation</h3>
                <p className="text-sm">
                  Based on the predicted attendance spike on Friday, consider
                  increasing food preparation by 20% and adding 3-4 additional
                  volunteers.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="volunteers" className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">
                  Volunteer Needs Analysis
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <RechartsBarChart
                      data={volunteerData}
                      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                    >
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" name="Volunteers Needed">
                        {volunteerData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Bar>
                    </RechartsBarChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Analysis: Serving positions are the most needed, followed by
                  food preparation.
                </p>
              </div>
              <div className="rounded-lg border p-4 bg-primary/20">
                <h3 className="text-sm font-medium mb-1">AI Recommendation</h3>
                <p className="text-sm">
                  Prioritize recruiting volunteers for serving positions.
                  Consider offering incentives for these high-demand roles.
                </p>
              </div>
            </TabsContent>

            <TabsContent value="dietary" className="space-y-4">
              <div className="rounded-lg border p-4">
                <h3 className="text-sm font-medium mb-2">
                  Dietary Preferences Distribution
                </h3>
                <div className="h-64 flex items-center justify-center">
                  <ResponsiveContainer width="75%" height="100%">
                    <RechartsPieChart>
                      <Pie
                        data={dietaryData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
                      >
                        {dietaryData.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </RechartsPieChart>
                  </ResponsiveContainer>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Analysis: 25% of guests prefer vegetarian options, higher than
                  the community average of 18%.
                </p>
              </div>
              <div className="rounded-lg border p-4 bg-primary/20">
                <h3 className="text-sm font-medium mb-1">AI Recommendation</h3>
                <p className="text-sm">
                  Increase vegetarian food options to 30% of total preparation.
                  Ensure clear labeling of all food items for dietary
                  restrictions.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        )}
      </CardContent>
    </Card>
  );
}
