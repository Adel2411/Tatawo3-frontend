import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { FeatureCard } from "./FeatureCard";
import { Calendar, Users, Utensils } from "lucide-react";

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

function Features() {
  const featureItems: FeatureItem[] = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Volunteer",
      description:
        "Sign up for tasks, help at local restaurants, and earn rewards for your contributions.",
    },
    {
      icon: <Utensils className="h-10 w-10 text-primary" />,
      title: "Find Iftar",
      description:
        "Discover nearby free Iftar meals with real-time updates on availability and menu options.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-primary" />,
      title: "Host Events",
      description:
        "Restaurant owners can post events, manage volunteers, and track attendance.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader className="space-y-4 text-center">
            <div className="inline-block rounded-lg bg-primary-100 dark:bg-primary-800/30 px-3 py-1 text-sm">
              One Platform, Multiple Roles
            </div>
            <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              How Iftar Connect Works
            </CardTitle>
            <CardDescription className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Our platform connects volunteers, guests, and restaurant owners in
              one unified community.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              {featureItems.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Features;
