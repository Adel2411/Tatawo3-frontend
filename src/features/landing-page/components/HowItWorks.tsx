import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { steps } from "../constants";

function HowItWorks() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary dark:bg-secondary-foreground">
      <div className="container px-4 md:px-6">
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader className="space-y-4 text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Simple & Seamless Experience
            </CardTitle>
            <CardDescription className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
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

              <div className="rounded-lg border bg-background p-2 shadow-medium aspect-video flex items-center justify-center">
                <Image
                  src="/Logo.svg"
                  alt="App interface showing mode toggle"
                  width={300}
                  height={300}
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default HowItWorks;
