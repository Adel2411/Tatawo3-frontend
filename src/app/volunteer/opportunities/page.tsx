"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Filter, MapPin, Search } from "lucide-react";
import Link from "next/link";
import { VolunteerApplicationModal } from "@/features/volunteer/components/ApplicationModal";

export default function OpportunitiesPage() {
  // Mock data - would come from your backend
  const opportunities = [
    {
      id: 1,
      name: "Al-Noor Mosque",
      address: "123 Main St, City",
      distance: "0.8 miles",
      date: "March 15, 2025",
      time: "3:00 PM - 9:00 PM",
      description: "Needs 5 volunteers for food preparation and serving",
      roles: ["Food Preparation", "Serving", "Cleanup"],
      volunteersNeeded: 5,
      volunteersConfirmed: 2,
    },
    {
      id: 2,
      name: "Islamic Center",
      address: "456 Oak Ave, City",
      distance: "1.2 miles",
      date: "March 16, 2025",
      time: "4:00 PM - 8:30 PM",
      description: "Needs 3 volunteers for serving and cleanup",
      roles: ["Serving", "Cleanup"],
      volunteersNeeded: 3,
      volunteersConfirmed: 1,
    },
    {
      id: 3,
      name: "Community Center",
      address: "789 Pine Rd, City",
      distance: "1.5 miles",
      date: "March 17, 2025",
      time: "5:00 PM - 9:30 PM",
      description: "Needs 6 volunteers for all roles",
      roles: ["Food Preparation", "Serving", "Cleanup", "Greeting"],
      volunteersNeeded: 6,
      volunteersConfirmed: 2,
    },
    {
      id: 4,
      name: "Masjid Al-Rahman",
      address: "321 Cedar Blvd, City",
      distance: "2.1 miles",
      date: "March 18, 2025",
      time: "4:30 PM - 8:45 PM",
      description: "Needs 4 volunteers for food preparation and serving",
      roles: ["Food Preparation", "Serving"],
      volunteersNeeded: 4,
      volunteersConfirmed: 1,
    },
    {
      id: 5,
      name: "Downtown Islamic Society",
      address: "555 Elm St, City",
      distance: "2.8 miles",
      date: "March 19, 2025",
      time: "5:30 PM - 9:15 PM",
      description: "Needs 7 volunteers for a large community iftar",
      roles: [
        "Food Preparation",
        "Serving",
        "Cleanup",
        "Greeting",
        "Logistics",
      ],
      volunteersNeeded: 7,
      volunteersConfirmed: 3,
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-soft">
        <CardHeader className="pb-2">
          <CardTitle>Nearby Volunteer Opportunities</CardTitle>
          <CardDescription>
            Find places to volunteer for Iftar events in your area
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by location or venue..."
                className="pl-8 transition-all"
              />
            </div>
            <Button variant="outline" className="sm:w-auto">
              <Filter className="mr-2 h-4 w-4" />
              Filters
            </Button>
            <Button className="sm:w-auto">
              <MapPin className="mr-2 h-4 w-4" />
              Use My Location
            </Button>
          </div>

          <div className="space-y-4">
            {opportunities.map((opportunity) => (
              <Card
                key={opportunity.id}
                className="p-4 shadow-soft transition-all hover:shadow-medium"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/4 flex-shrink-0">
                    <div className="aspect-square rounded-md bg-muted flex items-center justify-center overflow-hidden">
                      <img
                        src="/placeholder.svg?height=150&width=150"
                        alt={opportunity.name}
                        className="object-cover w-full h-full rounded-md transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                  <div className="md:w-3/4">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <h3 className="text-lg font-medium">
                        {opportunity.name}
                      </h3>
                      <Badge
                        variant="outline"
                        className="bg-primary/5 text-primary border-primary/20"
                      >
                        {opportunity.volunteersConfirmed}/
                        {opportunity.volunteersNeeded} Volunteers
                      </Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="mr-1 h-4 w-4" />
                        {opportunity.address}
                      </div>
                      <div className="flex items-center">
                        <span>{opportunity.date}</span>
                      </div>
                      <div className="flex items-center">
                        <span>{opportunity.time}</span>
                      </div>
                    </div>

                    <p className="mt-2 text-sm">{opportunity.description}</p>

                    <div className="mt-3">
                      <div className="text-sm font-medium">Roles Needed:</div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {opportunity.roles.map((role, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-muted"
                          >
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-2 mt-4">
                      <VolunteerApplicationModal
                        restaurantName={opportunity.name}
                        eventDate={opportunity.date}
                        eventTime={opportunity.time}
                        trigger={
                          <Button className="bg-primary hover:bg-primary/90">
                            Apply to Volunteer
                          </Button>
                        }
                      />
                      <Button variant="outline" asChild>
                        <Link
                          href={`/volunteer/opportunities/${opportunity.id}`}
                        >
                          View Details
                        </Link>
                      </Button>
                      <div className="text-sm text-muted-foreground flex items-center ml-auto mt-2 sm:mt-0">
                        <MapPin className="mr-1 h-3 w-3" />
                        {opportunity.distance} away
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
