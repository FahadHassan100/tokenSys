import { signOut } from "@/auth";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex justify-between items-center">
        <div className="flex items-center">
          <Image
            src="https://justicetrading.com/Client_Portal/images/login-logo.png"
            alt="Logo"
            width={150}
            height={150}
            unoptimized
          />
        </div>

        <form
          action={async () => {
            "use server";
            await signOut({ redirectTo: "/login" });
          }}
        >
          <button type="submit">Sign Out</button>
        </form>
      </div>
    </header>
  );
}
