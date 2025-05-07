# Guide de déploiement du frontend

## Configuration des variables d'environnement

Lors du déploiement sur Vercel, configurez les variables d'environnement suivantes:

```
# URL du backend déployé
BACKEND_URL=https://votre-backend.railway.app

# URL du frontend déployé
NEXT_PUBLIC_FRONTEND_URL=https://becsp.vercel.app
```

## Configuration du projet sur Vercel

1. **Paramètres de build**:
   - Répertoire racine: `frontend`
   - Commande de build: `npm run build`
   - Répertoire de sortie: `.next`

2. **Paramètres de domaine**:
   - URL configurée: `becsp.vercel.app`
   - Assurez-vous que ce domaine est correctement reflété dans votre configuration Azure AD

3. **Intégration avec GitHub**:
   - Activez les déploiements automatiques à partir de la branche principale
   - Configurez les prévisualisations pour les pull requests

## Dépannage

- Si les redirections API ne fonctionnent pas, vérifiez que `BACKEND_URL` est correctement configuré
- Pour les problèmes d'authentification, vérifiez que l'URL de redirection dans Azure AD correspond à votre domaine Vercel (`becsp.vercel.app`)
- Pour les problèmes CORS, assurez-vous que le backend accepte les requêtes de `https://becsp.vercel.app` 