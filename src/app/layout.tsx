import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/providers/QueryProvider";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "react-hot-toast";
import NavBar from "@/components/NavBar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
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
      <body className={`${poppins.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <QueryProvider>
            <div>
              <NavBar />
              <main className="relative">
                {children}
                <Toaster position="bottom-right" />
              </main>
              {/* Remove this since ThemeToggle is now in the NavBar */}
              {/* <div className="absolute right-4 top-4">
                <ThemeToggle />
              </div> */}
            </div>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
