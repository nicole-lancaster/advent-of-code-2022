import { CaloriesPerElf } from "./types/caloriesPerElf";

export function countCaloriesOfTopThreeElves(caloriesPerElf: CaloriesPerElf) {
  let currentCalorieCount: number = 0;
  let sumOfEachElf: number[] = [];
  let currentSum: number = 0;

  caloriesPerElf.forEach((elf) => {
    elf.forEach((calories) => {
      currentCalorieCount += calories;
    });
    sumOfEachElf.push(currentCalorieCount);
    currentCalorieCount = 0;
  });
  const sortedSumOfEachElf: number[] = sumOfEachElf.sort(
    (a: any, b: any) => a - b
  );
  // own function and testing
  const threeHighestKcals: number[] = sortedSumOfEachElf.slice(-3);
  threeHighestKcals.forEach((elf: number) => {
    currentSum += elf;
  });

  // own function and testing
  const highestTotalCalories: Number = threeHighestKcals.slice(-1)[0];

  return threeHighestKcals;
}
