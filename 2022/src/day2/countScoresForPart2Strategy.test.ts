import { countScoresForPart2Strategy } from "./countScoresForPart2Strategy";

describe("countScoresForPart2Strategy function", () => {
  test("should return the total score for the player given a sub-arrray of moves and the provided part 2 strategy guide", () => {
    const input = [["C Z"], ["A X"], ["C Y"], ["B Z"], ["C X"]];
    const output = countScoresForPart2Strategy(input);
    expect(output).toEqual(27);
  });
});
