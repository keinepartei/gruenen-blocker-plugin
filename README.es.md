[![Build Status](https://travis-ci.com/keinepartei/gruenen-blocker-plugin.svg?branch=master)](https://travis-ci.com/keinepartei/gruenen-blocker-plugin)

Languages:
[![Inglés](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/GB.svg)](README.md) -
[![Alemán](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/DE.svg)](README.de.md) -
[![Francés](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/FR.svg)](README.fr.md) -
[![Turco](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/TR.svg)](README.tr.md) -
[![Español](https://github.com/madebybowtie/FlagKit/blob/master/Assets/SVG/ES.svg)](README.es.md) -

![Bloqueador de contenido de verdes](app/images/icon-128.png)

# Bloqueador de contenido de verdes

El bloqueador digital de verdes **bloquea el contenido sobre Alianza 90/Los Verdes y consorts** confiable.

Nuevo!

Opcionalmente, la extensión del navegador también bloquea los contenidos de otras partes.

Usa el Bloqueador de Verdes. Es mucho mejor que el [Bloqueador de AfD de Die PARTEI](https://github.com/dieparteidiepartei/afd-blocker-plugin)!

# Características

- disponible para FireFox y Google Chrome,
- disponible en diferentes idiomas (ahora inglés, alemán, francés, turco y español),
- bloquea los contenidos sobre Alianza 90/Los Verdes (Bündnis 90/Die Grünen),
- opcional bloquea contenidos sobre partidos alemanes: SPD, Die Linke, CDU, CSU o FDP,
- opcional bloquea contenidos sobre partidos franceses: LaREM, LR, FI, PS o EELV,
- opcional bloquea contenidos sobre partidos turcos: AKP, CHP, HDP, MHP o İYİ Parti,
- opcional bloquea contenidos sobre partidos españoles: PSOE, PP, Cuidadanos, Unidos/Unidas Podemos (UP) o VOX,
- funciona con casi todos los sitios de redes sociales, motores de búsqueda y sitios de noticias:

Facebook, Instagram, Twitter, Youtube y Izlesene. DuckDuckGo, Startpage, Qwant and Yandex. Bild, FAZ, Focus, Handelsblatt, Hessische/Niedersächsische Allgemeine, Morgenpost, N-TV, Nürnberger Nachrichten y Zeitung, Spiegel, Stern, Stuttgarter Zeitung, Süddeutsche Zeitung, Tagesschau, Tagesspiegel, TAZ, ZDF, Die Zeit, y muchos mas.

# Descargas

- [Chrome Extension](https://chrome.google.com/webstore/detail/gr%C3%BCnen-blocker/hhpcjimcpbbihmamgphcafoeohhblmpo)
- [Firefox Add-on (Alemán)](https://addons.mozilla.org/de/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Inglés)](https://addons.mozilla.org/en-US/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Francés)](https://addons.mozilla.org/fr/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Español)](https://addons.mozilla.org/es/firefox/addon/gr%C3%BCnen-content-blocker/)
- [Firefox Add-on (Turco)](https://addons.mozilla.org/tr/firefox/addon/gr%C3%BCnen-content-blocker/)

# Desarrolladores

## Instalacion de dependencias

Instala [Node.js](https://nodejs.org/en/) y ejecuta:

	 npm install
	 
del directorio raíz del proyecto.

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

## Empezando

### Agregar un bloqueador personalizado

La funcionalidad básica se implementa en `app/scripts/blocker.js`

Cada sitio tiene su propio bloqueador dentro de `app/scripts`.

Copie un script de bloqueador e intente implementar un bloqueador adicional para el sitio deseado. Muestra de lago `app/scripts/blocker_sueddeutsche.js`:

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

El bloqueador ha sido activado en `app/manifest.json`:

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

### Añadir nuevos contenidos para ser bloqueados.

tbd.

### Fixes

tbd.

### Environment

La herramienta de compilación define una variable llamada `process.env.NODE_ENV` en tus scripts.

### Webextension toolbox docs

* [webextension-toolbox](https://github.com/HaNdTriX/webextension-toolbox)
