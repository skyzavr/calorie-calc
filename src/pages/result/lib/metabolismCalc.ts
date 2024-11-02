type getMetabType = (
  correctWeight: number,
  correctHeigh: number,
  age: number,
  genderParam: number
) => number;
type rateType = (metabolism: number, activity: string) => number;

export const getMetabolism: getMetabType = (
  correctWeight,
  correctHeight,
  age,
  genderParam
) => {
  const metabolism =
    9.99 * correctWeight + 6.25 * correctHeight - 4.92 * age + genderParam;
  return Number(metabolism.toFixed(0));
};
export const getRate: rateType = (metabolism, activity) =>
  Number((metabolism * Number(activity)).toFixed(0));
