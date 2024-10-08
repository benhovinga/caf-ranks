export type BilingualString = {
    en: string;
    fr: string;
};
export type CAFElement = "CA" | "RCAF" | "RCN";
export type RankCategory = "FlagOfficer" | "SeniorOfficer" | "JuniorOfficer" | "SubordinateOfficer" | "SeniorNCO" | "JuniorNCM";
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
export declare const rankMeta: RankMeta;
export declare const allRanks: Rank[];
export declare function filterRanksByElement(ranks: Rank[], cafElement: CAFElement): Rank[];
export declare function filterRanksByCategory(ranks: Rank[], rankCategory: RankCategory): Rank[];
declare const _default: {
    rankMeta: RankMeta;
    allRanks: Rank[];
    filterRanksByElement: typeof filterRanksByElement;
    filterRanksByCategory: typeof filterRanksByCategory;
};
export default _default;
