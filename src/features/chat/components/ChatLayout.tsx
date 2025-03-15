"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import type { Conversation } from "@/features/chat/types";
import type { ReactNode } from "react";
import { ConversationList } from "./ConversationList";
import { EmptyChat } from "./EmptyChat";
import { ChatWindow } from "./ChatWindow";

interface ChatLayoutProps {
  children: ReactNode;
}

// Mock data for volunteer conversations
const mockVolunteerConversations: Conversation[] = [
  {
    id: "1",
    participants: [
      {
        id: "r1",
        name: "Al-Noor Mosque",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v1",
        name: "John Doe",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "Thank you for applying to volunteer with us!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      senderId: "r1",
    },
    unreadCount: 1,
  },
  {
    id: "2",
    participants: [
      {
        id: "r2",
        name: "Islamic Center",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v1",
        name: "John Doe",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "Can you help with food preparation this Friday?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      senderId: "r2",
    },
    unreadCount: 0,
  },
  {
    id: "3",
    participants: [
      {
        id: "r3",
        name: "Community Center",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v1",
        name: "John Doe",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "Your application has been approved!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      senderId: "r3",
    },
    unreadCount: 0,
  },
];

// Mock data for restaurant conversations
const mockRestaurantConversations: Conversation[] = [
  {
    id: "4",
    participants: [
      {
        id: "r1",
        name: "Al-Noor Mosque",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v2",
        name: "Sarah Johnson",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "I'm interested in volunteering this weekend",
      timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      senderId: "v2",
    },
    unreadCount: 1,
  },
  {
    id: "5",
    participants: [
      {
        id: "r1",
        name: "Al-Noor Mosque",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v3",
        name: "Ahmed Khan",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "Thank you for the opportunity to serve",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
      senderId: "v3",
    },
    unreadCount: 0,
  },
  {
    id: "6",
    participants: [
      {
        id: "r1",
        name: "Al-Noor Mosque",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v4",
        name: "Fatima Ali",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "Will there be any training provided?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      senderId: "v4",
    },
    unreadCount: 0,
  },
  {
    id: "7",
    participants: [
      {
        id: "r1",
        name: "Al-Noor Mosque",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v5",
        name: "Omar Ali",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "I'd like to apply for the food server position",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 8), // 8 hours ago
      senderId: "v5",
    },
    unreadCount: 0,
  },
  {
    id: "8",
    participants: [
      {
        id: "r1",
        name: "Al-Noor Mosque",
        type: "restaurant",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v6",
        name: "Aisha Khan",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "Is there still a need for cleanup volunteers?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 12), // 12 hours ago
      senderId: "v6",
    },
    unreadCount: 0,
  },
];

export function ChatLayout({ children }: ChatLayoutProps) {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isRestaurantMode = pathname.includes("/dashboard/restaurant");
  const isVolunteerMode = pathname.includes("/dashboard/volunteer");

  // Determine if user is volunteer or restaurant based on URL
  const isVolunteer =
    pathname.includes("/volunteer") || !pathname.includes("/restaurant");
  const userType = isVolunteer ? "volunteer" : "restaurant";
  const userId = isVolunteer ? "v1" : "r1";

  // Load appropriate conversations based on user type
  useEffect(() => {
    setConversations(
      isVolunteer ? mockVolunteerConversations : mockRestaurantConversations,
    );
  }, [isVolunteer]);

  // Check if there's a volunteer ID in the URL query params (for direct messaging)
  useEffect(() => {
    const volunteerId = searchParams?.get("volunteer");
    if (volunteerId && userType === "restaurant") {
      // Find the conversation with this volunteer
      const conversation = mockRestaurantConversations.find((conv) =>
        conv.participants.some((p) => p.id === `v${volunteerId}`),
      );

      if (conversation) {
        setSelectedConversation(conversation);
      }
    }
  }, [searchParams, userType]);

  const handleSelectConversation = (conversation: Conversation) => {
    // Mark conversation as read when selected
    if (conversation.unreadCount > 0) {
      setConversations((prevConversations) =>
        prevConversations.map((conv) =>
          conv.id === conversation.id ? { ...conv, unreadCount: 0 } : conv,
        ),
      );
    }
    setSelectedConversation(conversation);
  };

  const handleSendMessage = (content: string) => {
    if (!selectedConversation) return;

    // Create a new message
    const newMessage = {
      content,
      timestamp: new Date(),
      senderId: userId, // Current user ID
    };

    // Update the conversation with the new message
    setConversations((prevConversations) =>
      prevConversations.map((conv) =>
        conv.id === selectedConversation.id
          ? {
              ...conv,
              lastMessage: newMessage,
              unreadCount: 0,
            }
          : conv,
      ),
    );

    // Update the selected conversation
    setSelectedConversation((prev) =>
      prev ? { ...prev, lastMessage: newMessage } : null,
    );
  };

  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-14rem)] overflow-hidden rounded-lg border bg-background">
      <div className="w-full md:w-1/3 border-b md:border-b-0 md:border-r">
        <ConversationList
          conversations={conversations}
          selectedId={selectedConversation?.id}
          onSelectConversation={handleSelectConversation}
          userType={userType}
          userId={userId}
        />
      </div>
      <div className="w-full md:w-2/3 flex-1">
        {selectedConversation ? (
          <ChatWindow
            conversation={selectedConversation}
            onSendMessage={handleSendMessage}
            userType={userType}
            userId={userId}
          />
        ) : (
          <EmptyChat userType={userType} />
        )}
      </div>
    </div>
  );
}
