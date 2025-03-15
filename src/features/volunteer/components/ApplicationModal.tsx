"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Calendar, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

interface VolunteerApplicationModalProps {
  restaurantName: string;
  eventDate: string;
  eventTime: string;
  trigger?: React.ReactNode;
}

export function VolunteerApplicationModal({
  restaurantName,
  eventDate,
  eventTime,
  trigger,
}: VolunteerApplicationModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setOpen(false);

    // Redirect to messages page with success notification
    router.push("/dashboard/messages");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {trigger || (
          <Button className="bg-primary hover:bg-primary/90">
            Apply to Volunteer
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Volunteer Application</DialogTitle>
            <DialogDescription>
              Apply to volunteer at {restaurantName} for their Iftar event
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>{eventDate}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span>{eventTime}</span>
              </div>
            </div>

            <div className="grid gap-2">
              <Label htmlFor="skills">Skills & Experience</Label>
              <Input
                id="skills"
                placeholder="e.g., Cooking, Serving, Cleaning"
                className="transition-all focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="availability">Availability</Label>
              <Input
                id="availability"
                placeholder="e.g., 4:00 PM - 9:00 PM"
                className="transition-all focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="message">Message to Restaurant</Label>
              <Textarea
                id="message"
                placeholder="Introduce yourself and explain why you'd like to volunteer"
                className="min-h-[100px] transition-all focus:ring-2 focus:ring-primary/50"
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit Application"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
