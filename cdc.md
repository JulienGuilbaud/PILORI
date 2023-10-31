# Cahier des charges - PilOri

## Sommaire 

- [Cahier des charges - PilOri](#cahier-des-charges---pilori)
  - [Sommaire](#sommaire)
  - [Contexte](#contexte)
  - [Objectifs](#objectifs)
  - [Budget](#budget)
  - [Délai](#délai)
  - [Itérations par avenant](#itérations-par-avenant)
  - [Design](#design)
  - [Contenus](#contenus)
    - [Boutons de report](#boutons-de-report)
    - [Header (présent sur toutes les pages du site)](#header-présent-sur-toutes-les-pages-du-site)
    - [Footer (présent sur toutes les pages du site)](#footer-présent-sur-toutes-les-pages-du-site)
    - [Page d'accueil](#page-daccueil)
    - [Page Toutes les Tomates](#page-toutes-les-tomates)
    - [Page Site tomaté](#page-site-tomaté)
    - [Page Connexion](#page-connexion)
    - [Page d'inscription](#page-dinscription)
    - [Pages Mentions légales, Plan du site, Contact](#pages-mentions-légales-plan-du-site-contact)
    - [Page Membre](#page-membre)
    - [Page Membre - Modification](#page-membre---modification)
    - [Page d'erreur 404](#page-derreur-404)
    - [Langue](#langue)
  - [Contraintes techniques](#contraintes-techniques)
    - [Accessibilité](#accessibilité)
    - [Compatibilité](#compatibilité)
    - [Responsive](#responsive)
    - [Technologies utilisées](#technologies-utilisées)
  - [Livraisons](#livraisons)
- [Annexes](#annexes)
  - [Wireframes](#wireframes)
    - [Wireframe Accueil](#wireframe-accueil)
    - [Wireframe Inscription](#wireframe-inscription)
    - [Wireframe Connexion](#wireframe-connexion)
    - [Wireframe Page Membre](#wireframe-page-membre)
    - [Wireframe Page Membre - Modification](#wireframe-page-membre---modification)
    - [Wireframe Site tomaté](#wireframe-site-tomaté)
    - [Wireframe Toutes les tomates](#wireframe-toutes-les-tomates)
  - [Images du site](#images-du-site)
    - [Logo de PilOri](#logo-de-pilori)
    - [Bandeau de la homepage](#bandeau-de-la-homepage)
    - [Image utilisateur non connecté](#image-utilisateur-non-connecté)
    - [Image utilisateur connecté sans avatar](#image-utilisateur-connecté-sans-avatar)


## Contexte

T'Omatz est une association de sensibilisation à l'accessibilité web. 

Dans le cadre de son activité, elle souhaite mettre en place un site web permettant de recenser les divers sites ne respectant ni les normes, ni les standards d'accessibilité.

PilOri est un site communautaire où les utilisateurs dénoncent les sites où ils ont rencontré des problèmes. Chaque utilisateur peut alors "lancer des tomates" (le terme "tomater" sera employé au cours de ce projet) sur le report et le commenter. 

Le site sera sans objectif lucratif et permettra aux internautes de souligner les problèmes rencontrés sur chaque site afin d'inciter ceux-ci à effectuer des corrections nécessaires.

## Objectifs

* Sensibilisation à l'accessibilité
* Prise de conscience des entreprises

## Budget

Le budget pour l'ensemble de la prestation est fixé à un montant maximal de 80 000€ TTC facturés en jours/homme sur la base d'un TJM fixé à 582€ TTC.

Chaque livraison sera accompagnée d'un rapport du nombre de jours/homme consommés par activité.

## Délai

Le site devra être mis en ligne au plus tard le 20/06/2023.

Des pénalités de retard pourront être demandées par le client en cas de dépassement jugé trop conséquent et imputable au prestataire dans la limite légale de 10% du montant total de facturation TTC.

## Itérations par avenant

A été contractualisé que le contrat serait sujet à des avenants après chaque itération afin que le client reste toujours au centre du projet.
Lors de chaque avenant aura lieu la mise à jour des sections relatives à l'itération en cours mais également des sections suivantes :

* [Technologies utilisées](#technologies-utilisées)
* [Livraisons](#livraisons)

## Design

Les wireframes du site sont disponibles en annexe [Wireframes](#wireframes)

Un site épuré qui offre une lecture facile des contenus. Le choix des couleurs sera transmis par le client par avenant au présent cahier des charges.

## Contenus

### Boutons de report

Une liste de boutons sera disponible sur chaque affichage des report (liste ou report unique)

* L'utilisation de chaque bouton nécessite d'être connecté, si un utilisateur non connecté clique sur un des boutons suivants sans être connecté, il est redirigé vers l'accueil :
* Bouton Tomate pour tomater le report
* Bouton Confirmation de dysfonctionnement (permet d'avoir la date du dernier constat de dysfonctionnement)
* Bouton Dysfonctionnement réparé

### Header (présent sur toutes les pages du site)
* Barre de navigation:
  * Logo de **PilOri** qui mènera vers l'introduction de la page d'accueil [Logo de PilOri](#logo-de-pilori) fournie en annexe,
  * Lien "Dénoncer" qui mènera vers le formulaire de dénonciation de la page d'accueil
  * Lien "Toutes les tomates" qui mènera vers la page recensant tous les reports
  * Une barre de recherche qui mènera vers la page recensant tous les reports filtrés sur la recherche (en cas de recherche vide: afficher tous les reports)
  * Une image qui renverra sur la page de connexion *si l'utilisateur n'est pas connecté*, *sinon* sur sa page profil:
    * Si l'utilisateur n'est *pas connecté* affiche l'image [Image utilisateur non connecté](#image-utilisateur-non-connecté) fournie en annexe, 
    * Si l'utilisateur est *connecté et ne dispose pas d'avatar*, affiche l'image [Image utilisateur connecté sans avatar](#image-utilisateur-connecté-sans-avatar) fournie en annexe, 
    * Si l'utilisateur est *connecté et dispose d'un avatar*, affiche son avatar

### Footer (présent sur toutes les pages du site)
* Liens vers les pages : Plan du site, mentions légales et contact.

### Page d'accueil
* [Wireframe Accueil](#wireframe-accueil)
* Bandeau de la page d'accueil [Bandeau de la homepage](#bandeau-de-la-homepage) fournie en annexe.
* Section introduction : Nom du site contenant un paragraphe de description.
* Section "Les PIRES !" : Liste des 5 sites les plus tomatés avec:
  * Les [Boutons de report](#boutons-de-report)
* Formulaire de dénonciation

### Page Toutes les Tomates
* [Wireframe Toutes les tomates](#toutes-les-tomates)
* Contient tous les reports enregistrés avec une pagination
* Bouton "Reporter un site" menant vers le formulaire de décnonciation de la page d'accueil

### Page Site tomaté
* [Wireframe Site tomaté](#wireframe-site-tomaté)
* Contenu:
  * Auteur du report avec avatar
  * Nom du site tomaté
  * Bouton de partage sur les réseaux sociaux
  * Logo du site tomaté (si fourni)
  * Description du dysfonctionnement
  * Type de dysfonctionnement
  * Support sur lequel apparaît le dysfonctionnement (Smartphone, ordinateur, tablette)
  * Vidéos / images (selon contenu transmis par l'utilisateur)
  * URL de la page dysfonctionnant (ou url du site si la page est privée)
  * Espace commentaires (dépliable)
  * Nombre de tomates
  * Nombre de confirmations de dysfonctionnement
  * Nombre vérifications de dysfonctionnement réparé
  * [Boutons de report](#boutons-de-report)

### Page Connexion
* [Wireframe Connexion](#wireframe-connexion)
* Contenu:
  * Input login
  * Input mot de passe
  * Bouton de connexion
  * Lien "Je n'ai pas de compte" qui renvoie vers la page d'inscription

### Page d'inscription
* [Wireframe Inscription](#wireframe-connexion)
* Contenu: 
  * Input adresse mail
  * Input pseudonyme
  * Input mot de passe
  * Input de validation du mot de passe (doit contenir le même mot de passe que l'input précédent)
  * Lien "J'ai déjà un compte" qui renvoie vers la page de connexion

### Pages Mentions légales, Plan du site, Contact
* Précisions en avenant, laisser les pages vides pour le moment

### Page Membre
* [Wireframe Inscription](#wireframe-page-membre)
* S'ouvre au clic sur l'image dans la barre de navigation OU au clic sur un pseudo sur le site
* Affiche les informations du membre:
  * Pseudo
  * Avatar
  * Membre depuis *date*
  * Liste des sites tomatés
  * Liste des sites tomatés
  * Bouton d'édition (présent uniquement si l'utilisateur est connecté et qu'il est en train de consulter sa propre page de profil) => Renvoie vers la page d'édition de profil

### Page Membre - Modification
* [Wireframe Inscription](#wireframe-page-membre---modification)
* S'ouvre au clic sur le bouton d'édition de profil
* Permet de modifier les informations suivantes:
  * Email
  * Pseudonyme
  * Mot de passe (avec vérification de l'ancien mot de passe)
  * Avatar
* Contient un bouton "Mettre à jour" qui ne met à jour uniquement les informations modifiées

### Page d'erreur 404
* Affichée dans le cas ou la page n'est pas trouvée

### Langue
* le site ne sera affiché qu'en Français

## Contraintes techniques

### Accessibilité

Une attention particulière devra être accordée à l'accessibilité du site, T'Omatz ne souhaite pas être tomaté sur son propre site.

* Le site devra être conforme aux règles d'accessibilité WCAG niveau AA (possibilité de se référer au référentiel RGAA).
* Des tests pourront être effectués avec les différentes technologies d'assistance afin de vérifier la cohérence des parcours utilisateurs dans différents contextes.

### Compatibilité

Le site devra fonctionner sur les navigateurs récents (Firefox, Chrome, Safari)

### Responsive

Le site devra correctement s'afficher sur l'ensemble des écrans (à partir de 320px de large) et s'adapter en fonction du support.

### Technologies utilisées
* HTML pour contruire des pages sémantiques et accessibles

## Livraisons
* La première livraison est prévue le 15/12/2022

# Annexes

## Wireframes

### Wireframe Accueil

![](./documents/images/wireframes/Accueil.png)

### Wireframe Inscription

![](./documents/images/wireframes/Inscription.png)

### Wireframe Connexion

![](./documents/images/wireframes/Connexion.png)

### Wireframe Page Membre

![](./documents/images/wireframes/Page_Membre.png)

### Wireframe Page Membre - Modification

![](./documents/images/wireframes/Page_Membre_Modification.png)

### Wireframe Site tomaté

![](./documents/images/wireframes/Site_tomate.png)

### Wireframe Toutes les tomates

![](./documents/images/wireframes/Toutes_les_tomates.png)

## Images du site

### Logo de PilOri

![](favicon.svg)

### Bandeau de la homepage

![](./documents/images/bandeau.png)

### Image utilisateur non connecté

![](./documents/images/not_logged.png)

### Image utilisateur connecté sans avatar

![](./documents/images/logged.png)

