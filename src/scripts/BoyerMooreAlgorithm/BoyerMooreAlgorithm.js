export function boyerMooreAlgorithm(source, pattern) {
  let coincidences = [];
  let patternLength = pattern.length - 1;
  let position = {};
  let sourceLength = source.length;
  let index = 0;
  let jndex;
  let supportValue;
  if (typeof pattern === 'object') {
    let result;

    // eslint-disable-next-line no-cond-assign
    while (result = pattern.exec(source)) {
      coincidences.push(result.index);
    }
    if (coincidences.length !== 0) {

      return coincidences;
    }
  }

  for (; index < patternLength; index++) {
    position[pattern.charAt(index)] = patternLength - index;
  }
  index = 0;
  while (index < sourceLength) {
    for (jndex = patternLength; jndex >= 0; jndex--) {
      if (pattern.charAt(jndex) !== source.charAt(index + jndex)) {
        break;
      }
    }

    if (jndex < 0) {
      index++;
      coincidences.push(index);
    } else {
      supportValue = position[source.charAt(index + jndex)];

      if (!supportValue) {
        supportValue = patternLength + 1;
      }

      supportValue += jndex - patternLength;

      if (supportValue <= 0) {
        supportValue = 1;
      }

      index += supportValue;
    }
  }

  return coincidences;
}
