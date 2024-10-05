import React from "react";
import Sidebar from "./side-bar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
