import React from "react";

import { Metadata } from "next";
import { fetchCustomersPages } from "@/app/(admin)/lib/data";
import Pagination from "@/app/(admin)/ui/pagination";

export const metadata = {
  title: "Customers",
};

const CustomersPage = async ({ searchParams }) => {
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const totalPages = await fetchCustomersPages(query);
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className="text-2xl font-bold">Customers</h1>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
};

export default CustomersPage;
