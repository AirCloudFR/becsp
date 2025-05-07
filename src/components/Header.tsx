import { BellIcon } from "@radix-ui/react-icons";
import { FaChevronDown } from "react-icons/fa";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200">
      <div className="text-2xl font-bold text-[#111827]">Tableau de bord</div>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Rechercher..."
            className="pl-10 pr-4 py-2 rounded-lg bg-[#F3F4F6] text-sm focus:outline-none focus:ring-2 focus:ring-[#F04A2F] text-gray-800"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"/></svg>
          </span>
        </div>
        <button className="relative p-2 rounded-full hover:bg-[#F3F4F6]">
          <BellIcon className="w-6 h-6 text-gray-500" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#F04A2F] rounded-full"></span>
        </button>
        <div className="flex items-center gap-2 cursor-pointer px-3 py-2 rounded-lg hover:bg-[#F3F4F6]">
          <span className="font-medium text-gray-800">Admin Corentin</span>
          <FaChevronDown className="text-gray-400 text-xs" />
        </div>
      </div>
    </header>
  );
} 