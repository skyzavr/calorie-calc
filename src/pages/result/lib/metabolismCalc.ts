type getMetabType = (
  correctWeight: number,
  correctHeigh: number,
  age: number | string,
  gender: string | number
) => number;
type rateType = (metabolism: number, activity: number | string) => number;

export const getMetabolism: getMetabType = (...args) => {
  const [correctWeight, correctHeight, age, gender] = args;
  const genderParam = gender === 'female' ? -161 : 5;

  const metabolism =
    9.99 * correctWeight +
    6.25 * correctHeight -
    4.92 * Number(age) +
    genderParam;
  return Number(metabolism.toFixed(0));
};
export const getRate: rateType = (metabolism, activity) =>
  Number((metabolism * Number(activity)).toFixed(0));
