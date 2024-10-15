export type BilingualString = {
    en: string;
    fr: string;
};
export type Uniform = "CA" | "RCAF" | "RCN";
export type RankCategory = "FlagOfficer" | "SeniorOfficer" | "JuniorOfficer" | "SubordinateOfficer" | "SeniorNCO" | "JuniorNCM";
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
export declare const rankMeta: RankMeta;
export declare const allRanks: Rank[];
export declare function filterRanksByUniform(ranks: Rank[], uniform: Uniform): Rank[];
export declare function filterRanksByCategory(ranks: Rank[], category: RankCategory): Rank[];
declare const _default: {
    rankMeta: RankMeta;
    allRanks: Rank[];
    filterRanksByUniform: typeof filterRanksByUniform;
    filterRanksByCategory: typeof filterRanksByCategory;
};
export default _default;
