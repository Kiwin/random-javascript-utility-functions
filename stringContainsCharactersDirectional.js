function stringContainsCharactersDirectional(string, filter, forward = true) {
  if (!forward) {
    string = string
      .split("")
      .reverse()
      .join("");
  }

  let currentFilterIndex = 0;
  for (let i = 0; i < string.length; i++) {
    if (filter[currentFilterIndex] === string[i]) {
      if (currentFilterIndex === filter.length - 1) {
        return true;
      } else {
        currentFilterIndex++;
      }
    }
  }
  return false;
}
