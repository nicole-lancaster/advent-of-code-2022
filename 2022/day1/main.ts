import { countMaxCalories } from "./calorieCountMax";
import { countAllCaloriesAndSort } from "./countAllCaloriesAndSort";
import { sumHighestThreeCalories } from "./highestThreeCalories";
import { parseCalories } from "./parseCalories";

const inputDataFile = "input.txt";

const caloriesArray = parseCalories(inputDataFile);

const calorieCount = countAllCaloriesAndSort(caloriesArray);

const sumOfHighestThreeCalories = sumHighestThreeCalories(calorieCount);

const maxCalories = countMaxCalories(calorieCount);
