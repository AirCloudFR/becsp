"use client";

// Données mockées en attendant une API de ressources
const resources = [
  { id: 1, title: "Guide d'introduction à Microsoft 365", category: "Microsoft 365", date: "29/04/2025" },
  { id: 2, title: "Utilisation des fonctionnalités avancées d'Excel", category: "Microsoft 365", date: "15/04/2025" },
  { id: 3, title: "Sécuriser votre environnement Microsoft", category: "Sécurité", date: "01/04/2025" },
];

function CategoryBadge({ category }: { category: string }) {
  const getColorByCategory = (category: string) => {
    const categories: Record<string, string> = {
      "Microsoft 365": "bg-blue-100 text-blue-800",
      "Sécurité": "bg-red-100 text-red-800",
      "Teams": "bg-purple-100 text-purple-800",
      "SharePoint": "bg-green-100 text-green-800"
    };
    
    return categories[category] || "bg-gray-100 text-gray-800";
  };
  
  return (
    <span className={`rounded-full px-3 py-1 text-sm font-medium ${getColorByCategory(category)}`}>
      {category}
    </span>
  );
}

export default function ResourcesTable() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 min-h-[220px] flex flex-col">
      <h2 className="text-xl font-semibold mb-1">Ressources récentes</h2>
      <p className="text-sm text-gray-500 mb-4">Derniers articles et documentation</p>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="text-gray-500 border-b">
              <th className="py-2">Titre</th>
              <th className="py-2">Catégorie</th>
              <th className="py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id} className="border-b last:border-0">
                <td className="py-2 font-medium">{resource.title}</td>
                <td className="py-2"><CategoryBadge category={resource.category} /></td>
                <td className="py-2">{resource.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="flex justify-end mt-4">
        <button className="px-4 py-2 rounded-lg bg-[#F3F4F6] text-[#111827] text-sm font-medium hover:bg-[#E5E7EB] transition">
          Voir toute la documentation
        </button>
      </div>
    </div>
  );
} 