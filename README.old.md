# Carineland

> Site vitrine pour "Le Monde de Carine", créations artisanales à base de lierre et autres éléments de la nature.

Ce projet est un site web portfolio développé avec Next.js pour présenter les créations uniques de Carineland. L'accent est mis sur un design épuré, minimaliste et une expérience utilisateur optimisée pour tous les appareils.

## 🎨 Prototypage et Conception

La conception du site a été pensée pour refléter l'esprit naturel et artisanal des créations de Carine.

### Charte Graphique

- **Couleurs Principales** :
  - `#2F4F4F` (Vert Lierre Foncé) - Pour les textes et les éléments importants.
  - `#F5F5DC` (Beige Nature) - Couleur de fond principale pour une sensation douce et organique.
  - `#8B4513` (Brun Écorce) - Pour les accents, les bordures ou les pieds de page.
  - `#FFFFFF` (Blanc Pur) - Pour les espaces négatifs et les fonds de cartes.

- **Typographie** :
  - **Titres** : `Montserrat`, une police moderne et élégante qui apporte de la clarté.
  - **Paragraphes** : `Lora`, une police avec empattements bien équilibrée, optimisée pour la lisibilité sur les écrans.

### UI/UX (Interface et Expérience Utilisateur)

- **Design Minimaliste** : L'interface est conçue pour être simple et intuitive, mettant en valeur les images des créations.
- **Mobile-First** : Le site est entièrement responsive et conçu en priorité pour une expérience parfaite sur mobile.
- **Composants Material Design** : Utilisation de la bibliothèque [Material-UI (MUI)](https://mui.com/) pour garantir des composants cohérents, accessibles et esthétiques, tout en suivant les principes du Material Design.

## 🛠️ Stack Technique

- **Framework** : [Next.js](https://nextjs.org/)
- **Langage** : [TypeScript](https://www.typescriptlang.org/)
- **Bibliothèque UI** : [Material-UI (MUI)](https://mui.com/)
- **Tests** : [Jest](https://jestjs.io/) et [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- **CI/CD** : [GitHub Actions](https://github.com/features/actions)

## 🚀 Démarrage Rapide

Pour lancer le projet en local, suivez ces étapes :

1.  **Prérequis** : Assurez-vous d'avoir [Node.js](https://nodejs.org/) (version 18.x ou supérieure) installé.

2.  **Cloner le dépôt** :

    ```bash
    git clone https://github.com/ujju16/carineland.git
    cd carineland
    ```

3.  **Installer les dépendances** :

    ```bash
    npm install
    ```

4.  **Lancer le serveur de développement** :

    ```bash
    npm run dev
    ```

    Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## 📜 Scripts Disponibles

- `npm run dev`: Lance l'application en mode développement.
- `npm run build`: Compile l'application pour la production.
- `npm run start`: Démarre un serveur de production.
- `npm run lint`: Lance ESLint pour analyser le code.
- `npm run test`: Exécute les tests avec Jest.

## ⚙️ CI/CD (Intégration et Déploiement Continus)

Le projet est configuré avec GitHub Actions. À chaque `push` ou `pull request` vers la branche `main`, les actions suivantes sont automatiquement exécutées :

1.  **Linting** : Vérification de la qualité du code.
2.  **Tests** : Exécution de la suite de tests pour prévenir les régressions.
3.  **Build** : Compilation du projet pour s'assurer qu'il se déploie sans erreur.

---

_Ce README a été généré pour le projet Carineland._
