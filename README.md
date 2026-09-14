# Convertisseur d'unités

Application web faite avec Node.js, React et Material UI.

Elle permet de convertir des valeurs entre différentes unités.

## Fonctionnalités

- Convertir des pieds en mètres
- Convertir des litres en gallons américains
- Convertir des kilogrammes en livres
- Convertir des degrés Celsius en degrés Fahrenheit
- Afficher un message d'erreur si la valeur entrée n'est pas valide

## Installation

À partir de la racine du projet :

```bash
npm install
npm run install:all
```

## Démarrage

```bash
npm run dev
```

Le backend démarre sur :

```text
http://localhost:3001
```

Le frontend démarre sur :

```text
http://localhost:5173
```

## Tests

Pour lancer les tests du backend :

```bash
npm run test
```

## Routes API

| Méthode | Route | Description |
| --- | --- | --- |
| `GET` | `/api/health` | Vérifie que l'API fonctionne |
| `POST` | `/api/convert/feet-to-meters` | Convertit les pieds en mètres |
| `POST` | `/api/convert/liters-to-gallons` | Convertit les litres en gallons américains |
| `POST` | `/api/convert/kilograms-to-pounds` | Convertit les kilogrammes en livres |
| `POST` | `/api/convert/celsius-to-fahrenheit` | Convertit les degrés Celsius en degrés Fahrenheit |

## Travail d'équipe

Pour le laboratoire 3, nous avons travaillé avec des branches Git et des pull requests.

- Contribution 1 : ajout de la conversion kilogrammes vers livres
- Contribution 2 : ajout de la conversion Celsius vers Fahrenheit

Chaque contribution a été faite dans une branche séparée, puis fusionnée dans `main` après une revue de code.
