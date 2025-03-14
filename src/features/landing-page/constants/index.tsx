import { Calendar, Users, Utensils } from "lucide-react";
import { FeatureItem, Step, Testimonial } from "../types";

export const featureItems: FeatureItem[] = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Volunteer",
    description:
      "Sign up for tasks, help at local restaurants, and earn rewards for your contributions.",
  },
  {
    icon: <Utensils className="h-10 w-10 text-primary" />,
    title: "Find Iftar",
    description:
      "Discover nearby free Iftar meals with real-time updates on availability and menu options.",
  },
  {
    icon: <Calendar className="h-10 w-10 text-primary" />,
    title: "Host Events",
    description:
      "Restaurant owners can post events, manage volunteers, and track attendance.",
  },
];

export const steps: Step[] = [
  {
    number: 1,
    title: "Create a single account",
    description: "Register once to access all features of the platform.",
  },
  {
    number: 2,
    title: "Toggle between modes",
    description:
      "Switch between volunteer and guest modes with a single click.",
  },
  {
    number: 3,
    title: "Enjoy personalized features",
    description:
      "Access dedicated dashboards for each mode with relevant information.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "As a volunteer, I've been able to give back to my community during Ramadan while making new friends.",
    author: "Ahmed K.",
    role: "Volunteer",
  },
  {
    quote:
      "Finding Iftar meals has never been easier. The real-time updates save me so much time.",
    author: "Fatima S.",
    role: "Guest",
  },
  {
    quote:
      "Our restaurant has been able to reach more people and coordinate volunteers efficiently.",
    author: "Mohammed R.",
    role: "Restaurant Owner",
  },
];
