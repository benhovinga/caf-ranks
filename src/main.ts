import ranksJSON from "./caf-ranks.json";

export type BilingualString = { en: string; fr: string };

export enum CAFElement {
  CA = "CA",
  RCAF = "RCAF",
  RCN = "RCN",
}

export enum RankCategory {
  FlagOfficer = "FlagOfficer",
  SeniorOfficer = "SeniorOfficer",
  JuniorOfficer = "JuniorOfficer",
  SubordinateOfficer = "SubordinateOfficer",
  SeniorNCO = "SeniorNCO",
  JuniorNCM = "JuniorNCM",
}

export interface RankMeta {
  element: {
    CA: BilingualString;
    RCAF: BilingualString;
    RCN: BilingualString;
  };
  category: {
    FlagOfficer: BilingualString;
    SeniorOfficer: BilingualString;
    JuniorOfficer: BilingualString;
    SubordinateOfficer: BilingualString;
    SeniorNCO: BilingualString;
    JuniorNCM: BilingualString;
  };
}

export const rankMeta: RankMeta = {
  element: ranksJSON.element,
  category: ranksJSON.category,
};

export interface Rank {
  level: number;
  element: CAFElement[];
  title: BilingualString;
  abbreviation: BilingualString;
  category: RankCategory;
  getCategoryName: () => BilingualString;
}

export const allRanks: Rank[] = ranksJSON.allRanks.map((rank) => ({
  ...rank,
  element: rank.element as CAFElement[],
  category: rank.category as RankCategory,
  getCategoryName: function () {
    return rankMeta.category[this.category];
  },
}));

export function getRanksByElement(ranks: Rank[], element: CAFElement): Rank[] {
  return ranks.filter((rank) => {
    return rank.element.filter((elem) => elem === element).length > 0;
  });
}

export function getRanksByCategory(
  ranks: Rank[],
  category: RankCategory
): Rank[] {
  return ranks.filter((rank) => rank.category === category);
}

export default allRanks;
