# Utiliser une image Node.js officielle pour le build
FROM node:20-alpine AS build

# Définir le répertoire de travail dans le conteneur
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du projet dans le conteneur
COPY . .

# Construire l'application pour la production
RUN npm run build

# Utiliser une image NGINX pour servir l'application en production
FROM nginx:alpine

# Copier les fichiers de build vers le répertoire NGINX
COPY --from=build /usr/src/app/build /usr/share/nginx/html

# Exposer le port 80
EXPOSE 80

# Démarrer NGINX
CMD ["nginx", "-g", "daemon off;"]