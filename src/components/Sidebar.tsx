"use client";
import { HomeIcon } from "@radix-ui/react-icons";
import { FaTicketAlt, FaBook, FaVideo, FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useAuth } from "../hooks/useAuth";

const navItems = [
  { label: "Tableau de bord", href: "/", icon: <HomeIcon /> },
  { label: "Tickets", href: "/tickets", icon: <FaTicketAlt /> },
  { label: "Documentation", href: "/documentation", icon: <FaBook /> },
  { label: "Webinaires", href: "/webinaires", icon: <FaVideo /> },
];

export default function Sidebar() {
  const { user } = useAuth();
  const displayName = user?.displayName || "Admin";
  const email = user?.email || "corentin@kyra.design";
  
  // TODO: Gérer l'item actif via usePathname
  return (
    <aside className="w-64 bg-[#011C29] text-white flex flex-col min-h-screen py-6 px-4">
      <div className="flex items-center gap-2 mb-10 px-2">
        <span className="text-[#F04A2F] font-bold text-xl">BE-CSP</span>
        <span className="font-semibold text-base">Support</span>
      </div>
      <nav className="flex-1 flex flex-col gap-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={
              "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-[#071C2F] text-base font-medium" +
              (item.href === "/" ? " bg-[#071C2F]" : "")
            }
          >
            <span className="text-xl">{item.icon}</span>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="mt-auto flex flex-col gap-4 px-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#F04A2F] flex items-center justify-center text-white font-bold">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div>
              <div className="font-semibold text-sm">{displayName}</div>
              <div className="text-xs text-gray-400">{email}</div>
            </div>
          </div>
          <a 
            href="/auth/logout" 
            className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors mt-2 px-2 py-2"
          >
            <FaSignOutAlt />
            <span>Se déconnecter</span>
          </a>
        </div>
      </div>
    </aside>
  );
} 