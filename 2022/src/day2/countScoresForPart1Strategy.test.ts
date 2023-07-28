import { countScoresForPart1Strategy } from "./countScoresForPart1Strategy";

describe("countScoresForPart1Strategy function", () => {
  test("should return the total score for the player given a sub-arrray of moves", () => {
    const input = [["C Z"], ["A X"], ["C Y"], ["B Z"], ["C X"]];
    const output = countScoresForPart1Strategy(input);
    expect(output).toEqual(28);
  });
});
