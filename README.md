# Démonstrateur API Particulier

Cette application Next.js sert de démonstrateur pour l'intégration d'une API Particulier [https://api.gouv.fr/les-api/api-particulier](https://api.gouv.fr/les-api/api-particulier). Elle vous permet de comprendre comment intégrer un API dans votre application web avec une authentification FranceConnect mais également sans. Vous verrez les différents cas d'usage qu'il faudra gérer.

## Installation

Avant de pouvoir exécuter cette application, assurez-vous d'avoir Node.js installé sur votre système. Si ce n'est pas le cas, vous pouvez le télécharger depuis [le site officiel de Node.js](https://nodejs.org/).

1. Clonez ce dépôt GitHub sur votre machine locale en utilisant la commande suivante :

   ```shell
   git clone https://github.com/betagouv/api-particulier-demonstrateur.git
   ```

2. Accédez au répertoire du projet :

   ```shell
   cd api-particulier-demonstrateur
   ```

3. Installez les dépendances en utilisant npm (ou yarn) :

   ```shell
   npm install
   ```

## Lancement sur environnement de développement

Une fois que vous avez installé les dépendances, vous pouvez lancer l'application en mode développement. Cela vous permettra de voir la démo en action et de travailler sur votre intégration FranceConnecté.

1. Exécutez la commande suivante pour démarrer l'application en mode développement :

   ```shell
   npm run dev
   ```

2. L'application sera accessible dans votre navigateur à l'adresse [http://localhost:3000](http://localhost:3000).

3. Vous pouvez commencer à explorer la démo et voir les différents cas d'usage des APIs Particulier.

N'oubliez pas de consulter la documentation de [API Particulier](https://api.gouv.fr/les-api/api-particulier) pour obtenir des informations supplémentaires sur l'intégration et la configuration de l'API, et la [documentation FranceConnect](https://partenaires.franceconnect.gouv.fr/documentation) pour l'authentification.
