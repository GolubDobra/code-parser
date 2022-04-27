import { getAllLines, getNumberOfLine } from '../getNumOfLines';
import { parserCode } from '../Parser/parser';

export async function readFile(input) {
  const file = input.files[0];
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onerror = () => {
      console.log('ERROR: ', reader.error);

      reject({ error: `Sorry! Your file could not be loaded! Error: ${reader.error}` });
    };

    reader.onload = () => {
      const code = reader.result;
      const defectByPattern = parserCode(code);
      const allNumOfLine = getNumberOfLine(defectByPattern, code);
      const line = getAllLines(code);
      resolve({ code, allNumOfLine, numOfLatter: defectByPattern });
    };
    reader.readAsText(file);
  });

  // reader.readAsText(file);

  // reader.onload = function () {
  //   const code = reader.result;
  //   const defectByPattern = parserCode(code);
  //   const allNumOfLine = getNumberOfLine(defectByPattern, code);
  //   const line = getAllLines(code);
  //   console.log('{ code, allNumOfLine }:', { code, allNumOfLine });
  //   return { code, allNumOfLine };
  // };

  // reader.onerror = function () {
  //   console.log('ERROR: ', reader.error);
  //   return { error: `Sorry! Your file could not be loaded! Error: ${reader.error}` };
  // };

  // console.log('reader.result:', reader.result);
  // return reader.result;
}
