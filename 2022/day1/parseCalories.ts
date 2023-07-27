import fs from "fs";

export const parseCalories = (inputDataFile: string): number[][] => {
  const inputData = fs
    .readFileSync(`${__dirname}/${inputDataFile}`, "utf-8")
    .toString();

  const groups = inputData.split("\n\n");
  const parsedCalories = groups.map((rawGroup) => rawGroup.split("\n"));

  return parsedCalories.map((caloriesArray) =>
    caloriesArray.map((calories) => parseInt(calories)),
  );
};
