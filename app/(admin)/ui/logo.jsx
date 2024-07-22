import Image from "next/image";

export default function Logo() {
  return (
    <div
      className={`flex w-full flex-row items-center leading-none text-white`}
    >
      <Image
        src="/logo1.png"
        alt="logo"
        className="mr-2 "
        width={40}
        height={40}
      />
      <p className="text-[35px] font-semibold">Elbee-TS</p>
    </div>
  );
}
