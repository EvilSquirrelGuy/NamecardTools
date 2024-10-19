[EN 🇬🇧](README.md) | **PL 🇵🇱**

NamecardTools
=============

![licensja](https://img.shields.io/github/license/EvilSquirrelGuy/NamecardTools)
![rozmiar repo](https://img.shields.io/github/repo-size/EvilSquirrelGuy/NamecardTools)
![główny język](https://img.shields.io/github/languages/top/EvilSquirrelGuy/NamecardTools)
![problemy i pull requesty](https://img.shields.io/github/issues/EvilSquirrelGuy/NamecardTools)
![ostatni commit](https://img.shields.io/github/last-commit/EvilSquirrelGuy/NamecardTools)
![status projektu](https://img.shields.io/badge/project_status-ideas-8a2be2)


Aplikacja internetowa do robienia różnych rzeczy z namecard'ami z Genshin Impact!

Może nic z tego nie wyjść, ten project po prostu taki pomysł.

Możecie znaleźć aktualną wersję tutaj: https://namecard-tools.vercel.app/


## Budowanie

Aby zacząć lokalny serwer, wpiszcie:

```zsh
pnpm dev
```

Potem możecie odwiedzić [http://localhost:3000](http://localhost:3000) w przeglądarcę aby zobaczyć aktualną wersję.


## Lokalizowanie

## Localisation

This project supports different UI languages. I've added a couple as an example, but if you notice an issue with one of my 
translations or would like to contribute by translating the UI to your own language, do the following.

UI tego projektu jest dostępne w różnych językach. Dodałem parę jako przykład, ale jeżeli zauważycie problem z jedym z moich
tłumaczeń, albo byście chcieli wesprzeć rozwój projeku poprzez tłumaczenie UI na swój język, zróbcie następujące rzeczy.

1. Przekopiujcie `messages/en.json` do `messages/xx.json` (gdzie `xx` to kod lokala na twój język.)
2. Przetłumaczcie wszystkie hasła.
3. Dodajcie kod języka do `src/i18n/config.ts` w następujących miejscach:
  * W `locales`
  * W `localeData`
  * *Powinny mieć ten sam format co istniejące hasła*
4. Dodajcie plik JSON do pull requesta poczekajcie aż sprawdzę/zmienie treść.


## API i Biblioteki

* enkanetwork.js
  * https://www.npmjs.com/package/enkanetwork.js#asset-finder
* ~~enka.network~~
  * ~~API Docs: https://api.enka.network/#/api~~
  * ~~Loading images: https://api.enka.network/#/api?id=icons-and-images~~
  * ~~Namecard data: https://github.com/EnkaNetwork/API-docs/blob/master/store/namecards.json~~