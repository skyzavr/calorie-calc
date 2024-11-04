export type listTYpe = { text: string; title: string }[];

export const calculateCalories = (list: listTYpe, values: number[]) => {
  return list.map((el, i) => {
    return { ...el, value: values[i] };
  });
};
