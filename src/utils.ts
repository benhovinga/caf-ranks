import { Category, I18nField, Rank, Uniform } from "./types";
import categories from "./categories";
import config from "./config";

const { MIN_LEVEL, MAX_LEVEL } = config;

function validateRankLevel(level: number): number {
  if (level < MIN_LEVEL) {
    throw Error(
      `Rank level cannot be less than ${MIN_LEVEL}, received ${level}.`
    );
  } else if (level > MAX_LEVEL) {
    throw Error(
      `Rank level cannot be more than ${MAX_LEVEL}, received ${level}.`
    );
  }
  return level;
}

function getCategory(level: number): Category {
  const categoryResult = categories.find((category) => {
    return level <= category.maxLevel && level >= category.minLevel;
  });
  if (!categoryResult) {
    throw Error(`Cannot find category with level ${level}.`);
  }
  return categoryResult;
}

function getRankCategory(rank: Rank): I18nField {
  return getCategory(validateRankLevel(rank.level)).title;
}

function filterRanksByCategory(ranks: Rank[], category: Category): Rank[] {
  return ranks.filter((rank) => {
    return rank.level <= category.maxLevel && rank.level >= category.minLevel;
  });
}

function filterRanksByUniform(ranks: Rank[], uniform: Uniform): Rank[] {
  return ranks.filter((rank) => {
    return rank.uniforms.filter((_uniform) => _uniform === uniform).length > 0;
  });
}

export default {
  getRankCategory,
  filterRanksByCategory,
  filterRanksByUniform,
};

export const exportedForTesting = {
  validateRankLevel,
  getCategory,
};
