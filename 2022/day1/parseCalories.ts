const fs = require("fs");

export const parseCalories = () => {
  try {
    const inputData = fs
      .readFileSync(`${__dirname}/input.txt`, "utf-8")
      .toString();
      console.log(inputData)
    const numbersList = inputData.split(/\r?/);
    const caloriesArray = numbersList.map((number: string) => {
      if (number === "") {
        return number;
      } else {
        return parseInt(number);
      }
    });
    return caloriesArray;
  } catch (err) {
    console.error(err);
  }
};
