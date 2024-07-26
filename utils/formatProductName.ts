export function formatProductName(input: string) {
  // Convert the string to lowercase
  let formattedString = input.toLowerCase();

  // Remove special characters and spaces
  formattedString = formattedString
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, "-");

  // Replace slashes with hyphens
  formattedString = formattedString.replace(/\//g, "-");

  return formattedString;
}
