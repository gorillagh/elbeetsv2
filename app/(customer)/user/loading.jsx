import Image from "next/image";
import LoadingSpinner from "@/public/loadingSpin.gif";
export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col justify-center align-middle items-center ">
      <Image src={LoadingSpinner} alt="Loading Spinner" />
    </div>
  );
}
