import ranksJSON from "./caf-ranks.json";

export type BilingualString = { en: string; fr: string };

export type Uniform = "CA" | "RCAF" | "RCN";

export type RankCategory =
  | "FlagOfficer"
  | "SeniorOfficer"
  | "JuniorOfficer"
  | "SubordinateOfficer"
  | "SeniorNCO"
  | "JuniorNCM";

export type RankMeta = {
  uniform: {
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
  uniforms: Uniform[];
  title: BilingualString;
  abbreviation: BilingualString;
  category: RankCategory;
  getCategoryName: () => BilingualString;
};

export const rankMeta: RankMeta = {
  uniform: ranksJSON.uniform,
  category: ranksJSON.category,
};

export const allRanks: Rank[] = ranksJSON.allRanks.map((rank) => ({
  ...rank,
  uniforms: rank.uniforms as Uniform[],
  category: rank.category as RankCategory,
  getCategoryName: function () {
    return rankMeta.category[this.category];
  },
}));

export function filterRanksByUniform(ranks: Rank[], uniform: Uniform): Rank[] {
  return ranks.filter((rank) => {
    return rank.uniforms.filter((_uniform) => _uniform === uniform).length > 0;
  });
}

export function filterRanksByCategory(
  ranks: Rank[],
  category: RankCategory
): Rank[] {
  return ranks.filter((rank) => rank.category === category);
}

export default {
  rankMeta,
  allRanks,
  filterRanksByUniform,
  filterRanksByCategory,
};
