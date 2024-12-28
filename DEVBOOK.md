# DEVBOOK - Création d'un composant CounterDisplay

## Objectif
Créer un nouveau web component qui affichera la valeur du Counter existant ou "pas de counter" si le Counter n'est pas chargé sur la page.

## Étapes

### 1. Modification de la configuration
- Modifier le Counter existant pour exposer sa valeur via un événement personnalisé
- Mettre à jour vite.config.ts pour gérer plusieurs composants
- Configurer les exports pour permettre le chargement indépendant des composants

### 2. Création du composant CounterDisplay
- Créer un nouveau composant CounterDisplay.svelte
- Implémenter la logique de détection du Counter
- Mettre en place l'écoute des événements du Counter
- Gérer l'affichage conditionnel

### 3. Mise à jour du système de build
- Configurer le build pour générer des fichiers séparés pour chaque composant
- Mettre à jour le système d'export pour permettre l'utilisation indépendante

### 4. Tests et Documentation
- Créer une page de test HTML pour vérifier le chargement indépendant
- Documenter l'utilisation des composants
- Tester les différents scénarios (avec/sans Counter)

### 5. Optimisation et Finalisation
- Optimiser la taille des bundles
- Vérifier la compatibilité navigateur
- Documenter les dépendances et prérequis
