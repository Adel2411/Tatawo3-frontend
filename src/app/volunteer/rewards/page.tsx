import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Award,
  Clock,
  Heart,
  MapPin,
  Star,
  Users,
  Utensils,
} from "lucide-react";
import { RewardsCard } from "@/features/volunteer/components/RewardsCard";

export default function VolunteerRewardsPage() {
  // Mock data
  const reputationPoints = 450;
  const nextMilestone = 500;
  const nextReward = "Free Iftar meal for you and a friend";

  const recentBadges = [
    {
      name: "First Timer",
      icon: Star,
      date: "March 10, 2025",
    },
    {
      name: "Helping Hand",
      icon: Users,
      date: "March 12, 2025",
    },
    {
      name: "Food Server",
      icon: Utensils,
      date: "March 14, 2025",
    },
  ];

  const allBadges = [
    {
      name: "First Timer",
      icon: Star,
      earned: true,
      description: "Complete your first volunteer task",
    },
    {
      name: "Helping Hand",
      icon: Users,
      earned: true,
      description: "Volunteer for 5 different tasks",
    },
    {
      name: "Food Server",
      icon: Utensils,
      earned: true,
      description: "Serve food at 3 different events",
    },
    {
      name: "Community Leader",
      icon: Users,
      earned: false,
      description: "Help coordinate an Iftar event",
    },
    {
      name: "Early Bird",
      icon: Clock,
      earned: false,
      description: "Arrive early to 5 volunteer shifts",
    },
    {
      name: "Local Hero",
      icon: MapPin,
      earned: false,
      description: "Volunteer at 10 different locations",
    },
    {
      name: "Ramadan Spirit",
      icon: Heart,
      earned: false,
      description: "Volunteer for 15 days during Ramadan",
    },
    {
      name: "Master Chef",
      icon: Utensils,
      earned: false,
      description: "Help prepare food for 5 events",
    },
  ];

  const rewards = [
    { points: 100, name: "Volunteer Certificate", earned: true },
    { points: 250, name: "Exclusive Volunteer T-shirt", earned: true },
    {
      points: 500,
      name: "Free Iftar meal for you and a friend",
      earned: false,
    },
    {
      points: 750,
      name: "Featured volunteer spotlight on our website",
      earned: false,
    },
    {
      points: 1000,
      name: "VIP access to special community events",
      earned: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <RewardsCard
            reputationPoints={reputationPoints}
            nextMilestone={nextMilestone}
            nextReward={nextReward}
            recentBadges={recentBadges}
          />
        </div>

        <div className="md:w-2/3 space-y-6">
          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>All Badges</CardTitle>
              <CardDescription>
                Collect badges by completing different volunteer activities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {allBadges.map((badge, index) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={index}
                      className={`flex flex-col items-center justify-center rounded-md border p-4 transition-all ${
                        badge.earned
                          ? "bg-card shadow-soft hover:shadow-medium"
                          : "opacity-50"
                      }`}
                    >
                      <div
                        className={`rounded-full p-3 ${
                          badge.earned
                            ? "bg-primary/10 text-primary"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-6 w-6" />
                      </div>
                      <span className="text-sm font-medium mt-2 text-center">
                        {badge.name}
                      </span>
                      <p className="text-xs text-muted-foreground mt-1 text-center">
                        {badge.description}
                      </p>
                      {badge.earned ? (
                        <Badge
                          variant="outline"
                          className="mt-2 text-[10px] bg-primary/5 text-primary border-primary/20"
                        >
                          Earned
                        </Badge>
                      ) : (
                        <Badge variant="outline" className="mt-2 text-[10px]">
                          Locked
                        </Badge>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-soft">
            <CardHeader className="pb-2">
              <CardTitle>Rewards Program</CardTitle>
              <CardDescription>
                Earn points by volunteering to unlock special rewards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {rewards.map((reward, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-4 rounded-md border p-4 ${
                      reward.earned ? "bg-primary/20 border-primary/20" : ""
                    }`}
                  >
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-full ${
                        reward.earned ? "bg-primary/10" : "bg-muted"
                      }`}
                    >
                      <Award
                        className={`h-6 w-6 ${
                          reward.earned
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">{reward.name}</h3>
                        <Badge
                          variant={reward.earned ? "default" : "outline"}
                          className={reward.earned ? "bg-primary" : ""}
                        >
                          {reward.earned ? "Earned" : `${reward.points} Points`}
                        </Badge>
                      </div>
                      <div className="mt-1 flex items-center text-sm text-muted-foreground">
                        <Star className="mr-1 h-4 w-4" />
                        <span>{reward.points} reputation points required</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
