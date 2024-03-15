import { test, expect } from "vitest";
import { findMyFriends } from "./main";

test("should return 0 friends, given the list of my friends", () => {
  //arrange
  const friends = ["Juanin", "Marcos", "Antonio", "Danilo", "Francisco"];
  const expected = 0;
  //act
  const result = findMyFriends(friends);
  //asert
  expect(result).toBe(expected);
});
test("should return 0, given the list of my friends", () => {
  //arrange
  const friends = [];
  const expected = 0;
  //act
  const result = findMyFriends(friends);
  //asert
  expect(result).toBe(expected);
});

test("should return 3 friends, given the list of my friends", () => {
  //arrange
  const friends = ["Juan", "Marco", "Antonio", "Danilo", "Fran"];
  const expected = 3;
  //act
  const result = findMyFriends(friends);
  //asert
  expect(result).toBe(expected);
});

test("should return 2 friends, given the list of my friends", () => {
  //arrange
  const friends = ["Juan", "Marcos", "Antonio", "Danilo", "Fran"];
  const expected = 2;
  //act
  const result = findMyFriends(friends);
  //asert
  expect(result).toBe(expected);
});
