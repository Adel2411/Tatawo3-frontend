import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Utensils } from "lucide-react";
import { HeroImage } from "@/features/landing-page/HeroImage";
import { FeatureCard } from "@/features/landing-page/FeatureCard";
import { TestimonialCard } from "@/features/landing-page/TestimonialCard";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-primary-50 to-white dark:from-primary-950 dark:to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4 animate-slide-up">
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
                <Link href="/register">
                  <Button size="lg" className="bg-primary">
                    Join Now
                  </Button>
                </Link>
                <Link href="/about">
                  <Button size="lg" variant="outline">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <HeroImage />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-primary-100 dark:bg-primary-800/30 px-3 py-1 text-sm">
                One Platform, Multiple Roles
              </div>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                How Iftar Connect Works
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform connects volunteers, guests, and restaurant owners
                in one unified community.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary" />}
              title="Volunteer"
              description="Sign up for tasks, help at local restaurants, and earn rewards for your contributions."
            />
            <FeatureCard
              icon={<Utensils className="h-10 w-10 text-primary" />}
              title="Find Iftar"
              description="Discover nearby free Iftar meals with real-time updates on availability and menu options."
            />
            <FeatureCard
              icon={<Calendar className="h-10 w-10 text-primary" />}
              title="Host Events"
              description="Restaurant owners can post events, manage volunteers, and track attendance."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary dark:bg-secondary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Simple & Seamless Experience
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Switch between volunteer and guest modes with a single account.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
            <div className="flex flex-col space-y-4 animate-fade-in">
              <div className="flex items-center space-x-4 rounded-lg border p-4 bg-card shadow-soft transition-all hover:shadow-medium">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-800/30">
                  <span className="font-bold text-primary">1</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Create a single account</h3>
                  <p className="text-sm text-muted-foreground">
                    Register once to access all features of the platform.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg border p-4 bg-card shadow-soft transition-all hover:shadow-medium">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-800/30">
                  <span className="font-bold text-primary">2</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Toggle between modes</h3>
                  <p className="text-sm text-muted-foreground">
                    Switch between volunteer and guest modes with a single
                    click.
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-4 rounded-lg border p-4 bg-card shadow-soft transition-all hover:shadow-medium">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-800/30">
                  <span className="font-bold text-primary">3</span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-medium">Enjoy personalized features</h3>
                  <p className="text-sm text-muted-foreground">
                    Access dedicated dashboards for each mode with relevant
                    information.
                  </p>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-background p-2 shadow-medium">
              <div className="overflow-hidden rounded-md bg-primary-50 dark:bg-primary-950/50 aspect-video">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="App interface showing mode toggle"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Community Stories
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our community members about their experiences.
              </p>
            </div>
          </div>
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50 dark:bg-primary-950/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Join Our Community Today
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                Be part of something meaningful this Ramadan.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/register">
                <Button size="lg" className="bg-primary ">
                  Create Account
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
