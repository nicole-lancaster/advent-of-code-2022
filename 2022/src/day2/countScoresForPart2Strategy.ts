export const countScoresForPart2Strategy = (parsedData: string[][]) => {
  const moveAndScorePairsPart2: any = {
    "A X": 3,
    "A Y": 4,
    "A Z": 8,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 2,
    "C Y": 6,
    "C Z": 7,
  };
  let totalScore: number = 0;

  parsedData.forEach((pair: any) => {
    if (moveAndScorePairsPart2.hasOwnProperty([pair])) {
      totalScore += moveAndScorePairsPart2[pair];
    }
  });
  return totalScore;
};