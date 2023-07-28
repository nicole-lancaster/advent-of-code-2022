import fs from "fs";

export const parseEncodedMoves = (inputDataFile: string) => {
  const parsedData = fs.readFileSync(`${__dirname}/${inputDataFile}`, "utf-8");

  const pairsOfMoves = parsedData.split("\n");
  const splitPairs = pairsOfMoves.map((pair) => {
    return pair.split("\n");
  });

  return splitPairs;
};
