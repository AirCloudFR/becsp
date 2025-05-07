"use client";
import { FaTicketAlt } from "react-icons/fa";
import { useTickets } from "../../hooks/useTickets";

export default function TicketsSummaryCard() {
  const { tickets, loading, error } = useTickets();
  
  // Calculer les compteurs
  const total = tickets.length;
  const inProgress = tickets.filter(ticket => ticket.statuscode === 1).length;
  const pending = tickets.filter(ticket => ticket.statuscode === 2).length;
  const resolved = tickets.filter(ticket => ticket.statuscode === 3).length;

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 relative min-h-[180px]">
      <div className="absolute top-4 right-4 bg-[#F3F4F6] rounded-full p-3">
        <FaTicketAlt className="text-[#F04A2F] text-xl" />
      </div>
      <h2 className="text-lg font-semibold mb-2">Tickets</h2>
      {loading ? (
        <div className="text-sm text-gray-400">Chargement...</div>
      ) : error ? (
        <div className="text-sm text-red-500">Erreur de chargement</div>
      ) : (
        <>
          <div className="text-3xl font-bold mb-2">{total}</div>
          <div className="text-sm text-gray-500 space-y-1">
            <div>En cours: {inProgress}</div>
            <div>En attente: {pending}</div>
            <div>Résolu(s): {resolved}</div>
          </div>
        </>
      )}
    </div>
  );
} 