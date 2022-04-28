import { database } from '../../database/database';
import { boyerMooreAlgorithm } from '../BoyerMooreAlgorithm';

export const parserCode = (code) => {
  const signature = database;
  let warningsByPattern = support(signature.pattern.warning.warningRegex.tagsOrAttr, code, '1');

  let errorByPattern = support(signature.pattern.error.errorRegx, code, '2');
  let possibleErrorByPattern = support(signature.pattern.possibleError.possibleErrorRegex, code);

  return {
    warnings: { ...warningsByPattern, errorNotice: signature.pattern.warning.warningNotice },
    error: { ...errorByPattern, errorNotice: signature.pattern.error.errorNotice },
    possibleError: {
      ...possibleErrorByPattern,
      errorNotice: signature.pattern.possibleError.possibleNotice,
    },
  };
};

const support = (deffects, code, index) => {
  return deffects.reduce((acc, cur) => {
    const resultOfAlgorithm = boyerMooreAlgorithm(code, cur);

    if (!resultOfAlgorithm.length) {
      return acc;
    }

    if (cur in acc) {
      return { ...acc, [cur]: acc.cur.push(resultOfAlgorithm) };
    }

    return { ...acc, [cur]: resultOfAlgorithm };
  }, {});
};
