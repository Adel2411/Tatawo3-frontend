"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import type { Conversation } from "@/features/chat/types";
import { Search, Plus, MessageCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

// Custom function to replace date-fns formatDistanceToNow
function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = day * 365;

  if (diffInSeconds < 30) return "just now";
  if (diffInSeconds < minute) return "less than a minute ago";
  if (diffInSeconds < hour) {
    const minutes = Math.floor(diffInSeconds / minute);
    return `${minutes} ${minutes === 1 ? "minute" : "minutes"} ago`;
  }
  if (diffInSeconds < day) {
    const hours = Math.floor(diffInSeconds / hour);
    return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  }
  if (diffInSeconds < week) {
    const days = Math.floor(diffInSeconds / day);
    return `${days} ${days === 1 ? "day" : "days"} ago`;
  }
  if (diffInSeconds < month) {
    const weeks = Math.floor(diffInSeconds / week);
    return `${weeks} ${weeks === 1 ? "week" : "weeks"} ago`;
  }
  if (diffInSeconds < year) {
    const months = Math.floor(diffInSeconds / month);
    return `${months} ${months === 1 ? "month" : "months"} ago`;
  }

  const years = Math.floor(diffInSeconds / year);
  return `${years} ${years === 1 ? "year" : "years"} ago`;
}

interface ConversationListProps {
  conversations: Conversation[];
  selectedId?: string;
  onSelectConversationAction: (conversation: Conversation) => void; // Renamed to follow Server Action convention
  userType: "volunteer" | "organization";
  userId: string;
}

export function ConversationList({
  conversations,
  selectedId,
  onSelectConversationAction, // Renamed prop
  userType,
  userId,
}: ConversationListProps) {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter conversations based on search query
  const filteredConversations = conversations.filter((conversation) => {
    const otherParticipant = conversation.participants.find(
      (p) => p.id !== userId,
    );
    if (!otherParticipant) return false;

    return otherParticipant.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  return (
    <div className="flex h-full flex-col">
      {/* Rest of the component unchanged */}
      <div className="p-4 border-b">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-semibold">Messages</h2>
          {userType === "organization" && (
            <Button
              variant="ghost"
              size="sm"
              className="text-primary hover:text-primary/90 hover:bg-primary/5"
            >
              <Plus className="h-4 w-4 mr-1" />
              New
            </Button>
          )}
        </div>
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search conversations..."
            className="pl-8 transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((conversation) => {
            // Find the other participant (not the current user)
            const otherParticipant = conversation.participants.find(
              (p) => p.id !== userId,
            );

            if (!otherParticipant) return null;

            return (
              <div
                key={conversation.id}
                className={`flex items-center gap-3 p-4 cursor-pointer transition-colors hover:bg-muted ${
                  selectedId === conversation.id
                    ? "bg-primary/5 dark:bg-primary/10"
                    : ""
                } ${conversation.unreadCount > 0 ? "font-medium" : ""}`}
                onClick={() => onSelectConversationAction(conversation)} // Updated function call
              >
                <Avatar>
                  <AvatarImage
                    src={otherParticipant.avatar}
                    alt={otherParticipant.name}
                  />
                  <AvatarFallback
                    className={
                      otherParticipant.type === "volunteer"
                        ? "bg-blue-500/10 text-blue-500"
                        : "bg-primary/10 text-primary"
                    }
                  >
                    {otherParticipant.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium truncate">
                      {otherParticipant.name}
                    </h3>
                    {conversation.lastMessage && (
                      <span className="text-xs text-muted-foreground">
                        {formatRelativeTime(conversation.lastMessage.timestamp)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1">
                    <span
                      className={`text-xs ${otherParticipant.type === "volunteer" ? "text-blue-500" : "text-primary"}`}
                    >
                      {otherParticipant.type === "volunteer"
                        ? "Volunteer"
                        : "Restaurant"}
                    </span>
                  </div>
                  {conversation.lastMessage && (
                    <p className="text-xs text-muted-foreground truncate mt-1">
                      {conversation.lastMessage.senderId === userId
                        ? "You: "
                        : ""}
                      {conversation.lastMessage.content}
                    </p>
                  )}
                </div>
                {conversation.unreadCount > 0 && (
                  <div className="h-5 w-5 rounded-full bg-primary text-white flex items-center justify-center text-xs">
                    {conversation.unreadCount}
                  </div>
                )}
              </div>
            );
          })
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-4 text-center">
            <MessageCircle className="h-12 w-12 text-muted-foreground opacity-20 mb-2" />
            <p className="text-sm text-muted-foreground">
              {searchQuery
                ? "No conversations match your search"
                : userType === "volunteer"
                  ? "No conversations yet. Apply to volunteer to start chatting with restaurants."
                  : "No conversations yet. Reach out to volunteers to start chatting."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
