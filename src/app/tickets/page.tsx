"use client";
import { useState } from "react";
import { useTickets } from "../../hooks/useTickets";
import { useAuth } from "../../hooks/useAuth";

// Composants pour la structure générale
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";

// Mapping des statuts et priorités pour l'affichage
const statusMapping: Record<number, { text: string; color: string }> = {
  1: { text: "En cours", color: "bg-purple-500 text-white" },
  2: { text: "En attente", color: "bg-yellow-400 text-black" },
  3: { text: "Résolu", color: "bg-green-500 text-white" },
  4: { text: "Annulé", color: "bg-gray-300 text-black" },
};

const priorityMapping: Record<number, { text: string; color: string }> = {
  1: { text: "Haute", color: "text-orange-500 font-semibold" },
  2: { text: "Normale", color: "text-yellow-600" },
  3: { text: "Basse", color: "text-purple-500" },
};

// Composants réutilisables pour le tableau
function StatusBadge({ status }: { status: number }) {
  const map = statusMapping[status] || { text: String(status), color: "bg-gray-200 text-gray-800" };
  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${map.color}`}>{map.text}</span>
  );
}

function PriorityBadge({ priority }: { priority: number }) {
  const map = priorityMapping[priority] || { text: String(priority), color: "text-gray-500" };
  return <span className={`text-sm ${map.color}`}>{map.text}</span>;
}

function formatDate(date: string) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

export default function TicketsPage() {
  const { isAuthenticated, isLoading: authLoading } = useAuth();
  const { tickets, loading, error } = useTickets();

  // Affiche un spinner pendant la vérification d'auth ou le chargement des tickets
  if (authLoading || loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#F9FAFB]">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-t-[#F04A2F] border-b-[#F04A2F] border-l-transparent border-r-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement des tickets...</p>
        </div>
      </div>
    );
  }

  // Affiche une erreur si nécessaire
  if (error) {
    return (
      <div className="flex min-h-screen bg-[#F9FAFB]">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header />
          <main className="p-6">
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <h2 className="text-xl font-semibold text-red-700 mb-2">Erreur</h2>
              <p className="text-red-600">{error}</p>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#F9FAFB]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold">Tickets</h1>
            <p className="text-gray-500">Liste complète de vos tickets de support</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="p-4 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Tous les tickets ({tickets.length})</h2>
                <button className="px-4 py-2 bg-[#071C2F] text-white rounded-lg text-sm font-medium hover:bg-opacity-90 transition-colors flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Nouveau ticket
                </button>
              </div>
            </div>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="bg-gray-50 text-gray-500">
                    <th className="px-6 py-3">N° Ticket</th>
                    <th className="px-6 py-3">Titre</th>
                    <th className="px-6 py-3">Client</th>
                    <th className="px-6 py-3">Responsable</th>
                    <th className="px-6 py-3">Statut</th>
                    <th className="px-6 py-3">Priorité</th>
                    <th className="px-6 py-3">Créé le</th>
                    <th className="px-6 py-3">Modifié le</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {tickets.length > 0 ? (
                    tickets.map((ticket) => (
                      <tr key={ticket.ticketnumber} className="hover:bg-gray-50">
                        <td className="px-6 py-4 font-medium">{ticket.ticketnumber}</td>
                        <td className="px-6 py-4">{ticket.title}</td>
                        <td className="px-6 py-4">{ticket.customer_name}</td>
                        <td className="px-6 py-4">{ticket.owner_name}</td>
                        <td className="px-6 py-4"><StatusBadge status={ticket.statuscode} /></td>
                        <td className="px-6 py-4"><PriorityBadge priority={ticket.prioritycode} /></td>
                        <td className="px-6 py-4">{formatDate(ticket.createdon)}</td>
                        <td className="px-6 py-4">{formatDate(ticket.modifiedon || "")}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                        Aucun ticket trouvé.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 