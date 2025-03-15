"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import type { Conversation, Message } from "@/features/chat/types";
import {
  Send,
  Phone,
  Video,
  MoreVertical,
  Calendar,
  Clock,
  MapPin,
  CheckCircle,
  XCircle,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card } from "@/components/ui/card";
import { MessageBubble } from "./MessageBubble";
import { Textarea } from "@/components/ui/textarea";

// Updated senderType to include "restaurant"
const mockMessages: Record<string, Message[]> = {
  "1": [
    {
      id: "m1",
      senderId: "r1",
      senderName: "Al-Noor Mosque",
      senderType: "organization",
      recipientId: "v1",
      content:
        "Thank you for applying to volunteer with us for our Iftar event this Friday!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60), // 1 hour ago
      read: true,
    },
    {
      id: "m2",
      senderId: "v1",
      senderName: "John Doe",
      senderType: "volunteer",
      recipientId: "r1",
      content: "I'm excited to help out! What time should I arrive?",
      timestamp: new Date(Date.now() - 1000 * 60 * 45), // 45 minutes ago
      read: true,
    },
    {
      id: "m3",
      senderId: "r1",
      senderName: "Al-Noor Mosque",
      senderType: "organization", // Changed from "restaurant" to "organization"
      recipientId: "v1",
      content:
        "We'd like volunteers to arrive at 4:30 PM to help with setup. The event starts at 6:00 PM.",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: false,
    },
  ],
  "2": [
    {
      id: "m4",
      senderId: "r2",
      senderName: "Islamic Center",
      senderType: "organization", // Changed from "restaurant" to "organization"
      recipientId: "v1",
      content:
        "Hello John, we noticed you've volunteered with us before. Would you be available to help with food preparation this Friday?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
      read: true,
    },
    {
      id: "m5",
      senderId: "v1",
      senderName: "John Doe",
      senderType: "volunteer",
      recipientId: "r2",
      content: "I'd be happy to help! What time do you need me?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2), // 2 hours ago
      read: true,
    },
  ],
  "3": [
    {
      id: "m6",
      senderId: "v1",
      senderName: "John Doe",
      senderType: "volunteer",
      recipientId: "r3",
      content:
        "Hello, I'd like to volunteer for your Iftar event this weekend.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 25), // 25 hours ago
      read: true,
    },
    {
      id: "m7",
      senderId: "r3",
      senderName: "Community Center",
      senderType: "organization", // Changed from "restaurant" to "organization"
      recipientId: "v1",
      content:
        "Thank you for your interest! We'd love to have you. Your application has been approved!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24), // 24 hours ago
      read: true,
    },
  ],
  "4": [
    {
      id: "m8",
      senderId: "v2",
      senderName: "Sarah Johnson",
      senderType: "volunteer",
      recipientId: "r1",
      content:
        "Hello, I saw your posting for volunteers needed this weekend. I'm interested in helping out!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30), // 30 minutes ago
      read: true,
    },
    {
      id: "m9",
      senderId: "r1",
      senderName: "Al-Noor Mosque",
      senderType: "organization", // Changed from "restaurant" to "organization"
      recipientId: "v2",
      content:
        "Hi Sarah, thank you for your interest! We'd love to have you join us. What kind of tasks are you comfortable with?",
      timestamp: new Date(Date.now() - 1000 * 60 * 20), // 20 minutes ago
      read: true,
    },
    {
      id: "m10",
      senderId: "v2",
      senderName: "Sarah Johnson",
      senderType: "volunteer",
      recipientId: "r1",
      content:
        "I'm interested in volunteering this weekend. I'm comfortable with food preparation, serving, and cleanup.",
      timestamp: new Date(Date.now() - 1000 * 60 * 15), // 15 minutes ago
      read: false,
    },
  ],
  "5": [
    {
      id: "m11",
      senderId: "v3",
      senderName: "Ahmed Khan",
      senderType: "volunteer",
      recipientId: "r1",
      content:
        "Hello, I'm Ahmed. I've volunteered at several Iftar events before and would like to help at your mosque.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      read: true,
    },
    {
      id: "m12",
      senderId: "r1",
      senderName: "Al-Noor Mosque",
      senderType: "organization", // Changed from "restaurant" to "organization"
      recipientId: "v3",
      content:
        "Hi Ahmed, we'd be happy to have you! We need help with serving food from 6:30 PM to 8:30 PM this Friday.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 4), // 4 hours ago
      read: true,
    },
    {
      id: "m13",
      senderId: "v3",
      senderName: "Ahmed Khan",
      senderType: "volunteer",
      recipientId: "r1",
      content:
        "That works perfectly for me. Thank you for the opportunity to serve.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 3), // 3 hours ago
      read: true,
    },
  ],
  "6": [
    {
      id: "m14",
      senderId: "v4",
      senderName: "Fatima Ali",
      senderType: "volunteer",
      recipientId: "r1",
      content:
        "Hello, I'm interested in volunteering for your Iftar event. I have experience in food preparation.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 6), // 6 hours ago
      read: true,
    },
    {
      id: "m15",
      senderId: "r1",
      senderName: "Al-Noor Mosque",
      senderType: "organization", // Changed from "restaurant" to "organization"
      recipientId: "v4",
      content:
        "Hi Fatima, thank you for reaching out! We'd love to have you help with food preparation. The shift is from 3:00 PM to 6:00 PM.",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5.5), // 5.5 hours ago
      read: true,
    },
    {
      id: "m16",
      senderId: "v4",
      senderName: "Fatima Ali",
      senderType: "volunteer",
      recipientId: "r1",
      content: "That sounds great. Will there be any training provided?",
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 5), // 5 hours ago
      read: true,
    },
  ],
};

interface ChatWindowProps {
  conversation: Conversation;
  onSendMessageAction: (content: string) => void; // Renamed to indicate it's a Server Action
  userType: "volunteer" | "organization"; // Changed from "restaurant" to "organization"
  userId: string;
}

export function ChatWindow({
  conversation,
  onSendMessageAction,
  userType,
  userId,
}: ChatWindowProps) {
  const [messageText, setMessageText] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [showQuickResponses, setShowQuickResponses] = useState(false);

  // Find the other participant (not the current user)
  const otherParticipant = conversation.participants.find(
    (p) => p.id !== userId,
  );

  // Load messages for the selected conversation
  useEffect(() => {
    setMessages(mockMessages[conversation.id] || []);
  }, [conversation.id]);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;

    // Create a new message
    const newMessage: Message = {
      id: `new-${Date.now()}`,
      senderId: userId,
      senderName: userType === "volunteer" ? "John Doe" : "Al-Noor Mosque",
      senderType: userType,
      recipientId: otherParticipant?.id || "",
      content: messageText,
      timestamp: new Date(),
      read: false,
    };

    // Add message to the conversation
    setMessages((prev) => [...prev, newMessage]);

    // Call the parent handler
    onSendMessageAction(messageText);

    // Clear the input
    setMessageText("");
    setShowQuickResponses(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses =
    userType === "volunteer"
      ? [
          "I'm interested in volunteering for this event.",
          "What time should I arrive?",
          "What tasks will I be responsible for?",
          "Thank you for the opportunity!",
        ]
      : [
          "Thank you for your interest in volunteering!",
          "We'd love to have you join our team.",
          "The event will take place from 6:00 PM to 9:00 PM.",
          "Please arrive 30 minutes before your shift starts.",
        ];

  const handleQuickResponse = (response: string) => {
    setMessageText(response);
    setShowQuickResponses(false);
  };

  if (!otherParticipant) return null;

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b bg-muted/20">
        <div className="flex items-center gap-3">
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
          <div>
            <h3 className="font-medium">{otherParticipant.name}</h3>
            <p
              className={`text-xs ${otherParticipant.type === "volunteer" ? "text-blue-500" : "text-primary"}`}
            >
              {otherParticipant.type === "organization"
                ? "Organization"
                : "Volunteer"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-5 w-5" />
            <span className="sr-only">Call</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-muted-foreground hover:text-foreground"
          >
            <Video className="h-5 w-5" />
            <span className="sr-only">Video call</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full text-muted-foreground hover:text-foreground"
              >
                <MoreVertical className="h-5 w-5" />
                <span className="sr-only">More options</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>View profile</DropdownMenuItem>
              <DropdownMenuItem>Block user</DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                Report
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-muted/10 to-transparent">
        {userType === "organization" &&
          otherParticipant.type === "volunteer" && (
            <Card className="p-3 bg-blue-500/5 dark:bg-blue-500/10 border-blue-500/20">
              <div className="flex items-start gap-3">
                <div className="bg-blue-500/10 dark:bg-blue-500/20 p-2 rounded-full">
                  <Calendar className="h-5 w-5 text-blue-500 dark:text-blue-400" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Volunteer Application</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    {otherParticipant.name} has applied to volunteer at your
                    Iftar event.
                  </p>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 px-2 text-xs"
                    >
                      <XCircle className="h-3.5 w-3.5 mr-1 text-destructive" />
                      Decline
                    </Button>
                    <Button
                      size="sm"
                      className="h-7 px-2 text-xs bg-primary hover:bg-primary/90"
                    >
                      <CheckCircle className="h-3.5 w-3.5 mr-1" />
                      Approve
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

        {userType === "volunteer" &&
          otherParticipant.type === "organization" && (
            <Card className="p-3 bg-primary/5 dark:bg-primary/10 border-primary/20">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 dark:bg-primary/20 p-2 rounded-full">
                  <MapPin className="h-5 w-5 text-primary dark:text-primary/90" />
                </div>
                <div className="flex-1">
                  <h4 className="text-sm font-medium">Volunteer Opportunity</h4>
                  <div className="text-xs text-muted-foreground mt-1 space-y-1">
                    <div className="flex items-center">
                      <Calendar className="h-3.5 w-3.5 mr-1 text-primary" />
                      <span>Friday, March 15, 2025</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1 text-primary" />
                      <span>4:30 PM - 9:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-3.5 w-3.5 mr-1 text-primary" />
                      <span>{otherParticipant.name}, 123 Main St</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <Button
                      size="sm"
                      className="h-7 px-2 text-xs bg-primary hover:bg-primary/90"
                    >
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          )}

        {messages.map((message) => (
          <MessageBubble
            key={message.id}
            message={message}
            isCurrentUser={message.senderId === userId}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="p-4 border-t bg-background">
        {showQuickResponses && (
          <div className="mb-3 flex flex-wrap gap-2">
            {quickResponses.map((response, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs h-7 bg-muted/50 hover:bg-muted"
                onClick={() => handleQuickResponse(response)}
              >
                {response}
              </Button>
            ))}
          </div>
        )}
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="icon"
            className="flex-shrink-0"
            onClick={() => setShowQuickResponses(!showQuickResponses)}
          >
            <span className="text-lg font-semibold">⚡</span>
            <span className="sr-only">Quick responses</span>
          </Button>
          <Textarea
            className="flex-1 min-h-[80px] text-sm disabled:cursor-not-allowed disabled:opacity-50 resize-none"
            placeholder="Type your message..."
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button
            className="self-end bg-primary hover:bg-primary/90"
            onClick={handleSendMessage}
            disabled={!messageText.trim()}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
