"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Home,
  MapPin,
  MessageSquare,
  Star,
  Users,
} from "lucide-react";

interface DashboardNavProps {
  mode: "volunteer" | "organization";
}

export function ProtectedNav({ mode }: DashboardNavProps) {
  const pathname = usePathname();

  const volunteerLinks = [
    { href: "/volunteer/overview", label: "Overview", icon: Home },
    { href: "/volunteer/tasks", label: "My Tasks", icon: Calendar },
    {
      href: "/volunteer/opportunities",
      label: "Nearby Opportunities",
      icon: MapPin,
    },
    {
      href: "/volunteer/rewards",
      label: "Rewards & Badges",
      icon: Star,
    },
    { href: "/volunteer/messages", label: "Messages", icon: MessageSquare },
  ];

  const restaurantLinks = [
    { href: "/organization/overview", label: "Overview", icon: Home },
    {
      href: "/organization/events",
      label: "Manage Events",
      icon: Calendar,
    },
    {
      href: "/organization/volunteers",
      label: "Volunteers",
      icon: Users,
    },
    { href: "/organization/analytics", label: "Analytics", icon: Star },
    { href: "/organization/messages", label: "Messages", icon: MessageSquare },
  ];

  const links = mode === "volunteer" ? volunteerLinks : restaurantLinks;

  return (
    <nav className="space-y-1">
      {links.map((link) => {
        const isActive = pathname === link.href;
        const Icon = link.icon;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <Icon
              className={`h-4 w-4 ${isActive ? "text-primary/90 dark:text-primary/80" : ""}`}
            />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
