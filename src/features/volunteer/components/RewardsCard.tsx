import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Award, Calendar, type Star } from "lucide-react";

interface RewardsCardProps {
  reputationPoints: number;
  nextMilestone: number;
  nextReward: string;
  recentBadges: {
    name: string;
    icon: typeof Star;
    date: string;
  }[];
}

export function RewardsCard({
  reputationPoints,
  nextMilestone,
  nextReward,
  recentBadges,
}: RewardsCardProps) {
  const progressPercentage = Math.min(
    100,
    (reputationPoints / nextMilestone) * 100,
  );

  return (
    <Card className="shadow-soft">
      <CardHeader className="pb-2">
        <CardTitle>Reputation & Rewards</CardTitle>
        <CardDescription>
          Track your volunteer contributions and rewards
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Reputation Points</h3>
            <span className="text-lg font-bold text-emerald-600">
              {reputationPoints}
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-muted" />
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Current</span>
            <span>
              {reputationPoints} / {nextMilestone} points to next reward
            </span>
          </div>
        </div>

        <div className="rounded-lg border p-4 bg-emerald-50 dark:bg-emerald-900/20">
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-emerald-100 dark:bg-emerald-800 p-2">
              <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div>
              <h3 className="text-sm font-medium">Next Reward</h3>
              <p className="text-xs text-muted-foreground">{nextReward}</p>
            </div>
          </div>
          <div className="mt-2 text-xs">
            <p>
              Earn {nextMilestone - reputationPoints} more points to unlock this
              reward!
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium mb-2">Recently Earned Badges</h3>
          <div className="space-y-3">
            {recentBadges.map((badge, index) => {
              const Icon = badge.icon;
              return (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-md border p-3"
                >
                  <div className="rounded-full bg-emerald-100 dark:bg-emerald-800 p-2">
                    <Icon className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{badge.name}</p>
                      <Badge
                        variant="outline"
                        className="bg-emerald-50 text-emerald-700 border-emerald-200"
                      >
                        Earned
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      <Calendar className="inline mr-1 h-3 w-3" />
                      {badge.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
