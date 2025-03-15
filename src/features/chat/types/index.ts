export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: "volunteer" | "restaurant";
  recipientId: string;
  content: string;
  timestamp: Date;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: {
    id: string;
    name: string;
    type: "volunteer" | "restaurant";
    avatar?: string;
  }[];
  lastMessage?: {
    content: string;
    timestamp: Date;
    senderId: string;
  };
  unreadCount: number;
}
