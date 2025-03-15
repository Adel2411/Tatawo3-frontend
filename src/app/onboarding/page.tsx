"use client";
// import OnboardingForm from "@/features/onboarding/components/OnboardingForm";
import { redirect } from "next/navigation";

export default function OnboardingPage() {
  // Check if user is authenticated, redirect to login if not

  const handleSkip = () => {
    redirect("/volunteer/overview");
  };

  return (
    <div className="flex flex-col items-center gap-10">
      <h1 className="text-3xl font-semibold">Complete Your Profile</h1>
      <p className="text-muted-foreground">
        These steps are optional but recommended
      </p>
      {/* <OnboardingForm /> */}
      <button
        className="text-sm text-muted-foreground hover:underline"
        onClick={handleSkip}
      >
        Skip for now
      </button>
    </div>
  );
}
