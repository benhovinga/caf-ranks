import { describe, expect, test } from "@jest/globals";
import "./toBeAnyOf";
import "./toContainAnyOf";

import {
  allRanks,
  filterRanksByCategory,
  filterRanksByCommand,
  RankCategory,
  Command,
} from "../src/main";

describe("test allRanks", () => {
  test("has exactly 40 items", () => {
    expect(allRanks).toHaveLength(40);
  });
});

describe.each(allRanks)(
  'test properties of rank "$title.en" in allRanks',
  (rank) => {
    test("level property is number in range 1-19", () => {
      expect(rank).toHaveProperty("level");
      expect(rank.level).toBeGreaterThanOrEqual(1);
      expect(rank.level).toBeLessThanOrEqual(19);
    });

    test("commands property contains a valid command value", () => {
      expect(rank).toHaveProperty("commands");
      expect(rank.commands).toContainAnyOf(["CA", "RCAF", "RCN"]);
    });

    test("title property is bilingual string", () => {
      expect(rank).toHaveProperty("title");
      expect(rank.title).toEqual(
        expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        })
      );
    });

    test("abbreviation property is bilingual string", () => {
      expect(rank).toHaveProperty("abbreviation");
      expect(rank.abbreviation).toEqual(
        expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        })
      );
    });

    test("category property is a valid category", () => {
      expect(rank).toHaveProperty("category");
      expect(rank.category).toBeAnyOf([
        "FlagOfficer",
        "SeniorOfficer",
        "JuniorOfficer",
        "SubordinateOfficer",
        "SeniorNCO",
        "JuniorNCM",
      ]);
    });

    test("getCategoryName method returns bilingual string", () => {
      expect(rank.getCategoryName()).toEqual(
        expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        })
      );
    });
  }
);

describe("test filterRanksByCategory()", () => {
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

describe("test filterRanksByElement()", () => {
  test.each([
    ["CA", 19],
    ["RCAF", 19],
    ["RCN", 19],
  ])("%s element has %i items", (element, expected) => {
    expect(filterRanksByCommand(allRanks, element as Command)).toHaveLength(
      expected
    );
  });
});
