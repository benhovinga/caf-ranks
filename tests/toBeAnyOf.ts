import { expect } from "@jest/globals";
import type { MatcherFunction } from "expect";

const toBeAnyOf: MatcherFunction<[list: unknown]> = function (
  actual: any,
  list
) {
  if (!Array.isArray(list)) {
    throw TypeError("These must be of type Array!");
  }

  const pass = list.includes(actual);

  if (pass) {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          actual
        )} not to be any of ${this.utils.printExpected(`${list}`)}`,
      pass: true,
    };
  } else {
    return {
      message: () =>
        `expected ${this.utils.printReceived(
          actual
        )} to be any of ${this.utils.printExpected(`${list}`)}`,
      pass: false,
    };
  }
};

expect.extend({ toBeAnyOf });

declare module "expect" {
  interface AsymmetricMatchers {
    toBeAnyOf(list: Array<any>): void;
  }
  interface Matchers<R> {
    toBeAnyOf(list: Array<any>): R;
  }
}
