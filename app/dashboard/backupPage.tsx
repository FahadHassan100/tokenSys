"use client";
import { getBookletId } from "@/services/clientOrder";
import React, { useEffect } from "react";
import { signOut } from "@/auth";

const Dashboard = () => {
  useEffect(() => {
    const getClientOrder = getBookletId("fahad@justicetrading.com");
    console.log(getClientOrder);
  });

  return (
    <div>
      <div className="container border-2">
        <div className="flex justify-end px-8">
          <div></div>
          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/login" });
            }}
          >
            <button type="submit">Sign Out</button>
          </form>
        </div>
      </div>
      <div className="container px-20">
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
