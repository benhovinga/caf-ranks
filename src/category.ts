import { getRanksByCategory, Rank } from "./rank";
import { type I18nField } from "./types";

export class Category {
  label: I18nField;
  minLevel: number;
  maxLevel: number;

  constructor(label: I18nField, minLevel: number, maxLevel: number) {
    this.label = label;
    this.minLevel = minLevel;
    this.maxLevel = maxLevel;
  }

  get ranks(): Rank[] {
    return getRanksByCategory(this);
  }
}

export const categories = {
  flagOfficer: new Category(
    {
      en: "General/Flag Officers",
      fr: "Officiers généraux",
    },
    16,
    19
  ),
  seniorOfficer: new Category(
    {
      en: "Senior Officers",
      fr: "Officiers supérieurs",
    },
    13,
    15
  ),
  juniorOfficer: new Category(
    {
      en: "Junior Officers",
      fr: "Officiers subalternes",
    },
    10,
    12
  ),
  subordinateOfficer: new Category(
    {
      en: "Subordinate Officer",
      fr: "Officier subordonné",
    },
    9,
    9
  ),
  seniorNCO: new Category(
    {
      en: "Warrant Officers, Petty Officers and Senior Non-Commissioned Officers",
      fr: "Adjudants, officiers mariniers et sous-officiers supérieurs",
    },
    5,
    8
  ),
  juniorNCM: new Category(
    {
      en: "Junior Non-Commissioned Members",
      fr: "Militaires du rang subalternes",
    },
    1,
    4
  ),
};

export function getCategoryByLevel(level: number): Category {
  const search = Object.values(categories).find((category) => {
    return level <= category.maxLevel && level >= category.minLevel;
  });
  if (!search) throw Error(`Cannot find category with level ${level}.`);
  return search;
}

export function getCategoryArray(reverse = false): Category[] {
  return Object.values(categories).sort((a, b) =>
    reverse ? a.minLevel - b.minLevel : b.minLevel - a.minLevel
  );
}
