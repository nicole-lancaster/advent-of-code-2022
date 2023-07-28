import { countScoreFromPairs } from "./countScoreFromPairs";
import { parseEncodedMoves } from "./parseEncodedMoves";

export const inputDataFile = "input.txt";

const parsedData = parseEncodedMoves(inputDataFile);
const totalScore = countScoreFromPairs(parsedData);
