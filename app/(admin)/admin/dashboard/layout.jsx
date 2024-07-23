import SideNav from "@/app/(admin)/ui/dashboard/sidenav";
import { signOut } from "@/auth";

export default function Layout({ children }) {
  return (
    <div className="relative flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="min-h-[168px] w-full md:h-screen md:w-64"></div>
      <SideNav
        signOut={async () => {
          "use server";
          await signOut();
        }}
      />
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      {/* <div className="hidden md:block min-h-[168px] w-full md:h-screen md:w-64"></div> */}
    </div>
  );
}
