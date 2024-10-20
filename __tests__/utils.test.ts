import { Category, Rank } from "../src/types";
import utils, { exportedForTesting } from "../src/utils";
import categories from "../src/categories";

const { getRankCategory, filterRanksByCategory, filterRanksByUniform } = utils;
const { validateRankLevel, getCategory } = exportedForTesting;

const levelCategoryTable: [number, Category][] = [
  [1, categories[0]],
  [2, categories[0]],
  [3, categories[0]],
  [4, categories[0]],
  [5, categories[1]],
  [6, categories[1]],
  [7, categories[1]],
  [8, categories[1]],
  [9, categories[2]],
  [10, categories[3]],
  [11, categories[3]],
  [12, categories[3]],
  [13, categories[4]],
  [14, categories[4]],
  [15, categories[4]],
  [16, categories[5]],
  [17, categories[5]],
  [18, categories[5]],
];

/**
 * Create a range of numbers between start and end (inclusive)
 * @param start first number in the range
 * @param end last number in the range
 * @returns Array of incrementing numbers
 */
function range(start: number, end: number): number[] {
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

describe("internal function validateRankLevel", () => {
  test.each(range(1, 19))("it returns valid level %i", (level) => {
    expect(validateRankLevel(level)).toBe(level);
  });

  test("it throws error if level 0", () => {
    expect(() => {
      validateRankLevel(0);
    }).toThrow("Rank level cannot be less than");
  });

  test("it throws error if level 20", () => {
    expect(() => {
      validateRankLevel(20);
    }).toThrow("Rank level cannot be more than");
  });
});

describe("internal function getCategory", () => {
  test.each(levelCategoryTable)(
    "it returns the category for level %i",
    (level, category) => {
      expect(getCategory(level)).toBe(category);
    }
  );

  test("it throws error if level is 0", () => {
    expect(() => getCategory(0)).toThrow("Cannot find category");
  });

  test("it throws error if level is 20", () => {
    expect(() => getCategory(20)).toThrow("Cannot find category");
  });
});

describe("exported function getRankCategory", () => {
  const testRank = {
    level: 1,
    uniforms: [],
    title: { en: "test", fr: "test" },
    abbreviation: { en: "test", fr: "test" },
  } as Rank;
  test.each(levelCategoryTable)(
    "it returns the category title for a given rank.level %i",
    (level, category) => {
      testRank.level = level;
      expect(getRankCategory(testRank)).toBe(category.title);
    }
  );
  test("it throws error for invalid rank", () => {
    testRank.level = 0;
    expect(() => getRankCategory(testRank)).toThrow(
      "Rank level cannot be less than"
    );
    testRank.level = 20;
    expect(() => getRankCategory(testRank)).toThrow(
      "Rank level cannot be more than"
    );
  });
});

test.todo("test filterRanksByCategory");

test.todo("test filterRanksByUniform");
