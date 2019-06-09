[![Build Status](https://travis-ci.com/keinepartei/gruenen-blocker-plugin.svg?branch=master)](https://travis-ci.com/keinepartei/gruenen-blocker-plugin)

![Bündnis 90/Die Grünen Content Blocker](app/images/icon-128.png)

# Bündnis 90/Die Grünen Content Blocker von keiner Partei

An alle, die das Internet zu einem besseren Ort machen möchten oder einfach nur genervt sind.
Nehmt euch unseren Grünen Blocker vor und macht ihn noch größer, noch kompatibler und noch besser.

Der Grünen Blocker **blockiert Inhalte von Bündnis 90/Die Grünen und Konsorten** zuverlässig.

Neu!

Optional blockiert der Grünen Blocker auch Inhalte anderer Parteien - SPD, Die Linke, FDP, usw.

Verwenden Sie den Grünen Blocker von keiner Partei. Er ist viel besser als der [AfD-Blocker](https://github.com/dieparteidiepartei/afd-blocker-plugin) von der Partei Die PARTEI.

## Features

- verfügbar für FireFox und Google Chrome,
- verfügbar in verschiedenen Sprachen (derzeit Deutsch und Englisch),
- blockiert Inhalte von Bündnis 90/Die Grünen,
- blockiert optional Inhalte von anderen Parteien bspw. SPD, Die Linke, CDU, CSU, FDP, usw.,
- funktioniert mit so gut wie allen bekannten Social Media Portalen, Suchmaschinen und Nachrichten-Seiten:

Facebook, Instagram, Twitter und Youtube. DuckDuckGo, Startpage und Qwant. Bild, FAZ, Focus, Handelsblatt, Hessische/Niedersächsische Allgemeine, Morgenpost, N-TV, Nürnberger Nachrichten und Zeitung, Spiegel, Stern, Stuttgarter Zeitung, Süddeutsche Zeitung, Tagesschau, Tagesspiegel, TAZ, ZDF und der Zeit, und vielen weiteren.

## Download

- [Chrome Extension](https://chrome.google.com/webstore/detail/gr%C3%BCnen-blocker/hhpcjimcpbbihmamgphcafoeohhblmpo)
- [Firefox Add-on (German)](https://addons.mozilla.org/de/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (English)](https://addons.mozilla.org/en-US/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Spanish)](https://addons.mozilla.org/es/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Turkish)](https://addons.mozilla.org/tr/firefox/addon/gr%C3%BCnen-content-blocker/)

## Installation

Install [Node.js](https://nodejs.org/en/) and run:

	$ npm install

## Production

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

## Development

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

## Getting started

### Add a custom blocker

The basic functionality is implemented in `app/scripts/blocker.js`

Each site has its own blocker within `app/scripts`.

Copy a blocker script and try to implement an additional blocker for your desired site. Invoke the blocker class procedures with its run script `app/scripts/run_blocker.js`. See sample `app/scripts/blocker_sueddeutsche.js`:

		console.log("Call content blocker.");
		
		import { Blocker } from "./blocker";
		
		let blocker = new Blocker([
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
		]);
		
		require("./run_blocker").run(blocker);

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

### Add new contents to be blocked

tbd.

## Build

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

### Fixes

tbd.

## Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts.

## Webextension toolbox docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
