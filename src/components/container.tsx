import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";
import Navbar from "./navbar";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <div className="pt-[70px] flex-grow">{children}</div>
      <Navbar />
      <Footer />
    </div>
  );
}
