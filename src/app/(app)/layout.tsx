import Container from "@/components/container";
import { Toaster } from "@/components/ui/toaster";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "What to say?/",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={``}>
      <Container>{children}</Container>
      <Toaster />
    </div>
  );
}
