import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2 rounded hover:bg-gray-700"
            >
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
