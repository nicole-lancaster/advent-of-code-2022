import { countCaloriesOfTopThreeElves } from "./calorieCountTopThree";
import { parseCalories } from "./parseCalories";

const inputDataFile = "input.txt";

const caloriesArray = parseCalories(inputDataFile);

const calorieCount = countCaloriesOfTopThreeElves(caloriesArray);
