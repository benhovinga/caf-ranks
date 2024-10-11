import { describe, expect, test } from "@jest/globals";
import "./toBeAnyOf";
import "./toContainAnyOf";

import {
  allRanks,
  filterRanksByCategory,
  filterRanksByCommand,
  RankCategory,
  Command,
  rankMeta,
} from "../src/main";

describe("test rankMeta object", () => {
  test("command property is expected object shape", () => {
    expect(rankMeta.command).toEqual(
      expect.objectContaining({
        CA: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
        RCAF: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
        RCN: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
      })
    );
  });

  test("category property is expected object shape", () => {
    expect(rankMeta.category).toEqual(
      expect.objectContaining({
        FlagOfficer: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
        SeniorOfficer: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
        JuniorOfficer: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
        SubordinateOfficer: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
        SeniorNCO: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
        JuniorNCM: expect.objectContaining({
          en: expect.any(String),
          fr: expect.any(String),
        }),
      })
    );
  });
});

describe("test allRanks array", () => {
  test("has exactly 40 items", () => {
    expect(allRanks).toHaveLength(40);
  });

  describe.each(allRanks)('item $# "$title.en"', (rank) => {
    describe("level property", () => {
      test("has property", () => {
        expect(rank).toHaveProperty("level");
      });
      test("is a number between 1 and 19", () => {
        expect(rank.level).toBeGreaterThanOrEqual(1);
        expect(rank.level).toBeLessThanOrEqual(19);
      });
    });

    describe("command property", () => {
      test("has property", () => {
        expect(rank).toHaveProperty("commands");
      });
      test("has a valid command", () => {
        expect(rank.commands).toContainAnyOf(["CA", "RCAF", "RCN"]);
      });
      test("has no more than 2 commands", () => {
        expect(rank.commands.length).toBeLessThanOrEqual(2);
      });
    });

    describe("title property", () => {
      test("has property", () => {
        expect(rank).toHaveProperty("title");
      });
      test("is a bilingual object", () => {
        expect(rank.title).toEqual(
          expect.objectContaining({
            en: expect.any(String),
            fr: expect.any(String),
          })
        );
      });
    });

    describe("abbreviation property", () => {
      test("has property", () => {
        expect(rank).toHaveProperty("abbreviation");
      });
      test("is bilingual object", () => {
        expect(rank.abbreviation).toEqual(
          expect.objectContaining({
            en: expect.any(String),
            fr: expect.any(String),
          })
        );
      });
    });

    describe("category property", () => {
      test("has property", () => {
        expect(rank).toHaveProperty("category");
      });
      test("is a valid category", () => {
        expect(rank.category).toBeAnyOf([
          "FlagOfficer",
          "SeniorOfficer",
          "JuniorOfficer",
          "SubordinateOfficer",
          "SeniorNCO",
          "JuniorNCM",
        ]);
      });
    });

    describe("getCategoryName method", () => {
      test("has method", () => {
        expect(rank).toHaveProperty("getCategoryName");
      });
      test("method returns bilingual string", () => {
        expect(rank.getCategoryName()).toEqual(
          expect.objectContaining({
            en: expect.any(String),
            fr: expect.any(String),
          })
        );
      });
    });
  });
});

describe("test filterRanksByCategory function", () => {
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

describe("test filterRanksByElement function", () => {
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
