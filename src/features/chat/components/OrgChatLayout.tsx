"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import type { Conversation } from "@/features/chat/types";
import { ConversationList } from "./ConversationList";
import { EmptyChat } from "./EmptyChat";
import { ChatWindow } from "./ChatWindow";

// Mock data for organization conversations
const mockOrgConversations: Conversation[] = [
  {
    id: "1",
    participants: [
      {
        id: "o1",
        name: "Islamic Community Center",
        type: "organization",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v1",
        name: "Ahmed Hassan",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "I can bring 3 dessert platters for tomorrow's iftar event",
      timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      senderId: "v1",
    },
    unreadCount: 1,
  },
  {
    id: "2",
    participants: [
      {
        id: "o1",
        name: "Islamic Community Center",
        type: "organization",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v2",
        name: "Fatima Ali",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content: "Can you confirm the time for setup crew on Friday's iftar?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      senderId: "o1",
    },
    unreadCount: 2,
  },
  {
    id: "3",
    participants: [
      {
        id: "o1",
        name: "Islamic Community Center",
        type: "organization",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v3",
        name: "Yusuf Rahman",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content:
        "I've coordinated with the catering service for next week's iftar",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 1 day ago
      senderId: "v3",
    },
    unreadCount: 0,
  },
];

export function OrganizationChatLayout() {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [conversations, setConversations] =
    useState<Conversation[]>(mockOrgConversations);
  const searchParams = useSearchParams();
  const userType = "restaurant";
  const userId = "o1";

  // Check if there's a volunteer ID in the URL query params (for direct messaging)
  useEffect(() => {
    const volunteerId = searchParams?.get("volunteer");
    if (volunteerId) {
      // Find the conversation with this volunteer
      const conversation = mockOrgConversations.find((conv) =>
        conv.participants.some((p) => p.id === `v${volunteerId}`),
      );

      if (conversation) {
        setSelectedConversation(conversation);
      }
    }
  }, [searchParams]);

  const handleSelectConversation = (conversation: Conversation) => {
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

    const newMessage = {
      content,
      timestamp: new Date(),
      senderId: userId,
    };

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
