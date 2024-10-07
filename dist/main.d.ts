export type BilingualString = {
    en: string;
    fr: string;
};
export declare enum CAFElement {
    CA = "CA",
    RCAF = "RCAF",
    RCN = "RCN"
}
export declare enum RankCategory {
    FlagOfficer = "FlagOfficer",
    SeniorOfficer = "SeniorOfficer",
    JuniorOfficer = "JuniorOfficer",
    SubordinateOfficer = "SubordinateOfficer",
    SeniorNCO = "SeniorNCO",
    JuniorNCM = "JuniorNCM"
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
export declare const rankMeta: RankMeta;
export interface Rank {
    level: number;
    element: CAFElement[];
    title: BilingualString;
    abbreviation: BilingualString;
    category: RankCategory;
    getCategoryName: () => BilingualString;
}
export declare const allRanks: Rank[];
export declare function getRanksByElement(ranks: Rank[], element: CAFElement): Rank[];
export declare function getRanksByCategory(ranks: Rank[], category: RankCategory): Rank[];
export default allRanks;
