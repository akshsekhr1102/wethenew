import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";

export default function Container({ children }: { children: ReactNode }) {
  return (
    <div className="  flex flex-col min-h-screen ">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
