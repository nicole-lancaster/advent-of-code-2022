import { CaloriesPerElf } from "./types/caloriesPerElf";

export function countCalories(caloriesPerElf: CaloriesPerElf) {
  let currentCalorieCount = 0;
  let maxCalories = 0;

  caloriesPerElf.forEach((elf) => {
    elf.forEach((calories) => {
      currentCalorieCount += calories;
    });

    if (currentCalorieCount > maxCalories) {
      maxCalories = currentCalorieCount;
    }
    currentCalorieCount = 0;
  });
  return maxCalories;
}
