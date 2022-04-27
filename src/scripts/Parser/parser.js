import { database } from '../../database/database';
import { boyerMooreAlgorithm } from '../BoyerMooreAlgorithm';

// export const parserCode = (code) => {
//   const signature = require('../../database/database.json');

//   const defectByPattern = signature.pattern.warning.warningRegex.tagsOrAttr.reduce((acc, cur) => {
//     const res = boyerMooreAlgorithm(code, cur);

//     if (!res.length) {
//       return acc;
//     }

//     if (cur in acc) {
//       return { ...acc, [cur]: acc.cur.push(res) };
//     }

//     return { ...acc, [cur]: res };
//   }, {});

//   console.log('defectByPattern', {
//     ...defectByPattern,
//     error: signature.pattern.warning.warningNotice,
//   });
//   return { ...defectByPattern, error: signature.pattern.warning.warningNotice };
// };

export const parserCode = (code) => {
  const signature = database;
  let warningsByPattern = support(signature.pattern.warning.warningRegex.tagsOrAttr, code, '1');
  console.log('warningsByPattern: ', warningsByPattern);

  let errorByPattern = support(signature.pattern.error.errorRegx, code, '2');
  let possibleErrorByPattern = support(signature.pattern.possibleError.possibleErrorRegex, code);

  console.log('errorByPattern: ', errorByPattern);
  console.log('possibleErrorByPattern: ', possibleErrorByPattern);

  console.log('{ ...warningsByPattern, error: signature.pattern.warning.warningNotice }: ', {
    ...warningsByPattern,
    error: signature.pattern.warning.warningNotice,
  });
  
  return { ...warningsByPattern, error: signature.pattern.warning.warningNotice };
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
