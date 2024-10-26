import ranksJSON from "./caf-ranks.json";

export type I18nField = { en: string; fr: string };

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
    CA: I18nField;
    RCAF: I18nField;
    RCN: I18nField;
  };
  category: {
    FlagOfficer: I18nField;
    SeniorOfficer: I18nField;
    JuniorOfficer: I18nField;
    SubordinateOfficer: I18nField;
    SeniorNCO: I18nField;
    JuniorNCM: I18nField;
  };
};

export type Rank = {
  level: number;
  uniforms: Uniform[];
  title: I18nField;
  abbreviation: I18nField;
  category: RankCategory;
  getCategoryName: () => I18nField;
};

export const rankMeta: RankMeta = {
  uniform: ranksJSON.uniform,
  category: ranksJSON.category,
};

export const allRanks: Rank[] = ranksJSON.allRanks.map((rank) => ({
  ...rank,
  uniforms: rank.uniforms as Uniform[],
  category: rank.category as RankCategory,
  getCategoryName: function (): I18nField {
    return rankMeta.category[this.category];
  },
}));

export function filterRanksByCategory(
  ranks: Rank[],
  category: RankCategory
): Rank[] {
  return ranks.filter((rank) => rank.category === category);
}

export function filterRanksByUniform(ranks: Rank[], uniform: Uniform): Rank[] {
  return ranks.filter((rank) => {
    return rank.uniforms.filter((_uniform) => _uniform === uniform).length > 0;
  });
}

export default {
  allRanks,
  rankMeta,
  filterRanksByCategory,
  filterRanksByUniform,
};
