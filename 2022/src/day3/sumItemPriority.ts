export const sumItemPriority = (commonRucksackItems: string[]) => {
  let sumOfItemPriorties = 0;

  const charCodesOfItems = commonRucksackItems.map((item) => {
    return item.charCodeAt(0);
  });

  const charCodeToPriorityNums = charCodesOfItems.map((charCode) => {
    if (charCode >= 65 && charCode <= 90) {
      charCode -= 38;
    } else {
      charCode -= 96;
    }
    return charCode;
  });

  const sumOfPriorties = charCodeToPriorityNums.forEach((priorityNum) => {
    return (sumOfItemPriorties += priorityNum);
  });

  return sumOfItemPriorties;
};
