#  Projet : Robot Autonome avec Système de Feux Tricolores Intelligents

##  Auteurs
- **Jean Jifferson DELLY**
- **Dülze Hkloë Shaikelta Sassie LOUIS**

---

##  Description du projet

Ce projet consiste à concevoir et programmer un robot autonome basé sur **CuteBot** et **Micro:bit**, capable de simuler un **système de feux tricolores** tout en intégrant une **détection d’obstacles en temps réel**.

L’objectif est de combiner :
- 🚦 la logique des feux de circulation  
- 🤖 l’intelligence embarquée en robotique  

afin de créer un robot capable de se déplacer de manière **autonome, intelligente et sécurisée**.

---

##  Évolution du projet

###  Version initiale : Simulation simple

Au début, le projet était une simulation basique des feux tricolores :

- 🔴 **Feu rouge** → arrêt du robot  
- 🟡 **Feu orange** → déplacement lent  
- 🟢 **Feu vert** → déplacement rapide  

Chaque état :
- affichait un motif LED spécifique  
- jouait un son distinct  
- contrôlait la vitesse des moteurs  

####  Limitation
Le robot ne tenait pas compte de son environnement.  
Il pouvait donc entrer en collision avec des obstacles.

---

###  Version améliorée : Mode intelligent (sécurisé)

Nous avons ensuite amélioré le système en ajoutant :

- ✅ Détection d’obstacles avec capteur ultrason  
- ✅ Arrêt d’urgence automatique  
- ✅ Recul en cas de danger  
- ✅ Contrôle intelligent du mouvement  

Le robot est ainsi devenu **réactif à son environnement**, capable d’éviter les collisions.

---

##  Fonctionnement du système

###  Cycle principal

Le robot exécute en boucle le cycle suivant :

1. 🟢 Feu vert → avancer rapidement  
2. 🟡 Feu orange → ralentir  
3. 🔴 Feu rouge → s’arrêter  

Ce cycle se répète indéfiniment.

---

###  Détection d’obstacles

Le robot utilise un capteur ultrasonique pour mesurer la distance :

- Si un obstacle est détecté à moins de **15 cm** :
  -  arrêt immédiat  
  -  alerte sonore  
  -  recul automatique  
  -  arrêt du cycle en cours  

---

###  Fonction principale : `safe_run()`

Cette fonction est le cœur du système intelligent.

Contrairement à une exécution classique, elle :
- découpe le temps en intervalles (200 ms)  
- vérifie en continu la présence d’obstacles  
- adapte le comportement du robot en temps réel  

👉 Cela permet d’éviter les collisions et d’assurer la sécurité.

---

###  Arrêt d’urgence

En cas de détection d’un obstacle :

- les moteurs s’arrêtent immédiatement  
- un motif LED d’alerte s’affiche  
- un son grave est émis  
- le robot recule automatiquement  

---

###  Indicateurs visuels et sonores

Chaque état du feu est associé à :

-  un affichage LED  
-  une fréquence sonore spécifique  
-  une vitesse de déplacement différente  

---

##  Technologies utilisées

- Micro:bit  
- CuteBot  
- Capteur ultrasonique  
- Python (MakeCode / MicroPython)

---

##  Objectifs pédagogiques

Ce projet permet de développer des compétences en :

- programmation embarquée  
- robotique  
- systèmes temps réel  
- logique conditionnelle  
- interaction capteurs/actionneurs  
- conception de systèmes autonomes  

---

##  Perspectives d’amélioration

Améliorations possibles :

-  éviter les obstacles en tournant (au lieu de reculer)  
-  afficher la distance sur la matrice LED  
-  ajouter un contrôle manuel (bouton ou Bluetooth)  
-  implémenter une navigation autonome avancée  

---

##  Conclusion

Ce projet montre l’évolution :

➡️ d’un système simple et statique  
➡️ vers un système intelligent, autonome et sécurisé  

Il met en évidence l’importance de :
- l’adaptabilité  
- la sécurité  
- la prise de décision en temps réel  

dans les systèmes robotiques modernes.

---
> Open this page at [https://sass-1.github.io/robot-feu-de-signalisation/](https://sass-1.github.io/robot-feu-de-signalisation/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/sass-1/robot-feu-de-signalisation** and import

## Edit this project

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/sass-1/robot-feu-de-signalisation** and click import

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
