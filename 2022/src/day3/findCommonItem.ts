export const findCommonItem = (parsedData: string[][][]) => {
  const foundCommonItems = parsedData.map((rucksack) => {
    let firstHalf = new Set(rucksack[0]);
    let secondHalf = new Set(rucksack[1]);
    let commonItem = [...firstHalf].filter((item) => secondHalf.has(item));
    return commonItem[0];
  });
  return foundCommonItems;
};
