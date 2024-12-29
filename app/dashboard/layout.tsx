import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { SessionProvider } from "next-auth/react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <SessionProvider>{children}</SessionProvider>
        </main>
      </div>
    </div>
  );
}
