import ranksJSON from "./caf-ranks.json";

export type BilingualString = { en: string; fr: string };

export type Command = "CA" | "RCAF" | "RCN";

export type RankCategory =
  | "FlagOfficer"
  | "SeniorOfficer"
  | "JuniorOfficer"
  | "SubordinateOfficer"
  | "SeniorNCO"
  | "JuniorNCM";

export type RankMeta = {
  command: {
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
  commands: Command[];
  title: BilingualString;
  abbreviation: BilingualString;
  category: RankCategory;
  getCategoryName: () => BilingualString;
};

export const rankMeta: RankMeta = {
  command: ranksJSON.command,
  category: ranksJSON.category,
};

export const allRanks: Rank[] = ranksJSON.allRanks.map((rank) => ({
  ...rank,
  commands: rank.commands as Command[],
  category: rank.category as RankCategory,
  getCategoryName: function () {
    return rankMeta.category[this.category];
  },
}));

export function filterRanksByElement(ranks: Rank[], command: Command): Rank[] {
  return ranks.filter((rank) => {
    return rank.commands.filter((_command) => _command === command).length > 0;
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
