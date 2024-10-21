import { I18nField } from "../types";
import Rank from "../models/Rank";
import ranks from "../ranks";
import config from "../config";

const { MAX_LEVEL, MIN_LEVEL } = config;

class Category {
  label: I18nField;
  minLevel: number;
  maxLevel: number;

  constructor(label: I18nField, minLevel: number, maxLevel: number) {
    if (!label.en && !label.fr) throw Error(`label cannot be empty`);
    this.label = label;
    if (minLevel < MIN_LEVEL || minLevel > MAX_LEVEL)
      throw Error(`minLevel must be within range (${MIN_LEVEL}-${MAX_LEVEL})`);
    this.minLevel = minLevel;
    if (maxLevel < MIN_LEVEL || maxLevel > MAX_LEVEL)
      throw Error(`maxLevel must be within range (${MIN_LEVEL}-${MAX_LEVEL})`);
    this.maxLevel = maxLevel;
  }

  get ranks(): Rank[] {
    return ranks.filter((rank) => {
      return rank.level <= this.maxLevel && rank.level >= this.minLevel;
    });
  }
}

export default Category;
