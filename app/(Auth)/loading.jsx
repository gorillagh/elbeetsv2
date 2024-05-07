import Image from "next/image";
import LoadingSpinner from "@/public/loadingSpin.gif";
export default function Loading() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "6rem",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          width: "100%" /* Adjust width as needed */,
          height: "100vh" /* Adjust height as needed */,
          // backgroundColor: "#f0f0f0",
          textAlign: "center",
          lineHeight: "200px" /* Vertical centering */,
          position: "absolute",
        }}
      >
        <Image src={LoadingSpinner} alt="Loading Spinner" />
      </div>
    </div>
  );
}
