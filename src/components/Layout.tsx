import { cn } from "@/lib/utils";
import { NavLink, Outlet } from "react-router";

const links = [
  {
    url: "/",
    text: "หน้าแรก",
  },
  {
    url: "/gift",
    text: "ให้ของขวัญพวกเรา",
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
        <div className="container flex flex-row max-w-4xl mx-auto gap-x-2">
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
      <div className="container flex flex-col max-w-4xl mx-auto min-h-dvh">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
