import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import { Navbar } from "@/components/NavBar";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: "variable",
});

export const metadata: Metadata = {
  title: "DCF Volonteer App",
  description:
    "A simple app to help you find the best volunteer opportunities in your area. and help you to connect with the right people.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div className="relative flex flex-col items-center">
              <Navbar />
              <main>
                {children}
                <Toaster position="bottom-right" />
              </main>
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
