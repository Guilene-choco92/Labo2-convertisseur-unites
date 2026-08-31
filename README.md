# Convertisseur d'unités

Application web de conversion de pieds en mètres et de litres en gallons américains.

## Prérequis

- Node.js 20 ou une version plus récente
- npm 10 ou une version plus récente

## Installation et démarrage

Depuis la racine du projet :

```bash
npm install
npm run install:all
npm run dev
```

- Le backend est disponible sur `http://localhost:3001`.
- Le frontend est disponible sur `http://localhost:5173`.

Pour lancer uniquement l'API en mode production :

```bash
npm run start
```

## API

| Méthode | Route | Corps JSON | Description |
| --- | --- | --- | --- |
| `GET` | `/api/health` | — | État de l'API |
| `POST` | `/api/convert/feet-to-meters` | `{ "value": 12 }` | Convertit les pieds en mètres |
| `POST` | `/api/convert/liters-to-gallons` | `{ "value": 12 }` | Convertit les litres en gallons américains |

## Tests backend

```bash
npm run test
```
