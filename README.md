[![Build Status](https://travis-ci.com/keinepartei/gruenen-blocker-plugin.svg?branch=master)](https://travis-ci.com/keinepartei/gruenen-blocker-plugin)

Languages:
[![English](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/GB.svg)](README.md) -
[![German](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/DE.svg)](README.de.md) -
[![French](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/FR.svg)](README.fr.md) -
[![Turkish](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/TR.svg)](README.tr.md) -
[![Spanish](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/ES.svg)](README.es.md) -

![Bündnis 90/Die Grünen Content Blocker](app/images/icon-128.png)

# Greens Content Blocker

The digital greens blocker **blocks contents about Alliance 90 / The Greens and consorts** reliable.

New!

Optionally the plugin blocks contents about other parties as well.

Use the Greens Blocker. It's much better than the [AfD-Blocker by Die PARTEI](https://github.com/dieparteidiepartei/afd-blocker-plugin)!

# Features

- available for FireFox and Google Chrome,
- available in different user languages (now English, German, French, Turkish and Spanish),
- blocks contents about Alliance 90 / The Greens (Bündnis 90/Die Grünen),
- optional blocks contents about German parties: SPD, Die Linke, CDU, CSU oder FDP,
- optional blocks contents about French parties: LaREM, LR, FI, PS oder EELV,
- optional blocks contents about Turkish parties: AKP, CHP, HDP, MHP oder İYİ Parti,
- optional blocks contents about Spanish parties: PSOE, PP, Cuidadanos, Unidos/Unidas Podemos (UP) oder VOX,
- works with almost all social media sites, search engines and news sites:

Facebook, Instagram, Twitter, Youtube and Izlesene. DuckDuckGo, Startpage, Qwant and Yandex. Bild, FAZ, Focus, Handelsblatt, Hessische/Niedersächsische Allgemeine, Morgenpost, N-TV, Nürnberger Nachrichten und Zeitung, Spiegel, Stern, Stuttgarter Zeitung, Süddeutsche Zeitung, Tagesschau, Tagesspiegel, TAZ, ZDF, Die Zeit, and many more.

# User Downloads

- [Chrome Extension](https://chrome.google.com/webstore/detail/gr%C3%BCnen-blocker/hhpcjimcpbbihmamgphcafoeohhblmpo)
- [Firefox Add-on (German)](https://addons.mozilla.org/de/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (English)](https://addons.mozilla.org/en-US/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (French)](https://addons.mozilla.org/fr/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Spanish)](https://addons.mozilla.org/es/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Turkish)](https://addons.mozilla.org/tr/firefox/addon/gr%C3%BCnen-content-blocker/)

# Developers

## Installation of dependencies

Install [Node.js](https://nodejs.org/en/) and run:

	 npm install
	 
from project root directory.

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

## Getting started

### Add a custom blocker

The basic functionality is implemented in `app/scripts/blocker.js`

Each site has its own blocker within `app/scripts`.

Copy a blocker script and try to implement an additional blocker for your desired site. See sample `app/scripts/blocker_sueddeutsche.js`:

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

The blocker has to be activated in `app/manifest.json`:

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

### Add new contents to be blocked.

tbd.

### Fixes

tbd.

### Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts.

### Webextension toolbox docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
