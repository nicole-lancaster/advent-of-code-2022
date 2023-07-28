import { countScoreFromPairs } from "./countScoreFromPairs";

describe("countScoreFromPairs function", () => {
  test("should return the total score for the player given a sub-arrray of moves", () => {
    const input = [["C Z"], ["A X"], ["C Y"], ["B Z"], ["C X"]]
    const output = countScoreFromPairs(input);
    expect(output).toEqual(28);
  });
});