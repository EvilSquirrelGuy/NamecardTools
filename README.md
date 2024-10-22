**EN 🇬🇧** | [PL 🇵🇱](README_pl.md)

NamecardTools
=============

![License](https://img.shields.io/github/license/EvilSquirrelGuy/NamecardTools)
![repo size](https://img.shields.io/github/repo-size/EvilSquirrelGuy/NamecardTools)
![top language](https://img.shields.io/github/languages/top/EvilSquirrelGuy/NamecardTools)
![Issues or Pull Requests](https://img.shields.io/github/issues/EvilSquirrelGuy/NamecardTools)
![last commit](https://img.shields.io/github/last-commit/EvilSquirrelGuy/NamecardTools)
![project status](https://img.shields.io/badge/project_status-draft-8a2be2)


A NextJS Web App for doing certain things with Genshin Impact's namecards!

It might not amount to anything, this is just an idea I happened to have.

You can find the current version of the app here: https://namecard-tools.vercel.app/


## Developing

To start the local development server, run:

```zsh
pnpm dev
```

Then you can open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Localisation

This project supports different UI languages. I've added a couple as an example, but if you notice an issue with one of my 
translations or would like to contribute by translating the UI to your own language, do the following.

1. Copy `messages/en.json` to `messages/xx.json` (where `xx` is the locale code for your language.)
2. Translate all the strings to said language.
3. Add the language code to `src/i18n/config.ts` in the following places:
  * The `locales` field
  * The `localeData` field
  * *These should follow the pattern already outlined in there.*
4. Add the json file to a pull request and wait patiently for feedback/changes.


## APIs and Libraries

* enkanetwork.js
  * https://www.npmjs.com/package/enkanetwork.js#asset-finder
* dndkit - for drag and drop
  * https://docs.dndkit.com/presets/sortable
* ~~enka.network~~
  * ~~API Docs: https://api.enka.network/#/api~~
  * ~~Loading images: https://api.enka.network/#/api?id=icons-and-images~~
  * ~~Namecard data: https://github.com/EnkaNetwork/API-docs/blob/master/store/namecards.json~~