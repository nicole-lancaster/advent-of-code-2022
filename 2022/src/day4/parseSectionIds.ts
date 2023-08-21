import fs from "fs";
import { inputDataFile } from "./main";

export const parseSectionIds = (inputDataFile: string) => {
  const parsedData: string = fs.readFileSync(
    `${__dirname}/${inputDataFile}`,
    "utf-8",
  );
  const sectionIdPairs = parsedData.split("\n");

  const splitPairs = sectionIdPairs.map((pairOfTwo) => {
    return pairOfTwo.split(",");
  });
  return splitPairs;
};
