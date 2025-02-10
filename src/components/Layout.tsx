import { Link, Outlet } from "react-router";

function Layout() {
  return (
    <div>
      <nav className="flex flex-row gap-x-2 p-4 text-primary [&_a]:border [&_a]:border-primary [&_a]:rounded [&_a]:px-1 border-b border-primary">
        <Link to={"/"}>B & A</Link>
        <Link to={"/map"}>แผนที่</Link>
      </nav>
      <div className="container flex flex-col mx-auto max-w-2xl min-h-dvh">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
