# Canadian Armed Forces (CAF) Ranks

> This library in under active development. Please check compatibility before upgrading.

Ranks in the Canadian Armed Forces mark a person's position in its hierarchical structure. As people gain more responsibility and authority, they earn promotions in rank.

This library enables the easy reusability of the Canadian Armed Forces Ranks within your own project.

## Features

- Support for both official languages (English and French)
- Static [JSON document](src/caf-ranks.json)
- Typing support
- Built-in filtering methods:
  - Filter by uniform (Army, Air, Navy)
  - Filter by Rank Category (NCM, NCO, Junior Officer ...)

## Install

This library is available using the Node Package Manager.

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
  filterRanksByUniform,
  filterRanksByCategory,
} from "caf-ranks";

// Log all English Navy ranks to the console
const navyRanks = filterRanksByUniform(allRanks, "RCN");
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
const airForceRanks = filterRanksByUniform(allRanks, "RCAF");
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

// Log the English version of the Army uniform to the console
console.log(rankMeta.uniform.CA.en);
/*
  Canadian Army
*/

// Log the French version of the Flag Officer category to the console
console.log(rankMeta.category.FlagOfficer.fr);
/*
  Officiers généraux
*/
```

## License

This project is licensed under the [Open Government Licence - Canada 2.0](https://open.canada.ca/en/open-government-licence-canada)

See [LICENSE.md](LICENSE.md)

## Sources

- Tables found on [Military Ranks - Canada.ca](https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html) ([2023-08-30](https://web.archive.org/web/20230913233331/https://www.canada.ca/en/services/defence/caf/military-identity-system/rank-appointment-insignia.html))
- Tables found on [Grades militaires - Canada.ca](https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html) ([2023-08-30](https://web.archive.org/web/20230930204703/https://www.canada.ca/fr/services/defense/fac/systeme-identite-militaire/insignes-grade-fonction.html))
- CSV files found on [Rank Appointment Insignia - Open Government Portal](https://open.canada.ca/data/en/dataset/a503f0de-b081-4b8f-ae69-651f8c95d676)
