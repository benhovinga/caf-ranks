# Quick Start

## Install

The caf-ranks package is available on the [npmjs](https://www.npmjs.com/package/caf-ranks) package repository.

```bash
npm install caf-ranks
```

## Examples

### Basic Usage

```javascript
import { allRanks } from "caf-ranks";

// Log all English ranks to the console
allRanks.forEach((rank) => {
  console.log(rank.title.en);
});
/*
  General
  Admiral
  Lieutenant-General
  Vice-Admiral
  Major-General
  (...)
*/

// Log all French rank abberviations to the console
allRanks.forEach((rank) => {
  console.log(rank.abbreviation.fr);
});
/*
  gén
  am
  lgén
  vam
  mgén
  (...)
*/
```

### Filtering Ranks

```javascript
import {
  allRanks,
  filterRanksByCommand,
  filterRanksByCategory,
} from "caf-ranks";

// Log all English Navy ranks to the console
const navyRanks = filterRanksByCommand(allRanks, "RCN");
navyRanks.forEach((rank) => {
  console.log(rank.title.en);
});
/*
  Admiral
  Vice-Admiral
  Rear-Admiral
  Commodore
  Captain(N)
  (...)
*/

// Log all French Air Force NCM ranks to the console
const airForceRanks = filterRanksByCommand(allRanks, "RCAF");
const airForceNCMRanks = filterRanksByCategory(airForceRanks, "JuniorNCM");
airForceNCMRanks.forEach((rank) => {
  console.log(rank.title.fr);
});
/*
  Caporal-chef
  Caporal
  Aviateur (formé)
  Aviateur (confirmé)
*/
```

### Using Rank Meta

```javascript
import { rankMeta } from "caf-ranks";

// Log the English version of the Army element to the console
console.log(rankMeta.command.CA.en);
/*
  Canadian Army
*/

// Log the French version of the Flag Officer category to the console
console.log(rankMeta.category.FlagOfficer.fr);
/*
  Officiers généraux
*/
```
