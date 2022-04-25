const parseFile = (file) => {
  const regV = 'div';
  const findDefect = file.match(regV);
  console.log('DEFECT: ', findDefect);
};

export function readFile(input) {
  let file = input.files[0];

  let reader = new FileReader();

  reader.readAsText(file);

  reader.onload = function () {
    console.log('RESULT: ', reader.result);
    const newReader = reader.result.replace(/\r?\n/g, '');
    console.log('NEW RESULT: ', newReader);
    parseFile(newReader);
  };

  reader.onerror = function () {
    console.log('ERROR: ', reader.error);
  };
}
