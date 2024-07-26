export function convertToKebabCase(inputString: string) {
  // Convert the string to lowercase and replace spaces with hyphens
  return inputString.toLowerCase().replace(/\s+/g, "-");
}
