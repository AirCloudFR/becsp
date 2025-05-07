export type Ticket = {
  ticketnumber: string;
  title: string;
  customer_name: string;
  owner_name: string;
  statuscode: number;
  prioritycode: number;
  createdon: string;
  modifiedon?: string;
};

export async function getTickets(): Promise<Ticket[]> {
  const res = await fetch("/api/incidents", { credentials: "include" });
  if (!res.ok) throw new Error("Erreur lors de la récupération des tickets");
  return res.json();
} 