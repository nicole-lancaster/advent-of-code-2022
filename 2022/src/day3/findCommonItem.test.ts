import { findCommonItem } from "./findCommonItem";

describe("findCommonItem function", () => {
  test("should return an array of the common rucksack item between the two rucksack compartments, from each rucksack", () => {
    const input = [
      [
        ["J", "p", "g", "W"],
        ["r", "h", "p", "c"],
      ],
      [
        ["s", "F", "M", "f", "s"],
        ["F", "S", "r", "r", "F"],
      ],
    ];
    const output = findCommonItem(input);
    expect(output).toEqual(["p", "F"]);
  });
});
