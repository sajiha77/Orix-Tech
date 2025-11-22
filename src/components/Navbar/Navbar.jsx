"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Case Studies", path: "/case-studies" },
  { name: "Blog", path: "/blog" },
];

const Navbar = ({ scrolled }) => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-8 relative">
      {links.map((link, index) => {
        const isActive = pathname === link.path;

        return (
          <Link
            href={link.path}
            key={index}
            className={`relative capitalize font-medium transition-all duration-300 ${
              isActive
                ? "text-[#46BCEC]"
                : scrolled
                ? "text-white"
                : "text-[#B0B0B0]"
            } hover:text-[#46BCEC]`}
          >
            {link.name}
            <span
              className={`absolute left-0 -bottom-1 w-0 h-[2px] bg-[#46BCEC] transition-all duration-300 ${
                isActive ? "w-full" : "hover:w-full"
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
