"use client";

import { type ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Bell, LogOut, MessageSquare, Settings, User } from "lucide-react";
import { ProtectedNav } from "./ProtectedNav";
import Image from "next/image";
import { showPromiseToast } from "@/lib/toastHandler";
import { deleteToken } from "@/features/auth/api";

interface BaseLayoutProps {
  children: ReactNode;
  title: string;
  mode: "volunteer" | "organization";
}

export default function ProtectedLayout({
  children,
  title,
  mode,
}: BaseLayoutProps) {
  const router = useRouter();

  const handleLogout = async () => {
    showPromiseToast(
      (async () => {
        await deleteToken();

        // On success
        router.push("/");
      })(),
      "Logging out",
    );
  };

  return (
    <SidebarProvider>
      <div className="w-full flex min-h-screen">
        <Sidebar className="border-r">
          <SidebarHeader className="flex flex-col gap-2 p-10 mb-8">
            <div className="flex items-center justify-center">
              <Image src="/Logo.svg" alt="Logo" width={100} height={100} />
            </div>
          </SidebarHeader>
          <SidebarContent className="px-4 py-2">
            <ProtectedNav mode={mode} />
          </SidebarContent>
          <SidebarFooter className="border-t px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Avatar>
                  <AvatarImage
                    src="/placeholder.svg?height=32&width=32"
                    alt="User"
                  />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-muted-foreground">
                    john@example.com
                  </p>
                </div>
              </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => router.push("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => router.push("/settings")}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Logout</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </SidebarFooter>
        </Sidebar>
        <div className="flex-1">
          <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
            <div className="flex flex-1 items-center gap-2">
              <h1 className="text-2xl font-semibold">{title}</h1>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="h-5 w-5" />
                <span className="sr-only">Notifications</span>
                <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
              </Button>
              <Button variant="ghost" size="icon">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Messages</span>
              </Button>
            </div>
          </header>
          <main className="flex-1 p-6 animate-fade-in">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
