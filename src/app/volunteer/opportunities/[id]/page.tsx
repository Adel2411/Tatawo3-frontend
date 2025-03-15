import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  MapPin,
  MessageSquare,
  Users,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";
import { VolunteerApplicationModal } from "@/features/volunteer/components/ApplicationModal";

interface OpportunityDetailPageProps {
  params: {
    id: string;
  };
}

export default function OpportunityDetailPage({
  params,
}: OpportunityDetailPageProps) {
  // In a real app, you would fetch the opportunity data based on the ID
  // For now, we'll use mock data
  const opportunity = {
    id: Number.parseInt(params.id),
    name: "Al-Noor Mosque",
    title: "Daily Iftar Volunteers Needed",
    address: "123 Main St, City",
    distance: "0.8 miles",
    date: "March 15, 2025",
    time: "3:00 PM - 9:00 PM",
    description:
      "We are looking for volunteers to help with our daily Iftar event. Tasks include food preparation, serving, and cleanup. No experience necessary, just a willingness to help!",
    details:
      "This is a great opportunity to give back to the community during Ramadan. We serve approximately 100 guests each evening. The atmosphere is friendly and welcoming.",
    requirements:
      "Volunteers should be at least 16 years old. Please wear comfortable clothes and closed-toe shoes. Training will be provided on-site.",
    contactPerson: {
      name: "Mohammed Rahman",
      role: "Volunteer Coordinator",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    roles: [
      {
        title: "Food Preparation",
        time: "3:00 PM - 6:00 PM",
        spots: 3,
        spotsAvailable: 1,
        description:
          "Help prepare food for the Iftar meal. Tasks include chopping vegetables, preparing rice, and setting up serving stations.",
      },
      {
        title: "Food Server",
        time: "6:00 PM - 8:00 PM",
        spots: 5,
        spotsAvailable: 2,
        description:
          "Serve food to guests during the Iftar meal. Ensure all guests are served promptly and courteously.",
      },
      {
        title: "Cleanup Crew",
        time: "8:00 PM - 9:00 PM",
        spots: 4,
        spotsAvailable: 2,
        description:
          "Help clean up after the Iftar meal. Tasks include clearing tables, washing dishes, and general cleanup.",
      },
    ],
    images: [
      "/placeholder.svg?height=300&width=500",
      "/placeholder.svg?height=300&width=500",
    ],
  };

  return (
    <div className="space-y-6">
      <Link
        href="/volunteer/opportunities"
        className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors mb-4"
      >
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to Opportunities
      </Link>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-2/3 space-y-6">
          <Card className="shadow-soft border-t-4 border-t-primary dark:border-t-primary/80">
            <CardHeader className="pb-2">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">
                    {opportunity.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {opportunity.name}
                  </CardDescription>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  Volunteers Needed
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-x-6 gap-y-3 mb-6 text-sm">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4 text-primary" />
                  <span>{opportunity.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="mr-2 h-4 w-4 text-primary" />
                  <span>{opportunity.time}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  <span>{opportunity.address}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4 text-primary" />
                  <span>{opportunity.distance} away</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {opportunity.images.map((image, index) => (
                  <div
                    key={index}
                    className="aspect-video rounded-md bg-muted flex items-center justify-center overflow-hidden"
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`${opportunity.name} - Image ${index + 1}`}
                      className="object-cover w-full h-full rounded-md transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Description</h3>
                  <p className="text-muted-foreground">
                    {opportunity.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Details</h3>
                  <p className="text-muted-foreground">{opportunity.details}</p>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Requirements</h3>
                  <div className="bg-muted/30 p-4 rounded-md border">
                    <p className="text-muted-foreground">
                      {opportunity.requirements}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4">Available Roles</h3>
                <div className="space-y-4">
                  {opportunity.roles.map((role, index) => (
                    <Card
                      key={index}
                      className="p-4 shadow-soft transition-all hover:shadow-medium"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <h4 className="font-medium">{role.title}</h4>
                          <div className="flex flex-col sm:flex-row gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                            <div className="flex items-center">
                              <Clock className="mr-1 h-4 w-4 text-primary" />
                              {role.time}
                            </div>
                            <div className="flex items-center">
                              <Users className="mr-1 h-4 w-4 text-primary" />
                              {role.spotsAvailable} of {role.spots} spots
                              available
                            </div>
                          </div>
                          <p className="mt-2 text-sm">{role.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <VolunteerApplicationModal
                            restaurantName={opportunity.name}
                            eventDate={opportunity.date}
                            eventTime={role.time}
                            trigger={
                              <Button className="bg-primary hover:bg-primary/90">
                                Apply for Role
                              </Button>
                            }
                          />
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
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
                <Button variant="outline">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Message Coordinator
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:w-1/3 space-y-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Contact Person</CardTitle>
              <CardDescription>
                Reach out if you have any questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src={opportunity.contactPerson.avatar}
                    alt={opportunity.contactPerson.name}
                  />
                  <AvatarFallback className="bg-primary/10 text-primary">
                    {opportunity.contactPerson.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-medium">
                    {opportunity.contactPerson.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {opportunity.contactPerson.role}
                  </p>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Location</CardTitle>
              <CardDescription>{opportunity.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video rounded-md bg-muted flex items-center justify-center overflow-hidden mb-4">
                <div className="w-full h-full bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Map would be displayed here
                  </p>
                </div>
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90">
                <MapPin className="mr-2 h-4 w-4" />
                Get Directions
              </Button>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Quick Apply</CardTitle>
              <CardDescription>Apply for all available roles</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">
                Interested in helping with any role? Apply once and let the
                coordinator assign you where you're needed most.
              </p>
              <VolunteerApplicationModal
                restaurantName={opportunity.name}
                eventDate={opportunity.date}
                eventTime={opportunity.time}
                trigger={
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    Quick Apply
                  </Button>
                }
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
