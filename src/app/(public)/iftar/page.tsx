"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Filter, MapPin, Search } from "lucide-react";
import { IftarEventCard } from "@/features/iftar/components/IftarEventCard";

export default function Iftar() {
  // Mock data - would come from your backend
  const nearbyEvents = [
    {
      id: 1,
      name: "Al-Noor Mosque",
      address: "123 Main St, City",
      distance: "0.8 miles",
      time: "Sunset - 9:00 PM",
      menu: ["Rice", "Chicken Curry", "Dates", "Fruit"],
      capacity: "50% full",
      dietaryOptions: ["Vegetarian", "Halal"],
      isFavorite: false,
    },
    {
      id: 2,
      name: "Islamic Center",
      address: "456 Oak Ave, City",
      distance: "1.2 miles",
      time: "Sunset - 8:30 PM",
      menu: ["Biryani", "Kebabs", "Salad", "Dessert"],
      capacity: "75% full",
      dietaryOptions: ["Vegetarian", "Halal", "Gluten-Free"],
      isFavorite: false,
    },
    {
      id: 3,
      name: "Community Center",
      address: "789 Pine Rd, City",
      distance: "1.5 miles",
      time: "Sunset - 9:30 PM",
      menu: ["Lamb Stew", "Rice", "Bread", "Fruit"],
      capacity: "25% full",
      dietaryOptions: ["Halal"],
      isFavorite: false,
    },
    {
      id: 4,
      name: "Masjid Al-Rahman",
      address: "321 Cedar Blvd, City",
      distance: "2.1 miles",
      time: "Sunset - 8:45 PM",
      menu: ["Mixed Grill", "Rice", "Salad", "Baklava"],
      capacity: "60% full",
      dietaryOptions: ["Vegetarian", "Halal", "Dairy-Free"],
      isFavorite: false,
    },
    {
      id: 5,
      name: "Downtown Islamic Society",
      address: "555 Elm St, City",
      distance: "2.8 miles",
      time: "Sunset - 9:15 PM",
      menu: ["Chicken Biryani", "Lentil Soup", "Naan", "Fruit Salad"],
      capacity: "40% full",
      dietaryOptions: ["Vegetarian", "Halal", "Nut-Free"],
      isFavorite: false,
    },
  ];

  return (
    <div className="container py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Find Iftar Near You
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Discover free Iftar meals in your community during Ramadan
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <Card className="shadow-soft">
                <CardHeader className="pb-2">
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                    <div>
                      <CardTitle>Available Iftar Events</CardTitle>
                      <CardDescription>
                        Free meals for everyone during Ramadan
                      </CardDescription>
                    </div>
                    <Button className="sm:w-auto">
                      <MapPin className="mr-2 h-4 w-4" />
                      Use My Location
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-col sm:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="search"
                        placeholder="Search by location or venue..."
                        className="pl-8 transition-all focus:ring-2 focus:ring-primary/50"
                      />
                    </div>
                    <Button variant="outline" className="sm:w-auto">
                      <Filter className="mr-2 h-4 w-4" />
                      Filters
                    </Button>
                  </div>

                  <div className="space-y-4">
                    {nearbyEvents.map((event) => (
                      <IftarEventCard key={event.id} event={event} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Want to Volunteer?</CardTitle>
              <CardDescription>
                Help serve Iftar meals to your community during Ramadan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-1/2">
                  <img
                    src="/placeholder.svg?height=300&width=400"
                    alt="Volunteers serving food"
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="md:w-1/2 space-y-4">
                  <h3 className="text-xl font-medium">
                    Make a Difference This Ramadan
                  </h3>
                  <p className="text-muted-foreground">
                    Join our community of volunteers helping to prepare and
                    serve Iftar meals during the holy month of Ramadan. No
                    experience necessary - just a willingness to help!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button asChild>
                      <a href="/register">Sign Up to Volunteer</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="/how-it-works">Learn More</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
