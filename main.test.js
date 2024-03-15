import { test, expect } from "vitest";
import { findMyFriends } from "./main";

test("should return 3 friends, given my array with numbers", () => {
  //arrange
  const friends = ["Juan", "Marcos", "Antonio", "Danilo", "Fran"];
  const expected = 3;
  const result = findMyFriends(friends);
  expect(result).toBe(expected);
});
