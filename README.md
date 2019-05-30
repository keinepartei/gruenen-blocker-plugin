[![Build Status](https://travis-ci.com/keinepartei/gruenen-blocker-plugin.svg?branch=master)](https://travis-ci.com/keinepartei/gruenen-blocker-plugin)

![Bündnis 90/Die Grünen Content Blocker](app/images/icon-128.png)

# Bündnis 90/Die Grünen Content Blocker von keiner Partei

An alle, die das Internet zu einem besseren Ort machen möchten oder einfach nur genervt sind.
Nehmt euch unseren Grünen Blocker vor und macht ihn noch größer, noch kompatibler und noch besser.

Der Grünen Blocker blockiert Inhalte von Bündnis 90/Die Grünen und Konsorten zuverlässig.

Neu!

Optional blockiert der Grünen Blocker auch Inhalte anderer Parteien - SPD, Die Linke, FDP, usw.

Verwenden Sie den Grünen Blocker von keiner Partei. Er ist viel besser als der ([AfD-Blocker von der Partei Die PARTEI](https://github.com/dieparteidiepartei/afd-blocker-plugin)).

## Download

- [Chrome Extension](https://chrome.google.com/webstore/detail/gruenen-content-blocker-from/[TODO])
- [Firefox Add-on](https://addons.mozilla.org/de/firefox/addon/gruenen-content-blocker/)

## Install

Install [Node.js](https://nodejs.org/en/) and run:

	$ npm install

## Development

    npm run dev chrome
    npm run dev firefox
    npm run dev opera
    npm run dev edge

## Getting started

The basic functionality is implemented in `app/scripts/blocker.js`

Each site has its own blocker within `app/scripts`.
Try to copy one and build an additional blocker for another news website.

The blocker has to be activated in `app/manifest.json`:

      "content_scripts": [
        {
          "matches": [
            "*://www.sueddeutsche.de/*"
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

Invoke the blocker class procedures with its run script `app/scripts/run_blocker.js`:

		require("./run_blocker").run(blocker);

## Build

    npm run build chrome
    npm run build firefox
    npm run build opera
    npm run build edge

## Environment

The build tool also defines a variable named `process.env.NODE_ENV` in your scripts.

## Webextension toolbox docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
