"use client";

import { useState } from "react";
import type { Conversation } from "@/features/chat/types";
import { ConversationList } from "./ConversationList";
import { EmptyChat } from "./EmptyChat";
import { ChatWindow } from "./ChatWindow";

// Mock data for volunteer conversations
const mockVolunteerConversations: Conversation[] = [
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
        name: "Sami Rahman",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content:
        "We need 5 more volunteers for food serving at Thursday's iftar. Are you available?",
      timestamp: new Date(Date.now() - 1000 * 60 * 25), // 25 minutes ago
      senderId: "o1",
    },
    unreadCount: 2,
  },
  {
    id: "2",
    participants: [
      {
        id: "o2",
        name: "Al-Noor Mosque",
        type: "organization",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v1",
        name: "Sami Rahman",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content:
        "Thank you for helping with setup last night. Can you join us again for the weekend iftar?",
      timestamp: new Date(Date.now() - 1000 * 60 * 90), // 1.5 hours ago
      senderId: "o2",
    },
    unreadCount: 1,
  },
  {
    id: "3",
    participants: [
      {
        id: "o3",
        name: "Muslim Student Association",
        type: "organization",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      {
        id: "v1",
        name: "Sami Rahman",
        type: "volunteer",
        avatar: "/placeholder.svg?height=40&width=40",
      },
    ],
    lastMessage: {
      content:
        "I'll bring the drinks and paper goods for tomorrow's campus iftar event",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      senderId: "v1",
    },
    unreadCount: 0,
  },
];

export function VolunteerChatLayout() {
  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [conversations, setConversations] = useState<Conversation[]>(
    mockVolunteerConversations,
  );
  const userType = "volunteer";
  const userId = "v1";

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
          onSelectConversationAction={handleSelectConversation}
          userType={userType}
          userId={userId}
        />
      </div>
      <div className="w-full md:w-2/3 flex-1">
        {selectedConversation ? (
          <ChatWindow
            conversation={selectedConversation}
            onSendMessageAction={handleSendMessage}
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
