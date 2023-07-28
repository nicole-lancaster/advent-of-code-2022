import { countScoresForPart1Strategy } from "./countScoresForPart1Strategy";
import { countScoresForPart2Strategy } from "./countScoresForPart2Strategy";
import { parseEncodedMoves } from "./parseEncodedMoves";

export const inputDataFile = "input.txt";

const parsedData = parseEncodedMoves(inputDataFile);
const totalScoreForPart1 = countScoresForPart1Strategy(parsedData);
const totalScoreForPart2 = countScoresForPart2Strategy(parsedData);
