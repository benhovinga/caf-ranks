import { expect } from "@jest/globals";
import type { MatcherFunction } from "expect";

const toContainAnyOf: MatcherFunction<[list: unknown]> = function (
  actual,
  list
) {
  if (!Array.isArray(actual) || !Array.isArray(list)) {
    throw TypeError("These must be of type Array!");
  }

  const pass = !actual
    .map((element) => {
      return list.includes(element);
    })
    .includes(false);

  if (pass) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          actual
        )} not to contain any of ${this.utils.printExpected(`${list}`)}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          actual
        )} to contain any of ${this.utils.printExpected(`${list}`)}`,
      pass: false,
    };
  }
};

expect.extend({ toContainAnyOf });

declare module "expect" {
  interface AsymmetricMatchers {
    toContainAnyOf(list: Array<any>): void;
  }
  interface Matchers<R> {
    toContainAnyOf(list: Array<any>): R;
  }
}
