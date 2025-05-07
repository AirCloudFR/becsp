"use client";
import { FaPlusCircle, FaBook, FaVideo } from "react-icons/fa";
import Link from "next/link";

export default function QuickActionsCard() {
  const actions = [
    {
      label: "Nouveau ticket",
      icon: <FaPlusCircle className="mr-2" />,
      href: "/tickets/new",
      primary: true,
    },
    {
      label: "Documentation",
      icon: <FaBook className="mr-2" />,
      href: "/documentation",
      primary: false,
    },
    {
      label: "Webinaires",
      icon: <FaVideo className="mr-2" />,
      href: "/webinaires",
      primary: false,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-[180px]">
      <h2 className="text-lg font-semibold mb-4">Actions rapides</h2>
      <p className="text-sm text-gray-500 mb-4">Accès direct aux fonctionnalités</p>
      <div className="flex flex-col gap-3">
        {actions.map((action) => (
          <Link
            key={action.label}
            href={action.href}
            className={`flex items-center px-4 py-2 rounded-lg transition-colors text-sm font-medium ${
              action.primary
                ? "bg-[#071C2F] text-white hover:bg-[#011C29]"
                : "bg-[#F3F4F6] text-[#111827] hover:bg-[#E5E7EB]"
            }`}
          >
            {action.icon}
            {action.label}
          </Link>
        ))}
      </div>
    </div>
  );
} 