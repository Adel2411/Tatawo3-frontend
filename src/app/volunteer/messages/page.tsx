"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Plus, MessageSquare } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Message, Conversation } from "@/features/chat/types";
import { ChatLayout } from "@/features/chat/components/ChatLayout";
import { ConversationList } from "@/features/chat/components/ConversationList";
import { ChatWindow } from "@/features/chat/components/ChatWindow";
import { EmptyChat } from "@/features/chat/components/EmptyChat";

// Define this since it's missing from imports
type UserRole = "volunteer" | "restaurant";

export default function MessagesPage() {
  const pathname = usePathname();
  const isRestaurantMode = pathname.includes("/dashboard/restaurant");
  const isVolunteerMode = pathname.includes("/dashboard/volunteer");

  // Convert numeric IDs to strings and fix participant type structure
  const [conversations, setConversations] = useState<Conversation[]>([
    {
      id: "1",
      participants: [
        {
          id: "1",
          name: "Ahmed Khan",
          avatar: "/placeholder.svg?height=40&width=40",
          type: "volunteer" as UserRole,
        },
        {
          id: "2",
          name: "Al-Noor Restaurant",
          avatar: "/placeholder.svg?height=40&width=40",
          type: "restaurant" as UserRole,
        },
      ],
      lastMessage: {
        senderId: "1",
        content: "I'm available to volunteer this Friday for the Iftar event.",
        timestamp: new Date(2025, 2, 14, 10, 30),
      },
      unreadCount: 0,
    },
    {
      id: "2",
      participants: [
        {
          id: "1",
          name: "Ahmed Khan",
          avatar: "/placeholder.svg?height=40&width=40",
          type: "volunteer" as UserRole,
        },
        {
          id: "3",
          name: "Islamic Center",
          avatar: "/placeholder.svg?height=40&width=40",
          type: "restaurant" as UserRole,
        },
      ],
      lastMessage: {
        senderId: "3",
        content:
          "Thank you for volunteering last week. Would you be available this Saturday?",
        timestamp: new Date(2025, 2, 13, 15, 45),
      },
      unreadCount: 0,
    },
    {
      id: "3",
      participants: [
        {
          id: "1",
          name: "Ahmed Khan",
          avatar: "/placeholder.svg?height=40&width=40",
          type: "volunteer" as UserRole,
        },
        {
          id: "4",
          name: "Community Center",
          avatar: "/placeholder.svg?height=40&width=40",
          type: "restaurant" as UserRole,
        },
      ],
      lastMessage: {
        senderId: "4",
        content:
          "We have a new volunteer opportunity for next week's special Iftar event.",
        timestamp: new Date(2025, 2, 12, 9, 15),
      },
      unreadCount: 1,
    },
  ]);

  const [selectedConversation, setSelectedConversation] =
    useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);

  // Load messages when a conversation is selected
  const handleSelectConversation = (conversation: Conversation) => {
    setSelectedConversation(conversation);

    // Mock messages for the selected conversation
    const mockMessages: Message[] = [
      {
        id: "1",
        senderId: isRestaurantMode
          ? conversation.participants[0].id
          : conversation.participants[1].id,
        content: isRestaurantMode
          ? "Hello, I'm interested in volunteering for your Iftar event this weekend."
          : "Thank you for your interest in volunteering with us!",
        timestamp: new Date(2025, 2, 10, 14, 30),
      },
      {
        id: "2",
        senderId: isRestaurantMode
          ? conversation.participants[1].id
          : conversation.participants[0].id,
        content: isRestaurantMode
          ? "Thank you for your interest! We'd love to have you join us. What days are you available?"
          : "I'm available on Friday and Saturday evenings. What roles do you need help with?",
        timestamp: new Date(2025, 2, 10, 14, 35),
      },
      // Continue with the rest of your mock messages, converting them similarly
      // I'm showing just the first 2 for brevity
    ];

    setMessages(mockMessages);

    // Mark conversation as read
    if (conversation.unreadCount > 0) {
      const updatedConversations = conversations.map((conv) =>
        conv.id === conversation.id ? { ...conv, unreadCount: 0 } : conv,
      );
      setConversations(updatedConversations);
    }
  };

  // Send a new message
  const handleSendMessage = (text: string) => {
    if (!selectedConversation) return;

    const newMessage: Message = {
      id: `${Math.random().toString(36).substr(2, 9)}`,
      senderId: isRestaurantMode
        ? selectedConversation.participants[1].id
        : selectedConversation.participants[0].id,
      content: text,
      timestamp: new Date(),
    };

    setMessages([...messages, newMessage]);

    // Update last message in conversation list
    const updatedConversations = conversations.map((conv) =>
      conv.id === selectedConversation.id
        ? {
            ...conv,
            lastMessage: {
              id: newMessage.id,
              senderId: newMessage.senderId,
              content: newMessage.content,
              timestamp: newMessage.timestamp,
            },
          }
        : conv,
    );

    setConversations(updatedConversations);
  };

  // Get the current user based on mode
  const getCurrentUser = () => {
    if (!selectedConversation) return null;

    return isRestaurantMode
      ? selectedConversation.participants.find((p) => p.type === "restaurant")
      : selectedConversation.participants.find((p) => p.type === "volunteer");
  };

  // Get the other user based on mode
  const getOtherUser = () => {
    if (!selectedConversation) return null;

    return isRestaurantMode
      ? selectedConversation.participants.find((p) => p.type === "volunteer")
      : selectedConversation.participants.find((p) => p.type === "restaurant");
  };

  // Keep your quick replies as they were

  return (
    <ChatLayout>
      <div className="flex h-[calc(100vh-10rem)] overflow-hidden rounded-md border">
        {/* Conversation List */}
        <div className="w-full md:w-80 border-r flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">Messages</h2>
              <Link href="/dashboard/messages/new">
                <Button variant="ghost" size="icon">
                  <Plus className="h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search messages..."
                className="pl-8 transition-all focus:ring-2 focus:ring-primary/50"
              />
            </div>
          </div>

          <ConversationList
            conversations={conversations}
            selectedId={selectedConversation?.id}
            onSelectConversation={handleSelectConversation}
            userRole={isRestaurantMode ? "restaurant" : "volunteer"}
          />
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col">
          {selectedConversation ? (
            <ChatWindow
              conversation={selectedConversation}
              messageList={messages}
              currentUser={getCurrentUser()}
              otherUser={getOtherUser()}
              onSend={handleSendMessage}
              quickReplyOptions={
                isRestaurantMode
                  ? restaurantQuickReplies
                  : volunteerQuickReplies
              }
            />
          ) : (
            <EmptyChat
              emptyTitle="Select a conversation"
              emptyDescription="Choose a conversation from the list or start a new one."
              emptyIcon={
                <MessageSquare className="h-12 w-12 text-muted-foreground opacity-20" />
              }
              emptyAction={
                <Link href="/dashboard/messages/new">
                  <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="mr-2 h-4 w-4" />
                    New Message
                  </Button>
                </Link>
              }
            />
          )}
        </div>
      </div>
    </ChatLayout>
  );
}
