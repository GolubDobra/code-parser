export const getNumberOfLine = (defectByPattern, source) => {
  let allNumOfLine = {};

  for (let key in defectByPattern) {
    if (key !== 'errorNotice') {
      const result = defectByPattern[key].reduce((acc, cur) => {
        const res = source.slice(0, cur).split('\n').length;

        if (key in acc) {
          acc[key].push(res);
          return { ...acc };
        }

        return { ...acc, [key]: [res] };
      }, {});
      allNumOfLine = Object.assign({}, allNumOfLine, result);
    }
  }

  return allNumOfLine;
};

export const getAllLines = (source) => source.split('\n').length;
