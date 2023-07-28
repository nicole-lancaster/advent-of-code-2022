import { CaloriesPerElf } from "./types/caloriesPerElf";

export function countAllCaloriesAndSort(caloriesPerElf: CaloriesPerElf) {
  let currentCalorieCount: number = 0;
  let sumOfEachElf: number[] = [];

  caloriesPerElf.forEach((elf) => {
    elf.forEach((calories) => {
      currentCalorieCount += calories;
    });
    sumOfEachElf.push(currentCalorieCount);
    currentCalorieCount = 0;
  });
  const sortedSumOfEachElf: number[] = sumOfEachElf.sort(
    (a: any, b: any) => a - b,
  );

  return sortedSumOfEachElf;
}
