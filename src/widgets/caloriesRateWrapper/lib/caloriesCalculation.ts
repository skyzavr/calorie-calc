type calcRateFunc = (
  list: string[],
  metabolism: number
) => { percentage: number; calories: number; description: string }[];

export const calculateCaloriesRate: calcRateFunc = (list, metabolism) => {
  const startPercentage = 5;
  const percentageStep = 5;

  return list.map((el, ind) => {
    const percent = startPercentage + percentageStep * ind;
    const caloriesPercent = (100 - percent) / 100;

    return {
      percentage: percent,
      calories: metabolism * caloriesPercent,
      description: el,
    };
  });
};
