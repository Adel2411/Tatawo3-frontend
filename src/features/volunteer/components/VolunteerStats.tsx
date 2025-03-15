import type { ReactNode } from "react";

interface VolunteerStatsCardProps {
  title: string;
  value: number;
  icon: ReactNode;
}

export function VolunteerStatsCard({
  title,
  value,
  icon,
}: VolunteerStatsCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-lg border p-4 bg-card shadow-soft transition-all hover:shadow-medium">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/20">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
}
