import { Uniform, I18nField } from "../types";
import Category from "./Category";
import categories from "../categories";
import config from "../config";

const { MAX_LEVEL, MIN_LEVEL } = config;

class Rank {
  title: I18nField;
  abbreviation: I18nField;
  level: number;
  uniforms: Uniform[];

  constructor(
    title: I18nField,
    abbreviation: I18nField,
    level: number,
    uniforms: Uniform[]
  ) {
    if (!title.en && !title.fr) throw Error("title cannot be empty");
    this.title = title;
    if (!abbreviation.en && !abbreviation.fr)
      throw Error("abbreviation cannot be empty");
    this.abbreviation = abbreviation;
    if (level < MIN_LEVEL)
      throw Error(`level cannot be less than ${MIN_LEVEL}`);
    if (level > MAX_LEVEL)
      throw Error(`level cannot be greater than ${MAX_LEVEL}`);
    this.level = level;
    if (uniforms.length < 1) throw Error(`uniforms requires at least one`);
    this.uniforms = uniforms;
  }

  get category(): Category {
    const categorySearch = categories.find((category) => {
      return this.level <= category.maxLevel && this.level >= category.minLevel;
    });
    if (!categorySearch) {
      throw Error(`Cannot find category with level ${this.level}.`);
    } else {
      return categorySearch;
    }
  }
}

export default Rank;
