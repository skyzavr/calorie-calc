export const calculateBmi = (height: number, weight: number): number => {
  const bmi = weight / Math.pow(height / 100, 2);
  return Number(bmi.toFixed(1));
};

export const getDescription = (value: number): string => {
  if (value < 18.4) return 'insuf';
  else if (value < 24.9) return 'normal';
  else if (value < 29.9) return 'overWeight';
  else if (value < 34.9) return 'obesityOne';
  else if (value < 39.9) return 'obesityTwo';
  else return 'obesityThree';
};
