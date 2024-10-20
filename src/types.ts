export enum Uniform {
  CA = "CA",
  RCAF = "RCAF",
  RCN = "RCN",
}

export type I18nField = {
  en: string;
  fr: string;
};

export type Category = {
  minLevel: number;
  maxLevel: number;
  title: I18nField;
};

export type Rank = {
  level: number;
  // category can be determined using the level
  uniforms: Uniform[];
  title: I18nField;
  abbreviation: I18nField;
};
