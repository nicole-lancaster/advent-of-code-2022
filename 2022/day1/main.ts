import { countMaxCalories } from "./calorieCountMax";
import { countAllCaloriesAndSort } from "./countAllCaloriesAndSort";
import { countHighestThreeCalories } from "./highestThreeCalories";
import { parseCalories } from "./parseCalories";

const inputDataFile = "input.txt";

const caloriesArray = parseCalories(inputDataFile);

const calorieCount = countAllCaloriesAndSort(caloriesArray);

const highestThreeCalories = countHighestThreeCalories(calorieCount);

const maxCalories = countMaxCalories(highestThreeCalories);
