import { Calories } from "./types/calories";

export function countCalories(calories: Calories[]) {
  let currentCalorieCount = 0;
  let maxCalories = 0;
  for (let i = 0; i < calories.length; i++) {
    if (typeof calories[i] === "number") {
      currentCalorieCount += calories[i];
    } else {
      if (currentCalorieCount > maxCalories) {
        maxCalories = currentCalorieCount;
      }
      currentCalorieCount = 0;
      console.log("here -->", maxCalories);
    }
  }
  console.log(maxCalories);
  return maxCalories;
}
