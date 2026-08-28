"use client"

import Link from "next/link";

import { MotionTransition } from "./transition-component";
import { usePathname } from "next/navigation";

import { getItemsNavbar } from "@/data";


const Navbar = () => {
  const pathname = usePathname();
  const lang = pathname?.startsWith("/en") ? "en" : "es";

  const itemsNavbar = getItemsNavbar(lang);

  return (
    <MotionTransition
      position="right"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-40 flex h-28 items-end justify-center bg-gradient-to-t from-[#1f1934] via-[#1f1934]/95 to-transparent pb-[max(1rem,env(safe-area-inset-bottom))]"
    >
      <nav className="pointer-events-auto">
        <div className="flex items-center justify-center gap-2 px-4 py-1 border rounded-full shadow-lg border-white/10 bg-white/15 backdrop-blur-md shadow-black/25">
          {itemsNavbar.map((item) => (
            <div
              key={item.id}
              className={`px-3 py-2 transition duration-150 rounded-full cursor-pointer hover:bg-secondary ${pathname === item.link ? "bg-secondary" : ""}`}
              title={item.title} // título en tooltip
              data-tooltip-target="tooltip-default"
            >
              <Link href={item.link}>
                {item.icon}
              </Link>
            </div>
          ))}
        </div>
      </nav>
    </MotionTransition>
  );
};

export default Navbar;
