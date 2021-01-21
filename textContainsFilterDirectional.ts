/**
 * Method for determining if a text contains the a set of characters in a direction.
 * Example 1: Does "abcd" contain "aCd" in the order from left to right: ("abCd", "aCd") = true.
 * Example 2: Does "aCbd" contain "adC" in the order from left to right: ("abCd", "adC") = false.
 * @param text String to search.
 * @param characters String containing the characters to search 'text' for.
 * @param forward Optional Boolean flag dictating the searching direction. If true search from left to right, else if false search from right to left.
 */
export function textContainsFilterDirectional(text: String, characters: String, forward: Boolean = true): Boolean {
  if (!forward) {
    text = text
      .split("")
      .reverse()
      .join("");
  }

  let currentFilterIndex = 0;
  for (let i = 0; i < text.length; i++) {
    if (characters[currentFilterIndex] === text[i]) {
      if (currentFilterIndex === characters.length - 1) {
        return true;
      } else {
        currentFilterIndex++;
      }
    }
  }
  return false;
}

/**
 * Method for determining if a text contains the a set of characters in a direction.
 * Example 1: Does "abCd" contain "aCd" in the order from left to right: ("abCd", "aCd") = true.
 * Example 2: Does "aCbd" contain "adC" in the order from left to right: ("abCd", "adC") = false.
 * @param text String to search.
 * @param characters String containing the characters to search 'text' for.
 * @param forward Optional Boolean flag dictating the searching direction. If true search from left to right, else if false search from right to left.
 */
function textContainsFilterDirectional2(text: String, characters: String, forward: Boolean = true): Boolean {
  //Reverse text if forward != true
  if (!forward) {
    text = text
      .split("")
      .reverse()
      .join("");
  }

  const filterCharacters = characters.split("");
  const textCharacters = text.split("");
  textCharacters.forEach(textCharacter => {
    if (filterCharacters[0] === textCharacter) {
      filterCharacters.shift();
      if (filterCharacters.length === 0) {
        return true;
      }
    }
  });
  return false;
}
