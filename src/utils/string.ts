export function capitalizeAllWords(inputString: string) {
  return inputString.replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
}
