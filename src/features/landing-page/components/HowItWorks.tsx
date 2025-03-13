import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

type Step = {
  number: number;
  title: string;
  description: string;
};

function HowItWorks() {
  const steps: Step[] = [
    {
      number: 1,
      title: "Create a single account",
      description: "Register once to access all features of the platform.",
    },
    {
      number: 2,
      title: "Toggle between modes",
      description:
        "Switch between volunteer and guest modes with a single click.",
    },
    {
      number: 3,
      title: "Enjoy personalized features",
      description:
        "Access dedicated dashboards for each mode with relevant information.",
    },
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary dark:bg-secondary-foreground">
      <div className="container px-4 md:px-6">
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader className="space-y-4 text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple & Seamless Experience
            </CardTitle>
            <CardDescription className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Switch between volunteer and guest modes with a single account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <div className="bg-transparent shadow-none animate-fade-in">
                <CardContent className="space-y-4 p-0">
                  {steps.map((step) => (
                    <Card
                      key={step.number}
                      className="items-center space-x-4 rounded-lg border p-4 bg-card shadow-soft transition-all hover:shadow-medium"
                    >
                      <CardContent className="w-full flex items-center space-x-4">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-800/30">
                          <span className="font-bold text-primary">
                            {step.number}
                          </span>
                        </div>
                        <div className="space-y-1">
                          <h3 className="font-medium">{step.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {step.description}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </CardContent>
              </div>

              <Card className="bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg border bg-background p-2 shadow-medium">
                <CardContent className="p-0">
                  <div className="flex items-center justify-center overflow-hidden rounded-md bg-primary-50 dark:bg-primary-950/50 aspect-video">
                    <img
                      src="/Logo.svg"
                      alt="App interface showing mode toggle"
                      className="w-96 h-28 object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default HowItWorks;
