import Sidebar from "./sidebar";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="p-4 flex gap-3   min-h-screen">
      <Sidebar />
      {children}
    </section>
  );
}
