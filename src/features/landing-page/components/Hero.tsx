import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import React from "react";
import { HeroImage } from "./HeroImage";

function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950 dark:to-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <Card className="border-none bg-transparent shadow-none animate-slide-up">
            <CardContent className="p-0 space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Connecting Communities for Ramadan
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Join Iftar Connect to volunteer, find free meals, or host
                  events during the holy month.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-primary" asChild>
                  <Link href="/register-user">Join Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/about">Learn More</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

export default Hero;
