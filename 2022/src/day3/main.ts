import { findCommonItem } from "./findCommonItem";
import { parseScrambledRucksacks as parseScrambledRucksacks } from "./parseScrambledRucksacks";
import { sumItemPriority } from "./sumItemPriority";

export const inputDataFile = "input.txt";

const parsedData = parseScrambledRucksacks(inputDataFile);
const commonRucksackItems = findCommonItem(parsedData);
const sumOfPriorities = sumItemPriority(commonRucksackItems);
