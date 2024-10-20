import { Category } from "./types";

const categories: Category[] = [
  {
    minLevel: 1,
    maxLevel: 4,
    title: {
      en: "Junior Non-Commissioned Members",
      fr: "Militaires du rang subalternes",
    },
  },
  {
    minLevel: 5,
    maxLevel: 8,
    title: {
      en: "Warrant Officers, Petty Officers and Senior Non-Commissioned Officers",
      fr: "Adjudants, officiers mariniers et sous-officiers supérieurs",
    },
  },
  {
    minLevel: 9,
    maxLevel: 9,
    title: {
      en: "Subordinate Officer",
      fr: "Officier subordonné",
    },
  },
  {
    minLevel: 10,
    maxLevel: 12,
    title: {
      en: "Junior Officers",
      fr: "Officiers subalternes",
    },
  },
  {
    minLevel: 13,
    maxLevel: 15,
    title: {
      en: "Senior Officers",
      fr: "Officiers supérieurs",
    },
  },
  {
    minLevel: 16,
    maxLevel: 19,
    title: {
      en: "General/Flag Officers",
      fr: "Officiers généraux",
    },
  },
];

export default categories;
