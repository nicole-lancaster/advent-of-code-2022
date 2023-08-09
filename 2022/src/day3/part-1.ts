import { findCommonItem } from "./findCommonItem";
import { parseScrambledRucksacks as parseScrambledRucksacks } from "./parseScrambledRucksacks";
import { sumItemPriority } from "./sumItemPriority";

export const inputDataFile = "input.txt";

const parsedData: string[][][] = parseScrambledRucksacks(inputDataFile);
const commonRucksackItems: string[] = findCommonItem(parsedData);
const sumOfPriorities: number = sumItemPriority(commonRucksackItems);

console.log(`Part 1 answer: ${sumOfPriorities}`);
process.exit(0);
