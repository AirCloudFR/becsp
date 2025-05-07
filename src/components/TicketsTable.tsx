"use client";

import { useTickets } from "../hooks/useTickets";

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

function StatusBadge({ status }: { status: number }) {
  const map = statusMapping[status] || { text: status, color: "bg-gray-200 text-gray-800" };
  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${map.color}`}>{map.text}</span>
  );
}

function PriorityBadge({ priority }: { priority: number }) {
  const map = priorityMapping[priority] || { text: priority, color: "text-gray-500" };
  return <span className={`text-sm ${map.color}`}>{map.text}</span>;
}

function formatDate(date: string) {
  if (!date) return "-";
  return new Date(date).toLocaleDateString("fr-FR");
}

export default function TicketsTable() {
  const { tickets, loading, error } = useTickets();
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-[220px] flex flex-col">
      <h2 className="text-xl font-semibold mb-1">Tickets récents</h2>
      <p className="text-sm text-gray-500 mb-4">Derniers tickets de support</p>
      {loading && <div className="text-gray-400">Chargement...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead>
              <tr className="text-gray-500 border-b">
                <th className="py-2">N° Ticket</th>
                <th className="py-2">Titre</th>
                <th className="py-2">Client</th>
                <th className="py-2">Responsable</th>
                <th className="py-2">Statut</th>
                <th className="py-2">Priorité</th>
                <th className="py-2">Créé le</th>
              </tr>
            </thead>
            <tbody>
              {tickets.slice(0, 5).map((ticket) => (
                <tr key={ticket.ticketnumber} className="border-b last:border-0">
                  <td className="py-2 font-medium">{ticket.ticketnumber}</td>
                  <td className="py-2">{ticket.title}</td>
                  <td className="py-2">{ticket.customer_name}</td>
                  <td className="py-2">{ticket.owner_name}</td>
                  <td className="py-2"><StatusBadge status={ticket.statuscode} /></td>
                  <td className="py-2"><PriorityBadge priority={ticket.prioritycode} /></td>
                  <td className="py-2">{formatDate(ticket.createdon)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 rounded-lg bg-[#F3F4F6] text-[#111827] text-sm font-medium hover:bg-[#E5E7EB] transition">Voir tous les tickets</button>
      </div>
    </div>
  );
} 