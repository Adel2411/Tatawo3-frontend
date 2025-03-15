import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import Link from "next/link";
import { VolunteerApplicationModal } from "./ApplicationModal";

interface NearbyOpportunity {
  id: number;
  name: string;
  description: string;
  distance: string;
  date: string;
  time: string;
  volunteersNeeded: number;
}

interface NearbyOpportunitiesCardProps {
  opportunities: NearbyOpportunity[];
}

export function NearbyOpportunitiesCard({
  opportunities,
}: NearbyOpportunitiesCardProps) {
  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-2">
        <CardTitle>Nearby Opportunities</CardTitle>
        <CardDescription>Volunteer opportunities near you</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="flex items-start gap-3 rounded-md border p-3 bg-card shadow-soft transition-all hover:shadow-medium"
            >
              <MapPin className="mt-0.5 h-5 w-5 text-primary" />
              <div>
                <h4 className="font-medium">{opportunity.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {opportunity.description}
                </p>
                <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
                  <span>{opportunity.date}</span>
                  <span>{opportunity.time}</span>
                  <span>{opportunity.distance} away</span>
                </div>
                <div className="flex gap-2 mt-2">
                  <VolunteerApplicationModal
                    restaurantName={opportunity.name}
                    eventDate={opportunity.date}
                    eventTime={opportunity.time}
                    trigger={
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        Apply
                      </Button>
                    }
                  />
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href={`/dashboard/volunteer/nearby/${opportunity.id}`}
                    >
                      Details
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
          <Link
            href="/dashboard/volunteer/nearby"
            className="block text-center text-sm text-primary hover:text-primary/90 transition-colors mt-2"
          >
            View more opportunities
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
