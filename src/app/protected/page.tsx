"use client";

import { Button } from "@/components/ui/button";
import { deleteToken } from "@/features/auth/api";
import { showPromiseToast } from "@/lib/toastHandler";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { LetterPullUp } from "@/components/StaggeredLetterPullUp";
import { BlurIn } from "@/components/BlurIn";

export default function ProtectedPage() {
  const router = useRouter();

  const handleLogOut = async () => {
    showPromiseToast(
      (async () => {
        await deleteToken();

        // On success
        router.push("/");
      })(),
      "Logging out",
    );
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-20 text-center">
      <LetterPullUp words="DCF Volonteer Protected Page" />
      <BlurIn
        text="
          A volunteer management platform for the DCF hackathon. Streamlines 
          coordination, scheduling, and communication for event organizers and 
          participants throughout the hackathon experience.
          You are now in a protected area that requires authentication.
"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileTap={{ scale: 0.95 }}
      >
        <Button variant="destructive" onClick={handleLogOut}>
          Logout
          <LogOut className="h-3 w-3" />
        </Button>
      </motion.div>
    </div>
  );
}
