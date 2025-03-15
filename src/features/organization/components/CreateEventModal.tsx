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
import { Calendar, Users, Utensils } from "lucide-react";
import { useRouter } from "next/navigation";

interface CreateEventModalProps {
  trigger: React.ReactNode;
}

export function CreateEventModal({ trigger }: CreateEventModalProps) {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setOpen(false);

    // Redirect to events page
    router.push("organization/events");
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Create New Iftar Event</DialogTitle>
            <DialogDescription>
              Fill in the details to create a new Iftar event
            </DialogDescription>
          </DialogHeader>

          <div className="py-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    currentStep >= 1
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  1
                </div>
                <div
                  className={`h-1 w-12 ${currentStep >= 2 ? "bg-primary" : "bg-muted"}`}
                ></div>
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    currentStep >= 2
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  2
                </div>
                <div
                  className={`h-1 w-12 ${currentStep >= 3 ? "bg-primary" : "bg-muted"}`}
                ></div>
                <div
                  className={`h-8 w-8 rounded-full flex items-center justify-center ${
                    currentStep >= 3
                      ? "bg-primary/10 text-primary"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  3
                </div>
              </div>
              <div className="text-sm text-muted-foreground">
                Step {currentStep} of 3
              </div>
            </div>

            {currentStep === 1 && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-primary" />
                  Basic Information
                </h3>

                <div className="grid gap-4">
                  <div className="grid gap-2">
                    <Label htmlFor="title">Event Title</Label>
                    <Input
                      id="title"
                      placeholder="e.g., Daily Iftar, Community Iftar"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="date">Date</Label>
                      <Input id="date" type="date" required />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="time">Time</Label>
                      <Input
                        id="time"
                        placeholder="e.g., Sunset - 9:00 PM"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      placeholder="Full address of the event"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      placeholder="Describe your Iftar event"
                      className="min-h-[100px]"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Utensils className="h-4 w-4 text-primary" />
                  Capacity & Menu
                </h3>

                <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="capacity">Guest Capacity</Label>
                      <Input
                        id="capacity"
                        type="number"
                        min="1"
                        placeholder="Maximum number of guests"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="expectedGuests">Expected Guests</Label>
                      <Input
                        id="expectedGuests"
                        type="number"
                        min="0"
                        placeholder="Estimated number of guests"
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="menu">Menu Items</Label>
                    <Textarea
                      id="menu"
                      placeholder="List the main dishes and items on the menu"
                      required
                    />
                  </div>

                  <div className="grid gap-2">
                    <Label>Dietary Options</Label>
                    <div className="flex flex-wrap gap-2">
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Vegetarian</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Vegan</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Gluten-Free</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Nut-Free</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Dairy-Free</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <h3 className="text-sm font-medium flex items-center gap-2">
                  <Users className="h-4 w-4 text-primary" />
                  Volunteer Requirements
                </h3>

                <div className="grid gap-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="volunteersNeeded">
                        Volunteers Needed
                      </Label>
                      <Input
                        id="volunteersNeeded"
                        type="number"
                        min="0"
                        placeholder="Total number of volunteers needed"
                        required
                      />
                    </div>

                    <div className="grid gap-2">
                      <Label htmlFor="volunteerTime">Volunteer Time</Label>
                      <Input
                        id="volunteerTime"
                        placeholder="e.g., 4:00 PM - 9:00 PM"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label>Volunteer Roles Needed</Label>
                    <div className="flex flex-wrap gap-2">
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Food Preparation</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Serving</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Cleanup</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Greeting</span>
                      </label>
                      <label className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer hover:bg-muted/50">
                        <input
                          type="checkbox"
                          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <span className="text-sm">Logistics</span>
                      </label>
                    </div>
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="volunteerInstructions">
                      Instructions for Volunteers
                    </Label>
                    <Textarea
                      id="volunteerInstructions"
                      placeholder="Provide any specific instructions for volunteers"
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              </div>
            )}
          </div>

          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
            {currentStep > 1 && (
              <Button type="button" variant="outline" onClick={prevStep}>
                Previous
              </Button>
            )}
            <div className="flex flex-col-reverse sm:flex-row sm:space-x-2">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpen(false)}
                className="mt-3 sm:mt-0"
              >
                Cancel
              </Button>
              {currentStep < 3 ? (
                <Button
                  type="button"
                  className="bg-primary hover:bg-primary/90"
                  onClick={nextStep}
                >
                  Next
                </Button>
              ) : (
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Creating Event..." : "Create Event"}
                </Button>
              )}
            </div>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
