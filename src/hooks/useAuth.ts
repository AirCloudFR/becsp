"use client";
import { useEffect, useState } from "react";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Vérifie l'état d'authentification
    fetch("/api/auth/check", { credentials: "include" })
      .then(res => res.json())
      .then(data => {
        setIsAuthenticated(data.isAuthenticated);
        setUser(data.user);
        
        // Si pas authentifié, rediriger vers la page de login du backend
        if (!data.isAuthenticated) {
          window.location.href = "/api/auth/login";
        }
      })
      .catch(err => {
        console.error("Erreur de vérification d'authentification:", err);
        setIsAuthenticated(false);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { isAuthenticated, isLoading, user };
} 