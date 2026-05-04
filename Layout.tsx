import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      {/* مهم: يعطي مساحة تحت النافبار */}
      <main className="pt-24">
        <Outlet />
      </main>
    </>
  );
}
