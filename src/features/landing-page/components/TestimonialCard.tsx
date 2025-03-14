import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <Card className="border-2 border-muted card-hover-effect">
      <CardContent className="pt-6">
        <QuoteIcon className="h-8 w-8 text-muted-foreground mb-2" />
        <p className="text-lg">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <p className="font-semibold">{author}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </CardFooter>
    </Card>
  );
}
