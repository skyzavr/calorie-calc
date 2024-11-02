export const calculateCalories = (values: number[]) => {
  const [basicMet, rate] = values;
  return [
    {
      value: basicMet,
      title: 'Your basic metabolism',
      text: 'These are calories that are burned when you are at rest, and energy is spent on ensuring the processes of respiration, blood circulation, maintaining body temperature, etc.',
    },
    {
      value: rate,
      title: 'Your calorie rate',
      text: `Your calorie rate to maintain weight with current physical activity (you don't lose weight or gain weight)`,
    },
  ];
};
