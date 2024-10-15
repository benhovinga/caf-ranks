export type BilingualString = {
    en: string;
    fr: string;
};
export type Command = "CA" | "RCAF" | "RCN";
export type RankCategory = "FlagOfficer" | "SeniorOfficer" | "JuniorOfficer" | "SubordinateOfficer" | "SeniorNCO" | "JuniorNCM";
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
export declare const rankMeta: RankMeta;
export declare const allRanks: Rank[];
export declare function filterRanksByCommand(ranks: Rank[], command: Command): Rank[];
export declare function filterRanksByCategory(ranks: Rank[], category: RankCategory): Rank[];
declare const _default: {
    rankMeta: RankMeta;
    allRanks: Rank[];
    filterRanksByCommand: typeof filterRanksByCommand;
    filterRanksByCategory: typeof filterRanksByCategory;
};
export default _default;
