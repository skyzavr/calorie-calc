export const getParams = (paramsList: string[], dataList: string[]) => {
  return paramsList.map((el, ind) => {
    return {
      key: el,
      buttonValue: dataList[ind],
    };
  });
};
