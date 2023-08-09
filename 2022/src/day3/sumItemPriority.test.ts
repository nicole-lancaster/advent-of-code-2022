import { sumItemPriority } from "./sumItemPriority";

describe("sumItemPriority function", () => {
  test("should return a single number which is a sum of all the priority numbers of each common item for al he", () => {
    const input = ["p", "L", "P", "v", "t", "s"];
    const output = sumItemPriority(input);
    expect(output).toBe(157);
  });
});
