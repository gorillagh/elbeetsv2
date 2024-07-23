import { auth } from "@/auth";
import React from "react";
import { Suspense } from "react";
import { CardsSkeleton } from "@/app/(admin)/ui/skeletons";
import CardWrapper from "@/app/(admin)/ui/dashboard/cards";

export const metadata = {
  title: "Dashboard",
};

const AdminDashboard = async () => {
  const { user } = await auth();
  user && console.log("Current user--->", user);
  return (
    <main>
      <h1 className={`mb-4 text-xl md:text-2xl font-bold`}>Admin Dashboard</h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Suspense fallback={<CardsSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
        <LatestInvoices />
      </Suspense> */}

        {/* <Suspense fallback={<RevenueChartSkeleton />}>
        <RevenueChart />
      </Suspense> */}
      </div>
    </main>
  );
};

export default AdminDashboard;
