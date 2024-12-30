"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

type ClientOrderTwo = Record<string, unknown>;

export default function DashboardPage() {
  //const [clientOrder, setClientOrder] = useState<ClientOrderTwo[] | null>(null);
  const { data: session } = useSession(); // Fetch session data in client-side

  // useEffect(() => {
  //   const fetchClientOrder = async () => {
  //     if (session?.user?.email) {
  //       // Check if email exists
  //       const order: ClientOrderTwo[] = await getBookletId(session.user.email); // Pass session email
  //       setClientOrder(order);
  //     }
  //   };

  //   fetchClientOrder();
  // }, [session]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Booklet IDs</h1>
      <ul className="space-y-4">
        {/* {clientOrder &&
          clientOrder.map((items: ClientOrderTwo) => (
            <li
              key={items["Order_ID"] as number}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow"
            >
              <span className="text-lg">{items["Booklet_ID"] as string}</span>
              <button className="border-2 px-4 py-3 rounded-lg hover:bg-cyan-600 hover:text-white">
                Convert DGC&apos;s to tokens
              </button>
            </li>
          ))} */}
      </ul>
    </div>
  );
}
