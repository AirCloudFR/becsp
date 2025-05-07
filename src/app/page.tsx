"use client";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import TicketsSummaryCard from "../components/DashboardWidgets/TicketsSummaryCard";
import ResourcesSummaryCard from "../components/DashboardWidgets/ResourcesSummaryCard";
import QuickActionsCard from "../components/DashboardWidgets/QuickActionsCard";
import TicketsTable from "../components/TicketsTable";
import ResourcesTable from "../components/ResourcesTable";
import { useAuth } from "../hooks/useAuth";

export default function Dashboard() {
  const { isAuthenticated, isLoading } = useAuth();

  // Affiche un spinner pendant la vérification d'auth
  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F9FAFB]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-[#F04A2F] border-b-[#F04A2F] border-l-transparent border-r-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      {/* Sidebar */}
      <Sidebar />
      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <Header />
        {/* Dashboard widgets */}
        <main className="flex flex-col gap-6 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TicketsSummaryCard />
            <ResourcesSummaryCard />
            <QuickActionsCard />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TicketsTable />
            <ResourcesTable />
          </div>
        </main>
      </div>
    </div>
  );
}
