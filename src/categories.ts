import Category from "./models/Category";

const categories: Category[] = [
  {
    minLevel: 1,
    maxLevel: 4,
    label: {
      en: "Junior Non-Commissioned Members",
      fr: "Militaires du rang subalternes",
    },
  },
  {
    minLevel: 5,
    maxLevel: 8,
    label: {
      en: "Warrant Officers, Petty Officers and Senior Non-Commissioned Officers",
      fr: "Adjudants, officiers mariniers et sous-officiers supérieurs",
    },
  },
  {
    minLevel: 9,
    maxLevel: 9,
    label: {
      en: "Subordinate Officer",
      fr: "Officier subordonné",
    },
  },
  {
    minLevel: 10,
    maxLevel: 12,
    label: {
      en: "Junior Officers",
      fr: "Officiers subalternes",
    },
  },
  {
    minLevel: 13,
    maxLevel: 15,
    label: {
      en: "Senior Officers",
      fr: "Officiers supérieurs",
    },
  },
  {
    minLevel: 16,
    maxLevel: 19,
    label: {
      en: "General/Flag Officers",
      fr: "Officiers généraux",
    },
  },
].map(
  (category) =>
    new Category(category.label, category.minLevel, category.maxLevel)
);

export default categories;
