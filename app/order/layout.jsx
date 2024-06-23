import "./order.css";
import Header from "./ui/header";

export default function Layout({ children }) {
  return (
    <div style={{}}>
      <Header />
      <div>{children}</div>
    </div>
  );
}
