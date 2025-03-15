export interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderType: "volunteer" | "organization";
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
    type: "volunteer" | "organization";
    avatar?: string;
  }[];
  lastMessage?: {
    content: string;
    timestamp: Date;
    senderId: string;
  };
  unreadCount: number;
}
