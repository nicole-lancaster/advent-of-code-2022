import { countCalories } from "./calorieCount";
import { parseCalories } from "./parseCalories";

const inputDataFile = "input.txt";

const caloriesArray = parseCalories(inputDataFile);

const calorieCount = countCalories(caloriesArray);
