import type { Message } from "@/features/chat/types";
import { CheckCheck } from "lucide-react";

interface MessageBubbleProps {
  message: Message;
  isCurrentUser: boolean;
}

// Helper function to format time without date-fns
function formatTime(timestamp: Date): string {
  let hours = timestamp.getHours() % 12;
  hours = hours === 0 ? 12 : hours; // Convert 0 to 12 for 12 AM
  const minutes = timestamp.getMinutes().toString().padStart(2, "0");
  const ampm = timestamp.getHours() >= 12 ? "PM" : "AM";
  return `${hours}:${minutes} ${ampm}`;
}

export function MessageBubble({ message, isCurrentUser }: MessageBubbleProps) {
  const bubbleColor = isCurrentUser
    ? message.senderType === "volunteer"
      ? "bg-blue-500 text-primary-foreground"
      : "bg-primary text-primary-foreground"
    : "bg-muted";

  return (
    <div className={`flex ${isCurrentUser ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[80%] rounded-lg p-3 ${bubbleColor}`}>
        <p className="text-sm">{message.content}</p>
        <div
          className={`flex items-center justify-end gap-1 mt-1 text-xs ${
            isCurrentUser
              ? message.senderType === "volunteer"
                ? "text-blue-500/90"
                : "text-primary/90"
              : "text-muted-foreground"
          }`}
        >
          <span>{formatTime(message.timestamp)}</span>
          {isCurrentUser && (
            <CheckCheck
              className={`h-3 w-3 ${message.read ? "opacity-100" : "opacity-50"}`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
