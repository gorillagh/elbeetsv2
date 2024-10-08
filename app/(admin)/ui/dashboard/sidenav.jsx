import Link from "next/link";
import NavLinks from "./nav-links";
import { PiSignOutBold } from "react-icons/pi";
import { signOut } from "@/auth";
import Logo from "../logo";

import Image from "next/image";

export default function SideNav() {
  return (
    <div className="fixed md:h-screen w-full flex-none md:w-64 bg-white rounded-2xl shadow-lg">
      <div className="flex h-full flex-col px-3 py-4 md:px-2">
        <Link
          className="mb-2 flex h-20 items-end justify-start rounded-2xl bg-blue-600 p-4"
          href="/"
        >
          <div className="w-full text-white">
            <Logo />
          </div>
        </Link>
        <div className="flex grow flex-row justify-between space-x-2 overflow-x-scroll md:overflow-x-hidden md:flex-col md:space-x-0 md:space-y-2">
          <NavLinks />
          <div className="hidden h-auto w-full grow rounded-2xl bg-gray-50 md:block"></div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-2xl bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
              <PiSignOutBold className="w-6" />
              <div className="hidden md:block">Sign Out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
