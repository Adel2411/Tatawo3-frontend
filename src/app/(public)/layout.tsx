import { Navbar } from "@/components/NavBar";
import React from "react";

function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

export default PublicLayout;
