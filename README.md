# Pilori

## Doc API

GET `/api/website`  
Liste tous les sites dénoncés  
Exemple de résultat
```json
[
  {
    id: 1,
    slug: "google",
    title: "Google",
    description: "Il y a un tout petit problème.",
    address: "https://www.google.com/",
    device: "Ordinateur",
    level: "Casse-tête",
    user_id: null
  },
  ...
```

GET `/api/website/:id`  
Donne le détail du site demandé  
```json
{
  id: 1,
  slug: "google",
  title: "Google",
  description: "Il y a un tout petit problème.",
  address: "https://www.google.com/",
  device: "Ordinateur",
  level: "Casse-tête",
  user_id: null
}
```

## Exercice API 1

On veut mettre à dispo une api web qui renverra les données des sites en json, sans présentation, pour laisser la possibilité à d'autres applications de récupérer ces données pour présenter les sites aileurs.

- Créer une route `api/website`
- Créer la méthode de controler associée
- Dans cette méthode, envoyer une requête à la bdd via `client.query`
- Renvoyer le résultat en json

## Exercice API 2

Faire de même pour une route `api/website/:id` qui doit renvoyer en json les infos d'un site en fonction de l'id demandé

Si possible prévoir aussi les scénarios d'erreur

---



Cette saison on a commencé à travailler avec des bases de données. On va dynamiser le site pilori avec des informations provenant d'une base de données

## Exercice 1 - Analyse

Un MCD a été fourni dans `./db/mcd.jpg`, je te laisse en prendre connaissance

## Exercice 2 - Mise en place

Tu remarqueras dans le dossier `db`, la présence d'un script `migration.sql`

- Crée un utilisateur de base de données et une base de données en te connectant à ton serveur postgresql local avec le super utilisateur `postgres`
- Execute le fichier de migration pour créer les table dans cette basse de données nouvellement créé

## Exercice 3 - Première requête

Tu remarqueras toujours dans le même dossier la présence d'un script `seeding.sql`, seulement il est vide

- Ajoute une requête pour insérer les données suivantes dans la table `website`

```
-- premier site
'Google', 
'google',
'Il y a un tout petit problème.',
'https://www.google.com/',
'Ordinateur',
'Casse-tête'

-- deuxième site
'Wikipédia',
'wikipedia',
'Pas jojo',
'https://fr.wikipedia.org/',
'Mobile',
'Bloquant'

-- troisième site
'Facebook',
'facebook',
'Nul',
'https://facebook.com/',
'Mobile',
'Bloquant'

-- quatrième site
'Npm',
'npm',
'Des soucis',
'https://www.npmjs.com/',
'Mobile',
'Casse-tête'
```

- N'oublie pas d'executer ensuite ce script de seeding

## Exercice 4 - Connexion à la BDD

En lançant le serveur avec `npm run dev` on obtient une erreur du module de connexion `database.js` indiquant qu'un mot de passe est obligatoire, qu'est-ce qui manque pour se connecter à la base de données nouvellement créée ?

## Exercice 5 - Requête SQL dans notre projet node

La page d'accueil ne présente pour l'instant aucun site. On veut présenter les 3 derniers sites.

- Trouve la route et la méthode de contrôleur associée à cette page d'accueil
- Récupère les 3 derniers sites (les sites possédant les 3 derniers id) en intérogeant ta base de données dans le contrôleur
- Passe ta liste de site à la vue (à la place du tableau vide présent)

## Exercice 6 - Requête paramétrée

Les pages de détail d'un site ne présente pour l'instant aucune information. On veut les infos du site demandé

- Trouve la route et la méthode de contrôleur associée aux pages de détail d'un site
- Récupère les informations du site demandé en intérogeant ta bdd dans le contrôleur
- Passe les infos de ton site à la vue (à la place de l'objet vide présent)
- Au fait pense aussi à gérer les cas d'erreur

## Exercice 7 - Utilisation d'une méthode active record

Les sites ajoutés via le formulaire d'ajouter ne persistent pas en base de données, on veut régler ça

- Trouve la méthode de contrôleur associée à l'action du formulaire d'ajout d'un site en POST
- Un commentaire est présent dedans, regarde le
- Le modèle `Website` propose une méthode permettant d'insérer notre objet en base données selon le principe d'active record, identifie cette méthode
- Execute cette méthode (pense à attendre avec `await`) à la validation du formulaire pour enregistrer le site nouvellement créé

## Exercice 8 - Utilisation d'une méthode statique

La page de profil d'un utilisateur n'affiche pas l'email, on veut régler ça

- Inscris toi sur le site en créant un compte
- Au moment de la connexion on arrive sur une page profil décevante, on veut y voir notre email
- Trouve la route et la méthode de contrôleur correspondant à la page profil
- Une méthode statique du modèle `User` permet de récupérer un objet utilisateur par son id, identifie cette méthode
- Execute cette méthode dans le contrôleur pour récupérer ton objet utilisateur et passer ses informations à la vue à la place de l'objet vide, tu peux essayer de lui passer un id en dur en argument dans un premier temps pour tester
- Remplace l'id en dur par l'id de l'utilisateur connecté, tu le trouveras en session. A toi de retrouver comment lire les informations présentes dans la session

## Aller plus loin

Bon si tu as fait tout ça c'est super bien. Mais si tu t'ennuies voilà quelques idées pour t'occuper :

- Crée une méthode active record pour essayer : par exemple dans la méthode `loginAction` de `authController` on a une requête pour trouver un utilisateur par son email, pourquoi pas en faire une méthode statique du modèle `User` ?
- Notre MCD indiquait un possible lien entre nos user et nos sites, refléchis à ce qu'il faudrait mettre en place pour traduire ce lien
- N'importe quoi d'autre qui te ferait plaisir
