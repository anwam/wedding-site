import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <nav className="p-4 text-primary [&_a]:border [&_a]:border-primary [&_a]:rounded [&_a]:px-2 border-b border-primary font-thai font-bold text-sm">
        <div className="container flex flex-row gap-x-2 mx-auto max-w-2xl">
          <Link to={"/"}>หน้าแรก</Link>
          <Link to={"/recommended"}>สถานที่แนะนำ</Link>
        </div>
      </nav>
      <div className="container flex flex-col mx-auto max-w-2xl min-h-dvh">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
