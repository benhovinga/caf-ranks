import {
  allRanks,
  filterRanksByCategory,
  filterRanksByElement,
  RankCategory,
  CAFElement,
} from "../src/main";

test.todo("test everything");

describe("Test allRanks", () => {
  test("can get category name", () => {
    expect(allRanks[0].getCategoryName()).toEqual(
      expect.objectContaining({
        en: expect.any(String),
        fr: expect.any(String),
      })
    );
  });
});

describe("Test filterRanksByCategory()", () => {
  test.each([
    ["FlagOfficer", 8],
    ["SeniorOfficer", 6],
    ["JuniorOfficer", 6],
    ["SubordinateOfficer", 2],
    ["SeniorNCO", 8],
    ["JuniorNCM", 10],
  ])("%s category has %i items", (category, expected) => {
    expect(
      filterRanksByCategory(allRanks, category as RankCategory)
    ).toHaveLength(expected);
  });
});

describe("Test filterRanksByElement()", () => {
  test.each([
    ["CA", 19],
    ["RCAF", 19],
    ["RCN", 19],
  ])("%s element has %i items", (element, expected) => {
    expect(filterRanksByElement(allRanks, element as CAFElement)).toHaveLength(
      expected
    );
  });
});
