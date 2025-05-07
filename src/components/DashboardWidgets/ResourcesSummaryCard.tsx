"use client";
import { FaBook } from "react-icons/fa";

export default function ResourcesSummaryCard() {
  // TODO: Remplacer par de vraies données des ressources quand l'API sera disponible
  const resourcesData = {
    total: 3, // Nombre total de ressources
    articles: 1,
    guides: 1, 
    webinaires: 1
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 relative min-h-[180px]">
      <div className="absolute top-4 right-4 bg-[#F3F4F6] rounded-full p-3">
        <FaBook className="text-[#F04A2F] text-xl" />
      </div>
      <h2 className="text-lg font-semibold mb-2">Ressources</h2>
      <div className="text-3xl font-bold mb-2">{resourcesData.total}+</div>
      <div className="text-sm text-gray-500 space-y-1">
        <div>Articles: {resourcesData.articles}</div>
        <div>Guides: {resourcesData.guides}</div>
        <div>Webinaires: {resourcesData.webinaires}</div>
      </div>
    </div>
  );
} 