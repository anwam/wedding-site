import { cn } from "@/lib/utils";
import { NavLink, Outlet } from "react-router";

const links = [
  {
    url: "/",
    text: "หน้าแรก",
  },
  {
    url: "/recommended",
    text: "สถานที่แนะนำ",
  },
];

function Layout() {
  return (
    <div>
      <nav className="p-4 text-primary [&_a]:border [&_a]:border-primary [&_a]:rounded [&_a]:px-2 border-b border-primary font-thai font-bold text-sm">
        <div className="container flex flex-row gap-x-2 mx-auto max-w-2xl">
          {links.map((link, index) => (
            <NavLink
              viewTransition
              key={`${link.text}${index}`}
              to={link.url}
              className={({ isActive }) =>
                cn("border border-primary rounded px-2", {
                  "bg-primary text-white": isActive,
                })
              }
            >
              {link.text}
            </NavLink>
          ))}
        </div>
      </nav>
      <div className="container flex flex-col mx-auto max-w-2xl min-h-dvh">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
