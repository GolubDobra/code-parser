export function boyerMooreAlgorithm(source, pattern) {
  let coincidences = [];

  let patternLength = pattern.length - 1;
  let position = {};
  let sourceLength = source.length;
  let index = 0;
  let jndex;
  let supportValue;

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
      supportValue = !supportValue && patternLength + 1;
      supportValue += jndex - patternLength;
      supportValue = supportValue <= 0 && 1;
      index += supportValue;
    }
  }

  return coincidences;
}
