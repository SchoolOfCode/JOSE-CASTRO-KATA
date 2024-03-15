import { test, expect } from "vitest";
import { findMyFriends } from "./main";

test("should return 3 friends, given the list of my friends", () => {
  //arrange
  const friends = ["Juan", "Marcos", "Antonio", "Danilo", "Fran"];
  const expected = 3;
  //act
  const result = findMyFriends(friends);
  //asert
  expect(result).toBe(expected);
});
