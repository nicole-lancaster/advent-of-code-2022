import fs from "fs";
import { inputDataFile } from "./part-1";

export function readLines(inputDataFile: string) {
  const parsedData = fs.readFileSync(`${__dirname}/${inputDataFile}`, "utf-8");

  const rucksacks = parsedData.split("\n");
  return rucksacks;
}

export const parseScrambledRucksacks = (inputDataFile: string) => {
  const rucksacks = readLines(inputDataFile);

  const divideIntoTwoCompartments = rucksacks.map((rucksack) => {
    let firstHalf = rucksack.slice(0, Math.floor(rucksack.length / 2));
    let secondHalf = rucksack.slice(Math.floor(rucksack.length / 2));
    return [firstHalf, secondHalf];
  });

  const compartmentSplit = divideIntoTwoCompartments.map((compartment) => {
    const splitByItem = compartment.map((item) => {
      return item.split("");
    });
    return splitByItem;
  });

  return compartmentSplit;
};
