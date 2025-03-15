import { OrganizationChatLayout } from "@/features/chat/components/OrgChatLayout";

// Define this since it's missing from imports
export type UserRole = "volunteer" | "organization";

export default function MessagesPage() {
  return <OrganizationChatLayout />;
}
