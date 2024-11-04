const pound = 0.45359237;
const inch = 2.54;

export const inchToCm = (inches: number | string): number => {
  return Number(inches) * inch;
};

export const poundToKilo = (pounds: number | string): number => {
  return Number(pounds) * pound;
};
