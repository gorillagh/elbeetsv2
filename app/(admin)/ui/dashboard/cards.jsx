import { HiOutlineBanknotes } from "react-icons/hi2";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";

import { fetchCardData } from "@/app/(admin)/lib/data";

const iconMap = {
  collected: HiOutlineBanknotes,
  customers: GrGroup,
  pending: FaRegClock,
  invoices: HiOutlineDocumentDuplicate,
};

export default async function CardWrapper() {
  const {
    totalCompletedOrders,
    totalPendingOrders,
    numberOfOrders,
    numberOfCustomers,
  } = await fetchCardData();
  return (
    <>
      <Card title="Completed" value={totalCompletedOrders} type="collected" />
      <Card title="Pending" value={totalPendingOrders} type="pending" />
      <Card title="Total Orders" value={numberOfOrders} type="invoices" />
      <Card
        title="Total Customers"
        value={numberOfCustomers}
        type="customers"
      />
    </>
  );
}

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-md hover:shadow-xl">
      <div className="flex p-4">
        {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null}
        <h3 className="ml-2 text-sm font-medium">{title}</h3>
      </div>
      <p
        className={`truncate rounded-xl bg-white px-4 py-8 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}
