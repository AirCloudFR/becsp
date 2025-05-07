"use client";
import { useEffect, useState } from "react";
import { getTickets, Ticket } from "../api/tickets";

export function useTickets() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    getTickets()
      .then(setTickets)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { tickets, loading, error };
} 