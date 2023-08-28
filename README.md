 # Advent of Code 2022 🎄
This is my take on solving the 2022 Advent of Code (AOC) Challenges 

 ## Let's rewind to December 2022... ❄️
When the 2022 advent of code challenges were released, I had only just started learning HTML and CSS and had no other prior coding experience. 
So although 'tis not the season and quite literally the middle of summer at the time of starting this little project, I thought these were high quality katas that would be great practice (and fun)!

Other than just solving the problem to get the correct solution, I have also...

- written and tested parser functions to parse the raw data given by AOC into a usuable form
- followed the 'single responsibility principle' by keeping each function small and have a specific purpose
- written unit tests using Jest

## Running locally ⚙️ 

### Pre-requisites
Node

`git clone https://github.com/nicole-lancaster/advent-of-code-2022.git`\n
 open repo in your IDE of choice and then cd into 2022 --> advent-of-code-2022/2022\n
 npm install

 ### To run the challenges with ts node

 To reveal the solutions to each challenge, you will find this at the end of each 1.main.ts ile for each day:

 `// console.log(`Part 1 solution: ${part1Solution}`);`
 `// console.log(`Part 2 solution: ${part2Solution}`);`

 uncomment these out and run the following command:

  `npm start src/day<X>/1.main.ts` - replacing the <X> with the day you would like (see progress section below for current days completed!)

 ### to run the tests with Jest
 
 `npm test` to run full test suite
 

## Progress

| Day | Challenge Name          | Stars |
| --- | ----------------------- | ----- |
| 1   | Calorie Counting        | ⭐⭐  |
| 2   | Rock Paper Scissors     | ⭐⭐  |
| 3   | Rucksack Reorganization | ⭐    |
| 4   | Camp Cleanup            | ⭐⭐  |


 ## Future plans ✅

1. to create more Jest tests for each function to full cover 'happy path' and 'sad path logic'
2. fully utilise more TypeScript features in my code to help improve my coding productivity and improve the number of potential bugs in my code
3. complete all 25 challenges!

## Feedback/suggestions 🫶 

First of all, if you read any of my code, thank you! I would be extremly grateful for any feedback on ways to improve. Please just reach out to me on LinkedIn, raise a pull request, or submit an issue!
