"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

export function UserModeToggle() {
  const pathname = usePathname();
  const isVolunteerMode = pathname.includes("/dashboard/volunteer");
  const isGuestMode = pathname.includes("/dashboard/guest");
  const isRestaurantMode = pathname.includes("/dashboard/restaurant");

  return (
    <div className="flex items-center border rounded-md">
      <Link href="/dashboard/volunteer">
        <Button
          variant={isVolunteerMode ? "default" : "ghost"}
          size="sm"
          className={isVolunteerMode ? "bg-primary" : ""}
        >
          Volunteer
        </Button>
      </Link>
      <Link href="/dashboard/guest">
        <Button
          variant={isGuestMode ? "default" : "ghost"}
          size="sm"
          className={isGuestMode ? "bg-primary" : ""}
        >
          Guest
        </Button>
      </Link>
      {isRestaurantMode && (
        <Link href="/dashboard/restaurant">
          <Button variant="default" size="sm" className="bg-primary">
            Restaurant
          </Button>
        </Link>
      )}
    </div>
  );
}
