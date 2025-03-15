import { MessageSquare } from "lucide-react";

interface EmptyChatProps {
  userType: "volunteer" | "organization";
}

export function EmptyChat({ userType }: EmptyChatProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center bg-gradient-to-b from-muted/10 to-transparent">
      <div className="bg-muted/30 p-6 rounded-full mb-4">
        <MessageSquare className="h-12 w-12 text-muted-foreground opacity-50" />
      </div>
      <h3 className="text-xl font-medium mb-2">No conversation selected</h3>
      <p className="text-muted-foreground max-w-md">
        {userType === "volunteer"
          ? "Select a conversation from the list or apply to volunteer at an Iftar event to start chatting with restaurants."
          : "Select a conversation from the list to chat with volunteers or respond to volunteer applications."}
      </p>
      <div className="mt-6 p-4 bg-muted/20 rounded-lg border border-dashed max-w-md">
        <h4 className="font-medium mb-2">
          {userType === "volunteer" ? "Volunteer Tips" : "Restaurant Tips"}
        </h4>
        <ul className="text-sm text-muted-foreground text-left space-y-2">
          {userType === "volunteer" ? (
            <>
              <li>• Be clear about your availability and skills</li>
              <li>• Ask questions about the tasks you'll be performing</li>
              <li>• Confirm your attendance a day before the event</li>
              <li>
                • Let restaurants know if you need to cancel as soon as possible
              </li>
            </>
          ) : (
            <>
              <li>• Respond to volunteer applications promptly</li>
              <li>• Provide clear instructions about tasks and timing</li>
              <li>• Send reminders to volunteers a day before the event</li>
              <li>• Thank volunteers for their service after the event</li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}
