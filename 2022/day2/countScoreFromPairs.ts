export const countScoreFromPairs = (parsedData: string[][]) => {
  const moveAndScorePairs: any = {
    "A X": 4,
    "A Y": 8,
    "A Z": 3,
    "B X": 1,
    "B Y": 5,
    "B Z": 9,
    "C X": 7,
    "C Y": 2,
    "C Z": 6,
  };
  let totalScore: number = 0;

  parsedData.forEach((pair: any) => {
    if (moveAndScorePairs.hasOwnProperty([pair])) {
      totalScore += moveAndScorePairs[pair];
    }
  });
  return totalScore;
};
