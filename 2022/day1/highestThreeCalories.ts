export function countHighestThreeCalories(sortedSumOfEachElf: number[]) {
  let currentSum: number = 0;

  const threeHighestKcals: number[] = sortedSumOfEachElf.slice(-3);
  threeHighestKcals.forEach((elf: number) => {
    currentSum += elf;
  });

  return threeHighestKcals;
}
