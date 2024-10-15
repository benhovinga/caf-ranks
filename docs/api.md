# API

TODO

## array `allRanks: Rank[]` :id=array-all-ranks

`allRanks` is an array of [`Rank`](#type-rank) items. You will usually iterate over this array using the `.forEach()` method to list all of the ranks.

```javascript
import { allRanks } from "caf-ranks";

// Log all English and French ranks to the console
allRanks.forEach((rank) => {
  console.log(`${rank.title.en} (${rank.abbreviation.en})`);
  console.log(`${rank.title.fr} (${rank.abbreviation.fr})`);
});
```

> See [type Rank](#type-rank) for more on it's usage.

!> `allRanks` includes all ranks for all Commands. To only load the ranks for one Command (such as RCN) use [`filterRanksByCommand()`](#function-filter-ranks-by-command) function.

## object `rankMeta: RankMeta` :id=object-rank-meta

`rankMeta` is an object that strongly follows the type [`RankMeta`](#type-rank-meta). This object is used for translations of commands and categories.

```javascript
import { rankMeta } from "caf-ranks";

// Output the CA command in English and French
console.log(`${rankMeta.command.CA.en} / ${rankMeta.command.CA.fr}`);

// Output the JuniorNCM category in English and French
console.log(
  `${rankMeta.category.JuniorNCM.en} / ${rankMeta.category.JuniorNCM.fr}`
);
```

> See [type RankMeta](#type-rank-meta) for more on it's usage

## function `filterRanksByCategory(): Ranks[]` :id=function-filter-ranks-by-category

TODO

## funtion `filterRanksByCommand(): Ranks[]` :id=function-filter-ranks-by-command

TODO

## type `BilingualString` :id=type-bilingual-string

TODO

## type `Command` :id=type-command

TODO

## type `Rank` :id=type-rank

TODO

## type `RankCategory` :id=type-rank-category

TODO

## type `RankMeta` :id=type-rank-meta

TODO

## default import :id=default-import

This libray exports an object of all properies and methods but not types. If you want to use types, use the named import for that type.
