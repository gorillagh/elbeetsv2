import { HiOutlineBanknotes } from "react-icons/hi2";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { FaRegClock } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";

//   import { fetchCardData } from '@/app/lib/data';

const iconMap = {
  collected: HiOutlineBanknotes,
  customers: GrGroup,
  pending: FaRegClock,
  invoices: HiOutlineDocumentDuplicate,
};

export default async function CardWrapper() {
  //   const {
  //     totalPaidInvoices,
  //     totalPendingInvoices,
  //     numberOfInvoices,
  //     numberOfCustomers,
  //   } = await fetchCardData();
  return (
    <>
      {/* NOTE: comment in this code when you get to this point in the course */}
      <Card title="Collected" value={10} type="collected" />
      <Card title="Pending" value={5} type="pending" />
      <Card title="Total Orders" value={15} type="invoices" />
      <Card title="Total Customers" value={8} type="customers" />
    </>
  );
}

export function Card({ title, value, type }) {
  const Icon = iconMap[type];

  return (
    <div className="rounded-xl bg-gray-50 p-2 shadow-sm">
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
