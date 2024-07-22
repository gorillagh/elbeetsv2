import React from "react";
import { auth } from "@/auth";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardPage() {
  const session = await auth();
  session?.user && console.log("Current user--->", session);
  return <div>User Dashboard</div>;
}
