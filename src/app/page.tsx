import * as motion from "motion/react-client";
import { Button } from "@/components/ui/button";
import { LogIn } from "lucide-react";
import Link from "next/link";
import { LetterPullUp } from "@/components/StaggeredLetterPullUp";
import { BlurIn } from "@/components/BlurIn";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center pt-20 text-center">
      <LetterPullUp words="DCF Volonteer App" />
      <BlurIn
        text="
      A volunteer management platform for the DCF hackathon. Streamlines 
      coordination, scheduling, and communication for event organizers and 
      participants throughout the hackathon experience.
"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        whileTap={{ scale: 0.95 }}
      >
        <Button asChild>
          <Link href="/login">
            Get Started
            <LogIn className="h-3 w-3" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );
}
