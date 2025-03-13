import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { TestimonialCard } from "./TestimonialCard";

function Testimonials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader className="space-y-4 text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Community Stories
            </CardTitle>
            <CardDescription className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Hear from our community members about their experiences.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-3">
              <TestimonialCard
                quote="As a volunteer, I've been able to give back to my community during Ramadan while making new friends."
                author="Ahmed K."
                role="Volunteer"
              />
              <TestimonialCard
                quote="Finding Iftar meals has never been easier. The real-time updates save me so much time."
                author="Fatima S."
                role="Guest"
              />
              <TestimonialCard
                quote="Our restaurant has been able to reach more people and coordinate volunteers efficiently."
                author="Mohammed R."
                role="Restaurant Owner"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

export default Testimonials;
