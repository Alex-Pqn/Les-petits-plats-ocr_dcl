![Les petits plats Icon](/src/assets/full-icon.png)
## Développez un algorithme de recherche en JavaScript - Les petits plats
### P7 - OpenClassrooms "Développeur Concepteur Logiciel"

#### Contexte du projet

Vous êtes freelance et vous venez d’être missionné par l’entreprise “Les petits plats” en tant que Développeur Front-end pour une mission de 3 mois. Après avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g.  
Sandra, cheffe de projet, est en charge de la digitalisation de l'entreprise avec la création de ce site web. Pour l’instant, elle travaille uniquement avec des freelances comme vous, avant de créer une équipe en interne pour gérer ce projet.

Dans un long email que Sandra vous envoie, vous retenez ces différents points :

- Implémenter la [fonctionnalité de recherche](/src/assets/Cas%20d'utilisation%20du%20filtrage%20des%20recettes.pdf) dans l'interface utilisateur en respectant [la maquette](/src/assets/UI-Design.pdf). Celle-ci doit être fluide et sera pour l'instant basée sur un [fichier JSON](/data/recipes.json) contenant les recettes. L’utilisateur doit pouvoir filtrer les recettes selon deux axes :
  1. Une barre principale permettant de rechercher des mots ou groupes de lettres dans le titre, les ingrédients ou la description
  2. Recherche par mots clés dans les ingrédients, les ustensiles ou les appareils
  
- Deux versions de l'algorithme de recherche devront être réalisées :
  - Une première version utilisant les boucles natives (while, for...)
  - La seconde version en programmation fonctionnelle avec les méthodes de l'objet array (foreach, filter, map, reduce)
  
- Après avoir conçu les deux versions de l'algorithme, il sera nécessaire de les tester et de ne retenir que la plus performante. Pour cela on peut utiliser un outil de comparaison de performance comme [Jsben.ch](https://jsben.ch/).

- Rédaction d'un document appelé "fiche d’investigation de fonctionnalité" comparant les deux versions de l'algorithme, accompagné d'un algorigramme.

#### Objectifs
- Site web créé en HTML5/CSS3 & Javascript
- Création d'une branche [functional-algo](https://github.com/Alex-Pqn/Les-petits-plats-ocr_dcl/tree/functional-algo) et [native-algo](https://github.com/Alex-Pqn/Les-petits-plats-ocr_dcl/tree/native-algo) regroupant les deux versions de l'algorithme de recherche. La branche principale contient la version la plus performante des deux.
- Rédaction de la [fiche d’investigation de fonctionnalité](/src/assets/Fiche%20d'investigation.pdf)
- Responsive
- Passage du validateur W3C

### [Prévisualisation du site](https://alex-pqn.github.io/Les-petits-plats-ocr_dcl/)

## Start App

Clone the project then open the [index.html](./index.html) file in your browser or use an extension to start a local server on this file.

> [!NOTE]  
> A [Github Pages preview](https://alex-pqn.github.io/Les-petits-plats-ocr_dcl/) is also available for this project

## Project setup (optional)

- You will need to have Node and `npm` installed locally on your machine.

### Install
```
npm install
```

### Compiles and hot-reloads for development
```
npm run watch
```

### Compiles and minifies for production
```
npm run build
```

## Preview

![Les petits plats](/src/assets/Les%20petits%20plats%202.png)
<br/>
<br/>
<br/>
![Les petits plats](/src/assets/Les%20petits%20plats.png)
