import { getRanksByUniform, Rank } from "./rank";
import { type I18nField } from "./types";

export class Uniform {
  title: I18nField;

  constructor(title: I18nField) {
    this.title = title;
  }

  get ranks(): Rank[] {
    return getRanksByUniform(this);
  }
}

export const uniforms = {
  CA: new Uniform({ en: "Canadian Army", fr: "Armée canadienne" }),
  RCAF: new Uniform({
    en: "Royal Canadian Air Force",
    fr: "Aviation royale canadienne",
  }),
  RCN: new Uniform({
    en: "Royal Canadian Navy",
    fr: "Marine royale canadienne",
  }),
};
