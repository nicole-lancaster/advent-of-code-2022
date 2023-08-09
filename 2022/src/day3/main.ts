import { findCommonItem } from "./findCommonItem";
import { parseScrambledRucksacks as parseScrambledRucksacks } from "./parseScrambledRucksacks";

export const inputDataFile = "input.txt";

const parsedData = parseScrambledRucksacks(inputDataFile);
const commonRucksackItem = findCommonItem(parsedData);
