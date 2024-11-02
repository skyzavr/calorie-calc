const pound = 0.45359237;
const inch = 2.54;

export const inchToCm = (inches: number) => {
  return Number(inches) * inch;
};

export const poundToKilo = (pounds: number) => {
  return Number(pounds) * pound;
};
