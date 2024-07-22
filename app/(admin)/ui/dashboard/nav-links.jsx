"use client";
// import {
//   UserGroupIcon,
//   HomeIcon,
//   DocumentDuplicateIcon,
// } from '@heroicons/react/24/outline';
import { GrHomeRounded, GrGroup } from "react-icons/gr";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/admin/dashboard", icon: GrHomeRounded },
  {
    name: "Orders",
    href: "/admin/dashboard/orders",
    icon: HiOutlineDocumentDuplicate,
  },
  { name: "Customers", href: "/admin/dashboard/customers", icon: GrGroup },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
          >
            <LinkIcon className="size-5" />
            <p
              className={clsx(
                "flex h-[48px] grow bg-transparent items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3",
                {
                  "bg-sky-100 text-blue-600": pathname === link.href,
                }
              )}
            >
              {link.name}
            </p>
          </Link>
        );
      })}
    </>
  );
}
