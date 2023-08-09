import { findCommonItem } from "./findCommonItem";
import { parseScrambledRucksacks as parseScrambledRucksacks } from "./parseScrambledRucksacks";
import { sumItemPriority } from "./sumItemPriority";

export const inputDataFile = "input.txt";

// const parsedData: string[][][] = parseScrambledRucksacks(inputDataFile);
// const commonRucksackItems: string[] = findCommonItem(parsedData);

const sumOfPriorities: number = sumItemPriority([]);

console.log(`Part 2 answer: ???`);
process.exit(0);
