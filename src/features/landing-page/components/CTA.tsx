import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import React from "react";

function CTA() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary-50 dark:bg-primary-950/30">
      <div className="container px-4 md:px-6">
        <Card className="border-none bg-transparent shadow-none">
          <CardHeader className="space-y-4 text-center">
            <CardTitle className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Join Our Community Today
            </CardTitle>
            <CardDescription className="text-muted-foreground md:text-xl/relaxed">
              Be part of something meaningful this Ramadan.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center">
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-primary" asChild>
                <Link href="/register-user">Create Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}

export default CTA;
