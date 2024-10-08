import ranksJSON from "./caf-ranks.json";

export type BilingualString = { en: string; fr: string };

export type CAFElement = "CA" | "RCAF" | "RCN";

export type RankCategory =
  | "FlagOfficer"
  | "SeniorOfficer"
  | "JuniorOfficer"
  | "SubordinateOfficer"
  | "SeniorNCO"
  | "JuniorNCM";

export type RankMeta = {
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
};

export type Rank = {
  level: number;
  element: CAFElement[];
  title: BilingualString;
  abbreviation: BilingualString;
  category: RankCategory;
  getCategoryName: () => BilingualString;
};

export const rankMeta: RankMeta = {
  element: ranksJSON.element,
  category: ranksJSON.category,
};

export const allRanks: Rank[] = ranksJSON.allRanks.map((rank) => ({
  ...rank,
  element: rank.element as CAFElement[],
  category: rank.category as RankCategory,
  getCategoryName: function () {
    return rankMeta.category[this.category];
  },
}));

export function filterRanksByElement(
  ranks: Rank[],
  cafElement: CAFElement
): Rank[] {
  return ranks.filter((rank) => {
    return rank.element.filter((element) => element === cafElement).length > 0;
  });
}

export function filterRanksByCategory(
  ranks: Rank[],
  rankCategory: RankCategory
): Rank[] {
  return ranks.filter((rank) => rank.category === rankCategory);
}

export default {
  rankMeta,
  allRanks,
  filterRanksByElement,
  filterRanksByCategory,
};
