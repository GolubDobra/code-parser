import { getNumberOfLine } from '../getNumOfLines';
import { parserCode } from '../Parser/parser';

export async function readFile(input) {
  const file = input.files[0];
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      reject({ requestError: `Sorry! Your file could not be loaded! Error: ${reader.error}` });
    };

    reader.onload = () => {
      const code = reader.result;
      const defectByPattern = parserCode(code);
      const allNumOfLine = [];

      for (let key in defectByPattern) {
        allNumOfLine.push(getNumberOfLine(defectByPattern[key], code));
      }

      resolve({
        code: code,
        errorNotice: {
          warnings: defectByPattern.warnings.errorNotice,
          error: defectByPattern.error.errorNotice,
          possibleError: defectByPattern.possibleError.errorNotice,
        },
        warnings: { allNumOfLine: allNumOfLine[0], numOfLatter: defectByPattern.warnings },
        error: { allNumOfLine: allNumOfLine[1], numOfLatter: defectByPattern.error },
        possibleError: {
          allNumOfLine: allNumOfLine[2],
          numOfLatter: defectByPattern.possibleError,
        },
      });
    };
    reader.readAsText(file);
  });
}
