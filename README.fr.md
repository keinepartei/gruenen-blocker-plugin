[![Build Status](https://travis-ci.com/keinepartei/gruenen-blocker-plugin.svg?branch=master)](https://travis-ci.com/keinepartei/gruenen-blocker-plugin)

Langues:
[![Anglais](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/GB.svg)](README.md) -
[![Allemand](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/DE.svg)](README.de.md) -
[![Français](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/FR.svg)](README.fr.md) -
[![Turc](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/TR.svg)](README.tr.md) -
[![Espagnol](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/ES.svg)](README.es.md) -

![Bloqueur de contenu verts](app/images/icon-128.png)

# Bloqueur de contenu verts

Le bloqueur digital de verts bloque le contenu relatif d'Alliance 90 / Les Verts et les consorts fiable.

Nouveau!

En option, le plugin bloque le contenu d'autres parties.

Utilisez le bloqueur de verts. C'est beaucoup mieux que le [AfD-Blocker de Die PARTEI](https://github.com/dieparteidiepartei/afd-blocker-plugin)!

# Caractéristiques

- disponible pour FireFox et Google Chrome,
- disponible dans différentes langues utilisateur (maintenant anglais, allemand, français, turc et espagnol),
- bloque le contenu d'Alliance 90 / Les Verts  (Bündnis 90/Die Grünen),
- bloque le contenu des parties allemandes en option: SPD, Die Linke, CDU, CSU ou FDP,
- bloque le contenu des parties françaises en option: LaREM, LR, FI, PS ou EELV,
- bloque le contenu des parties turques en option: AKP, CHP, HDP, MHP ou İYİ Parti,
- bloque le contenu des parties espagnoles en option: PSOE, PP, Cuidadanos, Unidos/Unidas Podemos (UP) ou VOX,
- fonctionne avec presque tous les sites de médias sociaux, moteurs de recherche et sites d'informations:

Facebook, Instagram, Twitter, Youtube and Izlesene. DuckDuckGo, Startpage, Qwant and Yandex. Bild, FAZ, Focus, Handelsblatt, Hessische/Niedersächsische Allgemeine, Morgenpost, N-TV, Nürnberger Nachrichten und Zeitung, Spiegel, Stern, Stuttgarter Zeitung, Süddeutsche Zeitung, Tagesschau, Tagesspiegel, TAZ, ZDF, Die Zeit, and many more.

# Téléchargements

- [Chrome Extension](https://chrome.google.com/webstore/detail/gr%C3%BCnen-blocker/hhpcjimcpbbihmamgphcafoeohhblmpo)
- [Firefox Add-on (Allemand)](https://addons.mozilla.org/de/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Anglais)](https://addons.mozilla.org/en-US/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Français)](https://addons.mozilla.org/fr/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Espagnol)](https://addons.mozilla.org/es/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Turc)](https://addons.mozilla.org/tr/firefox/addon/gr%C3%BCnen-content-blocker/)

# Développeurs / Développeuses

## Installation de dépendances

Installez [Node.js](https://nodejs.org/en/) et exécutez:

	 npm install
	 
de le répertoire racine du projet.

## Build production stage (./packages/)

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

## Build development stage (./dist/)

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

## Commencer

### Ajouter un bloqueur personnalisé

La fonctionnalité de base est implémentée dans `app/scripts/blocker.js`

Tous les site a son propre bloqueur au sein de `app/scripts`.

Copiez un script de blocage et essayez d'implémenter un bloqueur supplémentaire pour votre site souhaité. Voir échantillon `app/scripts/blocker_sueddeutsche.js`:

		console.log("Call content blocker.");
		
		import { Blocker } from "./blocker";
		
		new Blocker([
		    {
		        selector: 'li.element',
		        type: 'big'
		    },
		    {
		        selector: '.sz-teaserlist-element',
		        type: 'big'
		    },
		    {
		        selector: 'li.newsscannermodule__item',
		    },
		    {
		        selector: 'article',
		        type: 'big'
		    },
		    {
		        selector: 'div.entrylist__entry',
		        type: 'big'
		    },
		]).run();

Le bloqueur a été activé dans `app/manifest.json`:

      "content_scripts": [
        {
          "matches": [
            "*://*.sueddeutsche.de/*"
          ],
          "js": [
            "scripts/blocker_sueddeutsche.js"
          ],
          "css": [
            "css/overlay.css"
          ]
        },
        ...
      ]

### Ajouter un nouveau contenu à bloquer.

tbd.

### Fixes

tbd.

### Environnement

L'outil de construction définit une variable nommée `process.env.NODE_ENV` dans vos scripts.

### Webextension toolbox docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
